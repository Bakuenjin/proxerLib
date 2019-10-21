import RequestHeaders from "../../../src/http/models/RequestHeaders"
import ProxerHeader from "../../../src/http/models/ProxerHeader"

describe('RequestHeaders class', () => {
    it('has data property', () => {
        const headers = new RequestHeaders()
        expect(headers.data).toStrictEqual({})
    })

    it('allows to set header', () => {
        const headers = new RequestHeaders()
        headers.setHeader(ProxerHeader.ApiKey, 'key')
        expect(headers.data[ProxerHeader.ApiKey]).toBe('key')
    })
    
    it('allows to delete header', () => {
        const headers = new RequestHeaders()
        headers.setHeader(ProxerHeader.ApiKey, 'key')
        expect(headers.data[ProxerHeader.ApiKey]).toBe('key')
        headers.deleteHeader(ProxerHeader.ApiKey)
        expect(headers.data).toStrictEqual({})
    })
    
    it('allows to clear all headers', () => {
        const headers = new RequestHeaders()
        headers.setHeader(ProxerHeader.ApiKey, 'key')
        headers.setHeader(ProxerHeader.UserToken, 'token')
        expect(headers.data[ProxerHeader.ApiKey]).toBe('key')
        expect(headers.data[ProxerHeader.UserToken]).toBe('token')

        headers.clearHeaders()
        expect(headers.data).toStrictEqual({})
    })
})