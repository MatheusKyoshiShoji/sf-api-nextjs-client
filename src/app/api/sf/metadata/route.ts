import { sfSoapClient } from '@/src/services/salesforceClient';
import { buildListMetadataRequest } from '@/src/utils/buildSoapRequest';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { sessionId } = await req.json();

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
        }

        const soapBody: string = buildListMetadataRequest(sessionId);
        const response = await sfSoapClient(soapBody);

        return NextResponse.json({ success: true, data: response });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}