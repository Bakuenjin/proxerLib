import convertJsonToQuery from '../../../src/http/utils/convert-json-to-query'

describe('convertJsonToQuery function', () => {
    it('should convert a json into a string', () => {
        const obj: { [key: string]: any } = {
            hello: 'world',
            num: 5
        }

        const queryString = convertJsonToQuery(obj)
        expect(queryString).toBe('hello=world&num=5')
    })

    it('should convert empty obj into empty string', () => {
        const obj = {}
        const emptyString = convertJsonToQuery(obj)
        expect(emptyString).toBe('')
    })

    it('should filter undefined elements', () => {
        const obj: { [key: string]: any } = {
            hello: 'world',
            x: undefined,
            num: 5
        }
        const queryString = convertJsonToQuery(obj)
        expect(queryString).toBe('hello=world&num=5')
    })
})