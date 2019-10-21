import HttpClient from './HttpClient'
import HttpClientConfiguration from "./HttpClientConfiguration";
import createRequest from "../utils/create-request";
import RequestMethodType from "./RequestMethodType";
import sendRequest from "../utils/send-request";
import convertJsonToQuery from "../utils/convert-json-to-query";
import UrlBuilder from './UrlBuilder';

const BASE_URL = 'https://proxer.me/api/v1/'

export default class ProxerHttpClient implements HttpClient {

    private _data: {
        config: HttpClientConfiguration,
        urlBuilder: UrlBuilder
    }

    constructor(config: HttpClientConfiguration, baseUrl?: string) {
        this._data = {
            config: config,
            urlBuilder: new UrlBuilder(baseUrl ? baseUrl : BASE_URL)
        }
    }

    get config(): HttpClientConfiguration {
        return this._data.config
    }

    post(urls: string[], payload: { [key: string]: any } = {}) {
        const apiUrl = this._data.urlBuilder.build(...urls)
        const request = createRequest(RequestMethodType.POST, this.config, payload)
        return sendRequest(apiUrl, request)
    }

    get(urls: string[], payload: { [key: string]: any } = {}) {
        const apiUrl = this._data.urlBuilder.build(...urls)
        const fullUrl = apiUrl + '?' + convertJsonToQuery(payload)
        const request = createRequest(RequestMethodType.GET, this.config)
        return sendRequest(fullUrl, request)
    }

}