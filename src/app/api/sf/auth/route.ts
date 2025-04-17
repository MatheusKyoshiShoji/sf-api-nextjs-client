import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SF_CLIENT_ID!,
        redirect_uri: process.env.SF_REDIRECT_URI!,
    })

    const salesforceAuthUrl = `https://login.salesforce.com/services/oauth2/authorize?${params.toString()}`;

    console.log(salesforceAuthUrl);

    return NextResponse.redirect(salesforceAuthUrl);
} 