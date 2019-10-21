import RequestMethodType from './RequestMethodType'
import RequestHeaders from './RequestHeaders'

/**
 * An http request.
 */
export default class Request {

    private _data: {
        method: RequestMethodType,
        headers: RequestHeaders,
        body: string | undefined
    }

    constructor(method: RequestMethodType, headers: RequestHeaders, body?: string) {
        this._data = {
            method,
            headers,
            body
        }
    }

    /**
     * The type of this request.
     * Only POST or GET.
     */
    get method(): RequestMethodType {
        return this._data.method
    }

    /**
     * The headers of this request.
     */
    get headers(): RequestHeaders {
        return this._data.headers
    }

    /**
     * The payload of this request.
     */
    get body(): string | undefined {
        return this._data.body
    }

}