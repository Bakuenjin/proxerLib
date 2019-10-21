import { ClientError, ServerError, FatalError } from '../errors/ProxerErrors'
import { CLIENT_SIDE_ERRORS, SERVER_SIDE_ERRORS, FATAL_ERRORS } from '../errors/ProxerErrorTypes'

/**
 * Handles the errors sent by the proxer API.
 */
export default function handleError(errorCode: string | number) {

    errorCode = typeof errorCode === 'string' ? errorCode : errorCode.toString()

    if (CLIENT_SIDE_ERRORS[errorCode])
        return new ClientError(CLIENT_SIDE_ERRORS[errorCode])
    if (SERVER_SIDE_ERRORS[errorCode])
        return new ServerError(SERVER_SIDE_ERRORS[errorCode])
    if (FATAL_ERRORS[errorCode])
        return new FatalError(FATAL_ERRORS[errorCode])
    
    return new Error('An undefined error with the API has occured.')
}