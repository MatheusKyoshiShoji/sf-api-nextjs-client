import { XMLParser } from "fast-xml-parser";

export class SoapToJsonParser {
    private parser: XMLParser;

    constructor() {
        this.parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_',
            removeNSPrefix: true
        })
    }

    parse(xmlString: string): any {
        try {
            const jsonObj = this.parser.parse(xmlString);

            const envelope = jsonObj.Envelope;
            if (!envelope || !envelope.Body) {
                throw new Error('Invalid SOAP format: Envelope or Body missing');
            }

            const bodyContent = envelope.Body;

            const bodyKeys = Object.keys(bodyContent);
            if (bodyKeys.length === 1) {
                return bodyContent[bodyKeys[0]];
            }

            return bodyContent;
        } catch (error) {
            console.error('Failed to parse SOAP XML:', error);
            throw error;
        }
    }
}