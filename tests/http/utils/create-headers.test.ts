import HttpClientConfiguration from '../../../src/http/models/HttpClientConfiguration'
import createHeaders from '../../../src/http/utils/create-headers'
import ProxerHeader from '../../../src/http/models/ProxerHeader'

describe('create headers function', () => {
    it('converts full config into headers', () => {
        const config = new HttpClientConfiguration('a', 'b', true, 'c')
        const headers = createHeaders(config)
        expect(headers.data[ProxerHeader.ContentType]).toBeTruthy()
        expect(headers.data[ProxerHeader.UserAgent]).toBeTruthy()
        expect(headers.data[ProxerHeader.ApiKey]).toBeTruthy()
        expect(headers.data[ProxerHeader.UserToken]).toBeTruthy()
        expect(headers.data[ProxerHeader.TestMode]).toBeTruthy()
    })

    it('converts empty config into only content type headers', () => {
        const config = new HttpClientConfiguration()
        const headers = createHeaders(config)
        expect(headers.data[ProxerHeader.ContentType]).toBeTruthy()
        expect(headers.data[ProxerHeader.UserAgent]).toBeFalsy()
        expect(headers.data[ProxerHeader.ApiKey]).toBeFalsy()
        expect(headers.data[ProxerHeader.UserToken]).toBeFalsy()
        expect(headers.data[ProxerHeader.TestMode]).toBeFalsy()
    })
})