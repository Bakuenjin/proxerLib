import ProxerHeader from "./ProxerHeader"

/**
 * The headers used by the http client.
 */
export default class RequestHeaders {

    private _data: { [property: string]: string }

    constructor() {
        this._data = {}
    }

    /**
     * The actual headers data.
     */
    get data(): { [property: string]: string } {
        return this._data
    }

    /**
     * Sets the value for the specified header.
     */
    setHeader(header: ProxerHeader, value: string): void {
        this._data[header] = value
    }

    /**
     * Removes the value for the specified header.
     */
    deleteHeader(header: ProxerHeader): void {
        delete this._data[header]
    }

    /**
     * Clears all headers.
     */
    clearHeaders(): void {
        this._data = {}
    }
}