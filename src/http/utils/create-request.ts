import RequestMethodType from "../models/RequestMethodType";
import HttpClientConfiguration from "../models/HttpClientConfiguration";
import createHeaders from "./create-headers";
import convertJsonToQuery from "./convert-json-to-query";
import Request from "../models/Request";

/**
 * Creates a full request info based on the request method, http client configuration and the possible payload.
 */
export default function createRequest(method: RequestMethodType, config: HttpClientConfiguration, payload: { [key: string]: any } = {}) {
    const headers = createHeaders(config)
    const body = convertJsonToQuery(payload)

    if (method === RequestMethodType.GET)
        return new Request(method, headers)
    
    return new Request(method, headers, body)
}