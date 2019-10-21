import ProxerAPI from '../../src/http/ProxerAPI'
import ProxerHttpClient from '../../src/http/models/ProxerHttpClient'

describe('ProxerAPI class', () => {
    it('can be created with ProxerHttpClient', () => {
        const proxerApi = new ProxerAPI()
        expect(proxerApi.httpClient).toBeInstanceOf(ProxerHttpClient)
    })

    it('can be created with custom HttpClient', () => {
        
    })

    it('can set user token', () => {
        const proxerApi = new ProxerAPI()
        proxerApi.setUserToken('token')
        if (proxerApi.httpClient instanceof ProxerHttpClient)
            expect(proxerApi.httpClient.config.userToken).toBe('token')
        else fail()
    })

    it('can delete user token', () => {
        const proxerApi = new ProxerAPI()
        if (proxerApi.httpClient instanceof ProxerHttpClient) {
            proxerApi.setUserToken('token')
            expect(proxerApi.httpClient.config.userToken).toBe('token')
            proxerApi.deleteUserToken()
            expect(proxerApi.httpClient.config.userToken).toBeUndefined()
        }
        else fail()
    })
})