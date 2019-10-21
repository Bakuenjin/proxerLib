import handleError from "../../../src/http/utils/handle-error"
import { FatalError, ServerError, ClientError } from "../../../src/http/errors/ProxerErrors"

describe('handle error function', () => {
    it('handles fatal errors', () => {
        const err = handleError(1000)
        expect(err).toBeInstanceOf(FatalError)
    })

    it('handles server-side errors', () => {
        const err = handleError(2000)
        expect(err).toBeInstanceOf(ServerError)
    })

    it('handles client-side errors', () => {
        const err = handleError(3000)
        expect(err).toBeInstanceOf(ClientError)
    })

    it('handles undefined errors', () => {
        const err = handleError(9999)
        expect(err).toBeInstanceOf(Error)
    })

    it('accepts error code as number or string', () => {
        const stringErr = handleError('1000')
        const numberErr = handleError(1000)
        expect(stringErr).toBeInstanceOf(FatalError)
        expect(numberErr).toBeInstanceOf(FatalError)
    })
})