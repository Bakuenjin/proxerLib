import HttpClient from "../models/HttpClient"
import ProxerApiClass from "./enums/ProxerApiClass"

export default class BaseAPI {
    
    protected _data: {
        httpClient: HttpClient,
        apiClass: ProxerApiClass
    }

    constructor(httpClient: HttpClient, apiClass: ProxerApiClass) {
        this._data = {
            httpClient,
            apiClass
        }
    }

}