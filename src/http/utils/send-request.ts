import fetch from 'node-fetch'
import Request from '../models/Request';
import handleError from './handle-error';

/**
 * Sends an http request to the specified URL with the specified request info.
 */
export default async function sendRequest(url: string, request: Request) {
    const requestParams = {
        method: request.method,
        headers: request.headers.data,
        body: request.body
    }

    const response = await fetch(url, requestParams)
    if (response.status !== 200)
        throw new Error(`Connection status error!\nStatus: ${response.status}`)
    
    const json = await response.json()
    if (json.error)
        throw handleError(json.code)

    return json.data 
}