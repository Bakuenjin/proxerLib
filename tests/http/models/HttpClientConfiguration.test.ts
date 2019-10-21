import HttpClientConfiguration from "../../../src/http/models/HttpClientConfiguration"

describe('HttpClientConfiguration class', () => {
    it('has no property defined by default', () => {
        const config = new HttpClientConfiguration()
        expect(config.apiKey).toBeUndefined()
        expect(config.userToken).toBeUndefined()
        expect(config.testMode).toBeUndefined()
        expect(config.customUserAgent).toBeUndefined()
    })

    it('can define all properties via constructor', () => {
        const config = new HttpClientConfiguration(
            'key', 'token', true, 'user-agent'
        )
        expect(config.apiKey).toBe('key')
        expect(config.userToken).toBe('token')
        expect(config.testMode).toBe(true)
        expect(config.customUserAgent).toBe('user-agent')
    })

    it('allows all properties to be redefined', () => {
        const config = new HttpClientConfiguration()

        config.apiKey = 'key'
        config.userToken = 'token'
        config.testMode = true
        config.customUserAgent = 'user-agent'

        expect(config.apiKey).toBe('key')
        expect(config.userToken).toBe('token')
        expect(config.testMode).toBe(true)
        expect(config.customUserAgent).toBe('user-agent')
    })
})