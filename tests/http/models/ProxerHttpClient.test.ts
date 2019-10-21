import HttpClientConfiguration from "../../../src/http/models/HttpClientConfiguration"
import ProxerHttpClient from "../../../src/http/models/ProxerHttpClient"
import { startMockserver } from "../../mocks/server"

startMockserver(3001)

describe('ProxerHttpClient class', () => {
    it('has a config property', () => {
        const config = new HttpClientConfiguration()
        const client = new ProxerHttpClient(config)

        expect(client.config).toBe(config)
    })

    it('can send post requests', async () => {
        const baseUrl = 'http://127.0.0.1:3001'
        const config = new HttpClientConfiguration()
        const client = new ProxerHttpClient(config, baseUrl)

        const data = await client.post(['default'])
        expect(data.hello).toBe('world')
    })

    it('can send get requests', async () => {
        const baseUrl = 'http://127.0.0.1:3001'
        const config = new HttpClientConfiguration()
        const client = new ProxerHttpClient(config, baseUrl)

        const data = await client.get(['default'])
        expect(data.hello).toBe('world')
    })
})