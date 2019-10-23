import HttpClient from '../../src/http/models/HttpClient'

export default class CustomHttpClient implements HttpClient {

    post(url: string | string[], payload: { [key: string]: any; }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    get(url: string | string[], payload: { [key: string]: any; }): Promise<any> {
        throw new Error("Method not implemented.");
    }
 
}