import HttpClientConfiguration from '../../../src/http/models/HttpClientConfiguration'
import RequestMethodType from "../../../src/http/models/RequestMethodType"
import createRequest from "../../../src/http/utils/create-request"

describe('create request function', () => {
    it('creates post request with body', () => {
        const method = RequestMethodType.POST
        const config = new HttpClientConfiguration()
        const payload: { [key: string]: string } = { hello: 'world' }

        const request = createRequest(method, config, payload)
        expect(request.method).toBe(RequestMethodType.POST)
        expect(request.body).toBe('hello=world')
    })

    it('creates get request', () => {
        const method = RequestMethodType.GET
        const config = new HttpClientConfiguration()

        const request = createRequest(method, config)
        expect(request.method).toBe(RequestMethodType.GET)
    })
})