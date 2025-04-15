import axios from "axios";

const SF_ENDPOINT: string = "https://brave-otter-mtrwvv-dev-ed.trailblaze.my.salesforce.com"

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

        console.log('Data:', response.data);

        return response;
    } catch (error: any) {
        console.error('Erro ao enviar requisição SOAP: ', error.response?.data || error.message)
    }
}