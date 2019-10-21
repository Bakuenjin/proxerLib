import UrlBuilder from "../../../src/http/models/UrlBuilder"

describe('UrlBuilder class', () => {
    it('has baseUrl property', () => {
        const builder = new UrlBuilder('http://google.de/')
        expect(builder.baseUrl).toBe('http://google.de/')
    })

    it('adds last slash to base url', () => {
        const builder = new UrlBuilder('http://nolastslash.com')
        expect(builder.baseUrl).toBe('http://nolastslash.com/')
    })

    it('builds url based on chunks', () => {
        const builder = new UrlBuilder('http://google.de')
        const chunks = ['maps', 'germany']
        const buildedUrl = builder.build(...chunks)

        expect(buildedUrl).toBe('http://google.de/maps/germany')
    })

    it('handles chunks with starting / ending slash properly', () => {
        const builder = new UrlBuilder('http://google.de')
        const chunks = ['/maps/', '/germany/']
        const buildedUrl = builder.build(...chunks)

        expect(buildedUrl).toBe('http://google.de/maps/germany')
    })
})