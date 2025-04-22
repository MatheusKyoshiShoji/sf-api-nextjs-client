import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios'

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');
    const cookieToken = await cookies();

    if(!code) {
        return NextResponse.json({ error: 'Missing code' }, { status: 400 });
    }

    try {
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            client_id: process.env.SF_CLIENT_ID!,
            client_secret: process.env.SF_CLIENT_SECRET!,
            redirect_uri: process.env.SF_REDIRECT_URI!,
        });

        const { data } = await axios.post(process.env.SF_TOKEN_URL!, params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        console.log('Salesforce token data', data);

        cookieToken.set('sf_access_token', data.access_token, {
            httpOnly: true,
            path: '/',
        })

        cookieToken.set('sf_client_id', data.client_id, {
            httpOnly: true,
            path: '/'
        })
        
        return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (err: any) {
        console.error('Token error:', err.response?.data || err.message);
        return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
    }
}