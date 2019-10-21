import sendRequest from '../../../src/http/utils/send-request'
import createRequest from '../../../src/http/utils/create-request'
import RequestMethodType from '../../../src/http/models/RequestMethodType'
import HttpClientConfiguration from '../../../src/http/models/HttpClientConfiguration'
import { startMockserver } from '../../mocks/server'
import { FatalError } from '../../../src/http/errors/ProxerErrors'

startMockserver(3000)

describe('send request function', () => {
    it('sends GET http request', async () => {
        const method = RequestMethodType.GET
        const config = new HttpClientConfiguration()

        const request = createRequest(method, config)
        const data = await sendRequest('http://127.0.0.1:3000/default', request)
        expect(data['hello']).toBe('world')
    })

    it('sends POST http request', async () => {
        const method = RequestMethodType.POST
        const config = new HttpClientConfiguration()
        const payload: { [key: string]: any } = { hello: 'world' }

        const request = createRequest(method, config, payload)
        const data = await sendRequest('http://127.0.0.1:3000/default', request)
        expect(data['hello']).toBe('world')
    })

    it('can throw specific error', async () => {
        const method = RequestMethodType.GET
        const config = new HttpClientConfiguration()
        const request = createRequest(method, config)

        try { await sendRequest('http://127.0.0.1:3000/error', request) }
        catch (err) { expect(err).toBeInstanceOf(FatalError) }
    })
    
    it('can throw status error', async () => {
        const method = RequestMethodType.GET
        const config = new HttpClientConfiguration()
        const request = createRequest(method, config)

        try { await sendRequest('http://127.0.0.1:3000/statuserror', request) }
        catch (err) { expect(err).toBeInstanceOf(Error) }    
    })
})