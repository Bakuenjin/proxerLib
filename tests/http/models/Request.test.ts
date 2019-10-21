import RequestMethodType from "../../../src/http/models/RequestMethodType"
import RequestHeaders from "../../../src/http/models/RequestHeaders"
import Request from "../../../src/http/models/Request"

describe('Request class', () => {
    it('has method, headers and body property', () => {
        const method = RequestMethodType.POST
        const headers = new RequestHeaders()
        const body = 'hello=world'

        const request = new Request(method, headers, body)
        expect(request.method).toBe(RequestMethodType.POST)
        expect(request.headers).toBe(headers)
        expect(request.body).toBe('hello=world')
    })  
})