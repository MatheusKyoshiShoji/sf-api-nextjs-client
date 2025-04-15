export function buildListMetadataRequest(sessionId: string, version = '62.0'): string {
    return `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://soap.sforce.com/2006/04/metadata">
    <soapenv:Header>
        <tns:SessionHeader>
            <tns:sessionId>${sessionId}</tns:sessionId>
        </tns:SessionHeader>
    </soapenv:Header>
    <soapenv:Body>
        <tns:listMetadata>
            <listMetadataQuery>
                <type>CustomObject</type>
                <folder></folder>
            </listMetadataQuery>
            <asOfVersion>${version}</asOfVersion>
        </tns:listMetadata>
    </soapenv:Body>
</soapenv:Envelope>`;
}