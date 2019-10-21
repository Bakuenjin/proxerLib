import HttpClientConfiguration from "../models/HttpClientConfiguration";
import RequestHeaders from "../models/RequestHeaders";
import ProxerHeader from "../models/ProxerHeader";

const DEFAULT_CONTENT_TYPE = 'application/x-www-form-urlencoded'

/**
 * Creates valid request headers from the http client configuration.
 */
export default function createHeaders(config: HttpClientConfiguration): RequestHeaders {
    const headers = new RequestHeaders()
    headers.setHeader(ProxerHeader.ContentType, DEFAULT_CONTENT_TYPE)
    
    if (config.customUserAgent)
        headers.setHeader(ProxerHeader.UserAgent, config.customUserAgent)

    if (config.apiKey)
        headers.setHeader(ProxerHeader.ApiKey, config.apiKey)

    if (config.userToken)
        headers.setHeader(ProxerHeader.UserToken, config.userToken)  

    if (config.testMode)
        headers.setHeader(ProxerHeader.TestMode, '1')

    return headers
}