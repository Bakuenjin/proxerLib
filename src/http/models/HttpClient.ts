export default interface HttpClient {

    post(url: string | string[], payload?: { [key: string]: any }): Promise<any>
    get(url: string | string[], payload?: { [key: string]: any }): Promise<any>

}