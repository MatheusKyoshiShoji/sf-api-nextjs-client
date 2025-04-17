import axios from "axios";
import { SoapToJsonParser } from "../utils/xmlParser";

const SF_ENDPOINT: string = "https://brave-otter-mtrwvv-dev-ed.trailblaze.my.salesforce.com/services/Soap/m/62.0"

export async function sfSoapClient(req: string) {
    try {
        const response = await axios.post(SF_ENDPOINT, req, {
            headers: {
                'Content-Type': 'text/xml',
                'charset': 'UTF-8',
                'SOAPAction': 'login',
                'Accept': 'text/xml',
            }
        })

        const parser: SoapToJsonParser = new SoapToJsonParser();
        const result = parser.parse(response.data);

        return result;
    } catch (error: any) {
        console.error('Erro ao enviar requisição SOAP: ', error.response?.data || error.message);
    }
}