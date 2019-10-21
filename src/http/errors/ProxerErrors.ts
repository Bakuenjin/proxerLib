export class ClientError extends Error {
    constructor(...args: any) {
        super(...args)
        Error.captureStackTrace(this, ClientError)
        this.name = 'ClientError'
    }
}

export class ServerError extends Error {
    constructor(...args: any) {
        super(...args)
        Error.captureStackTrace(this, ServerError)
        this.name = 'ServerError'
    }
}

export class FatalError extends Error {
    constructor(...args: any) {
        super(...args)
        Error.captureStackTrace(this, FatalError)
        this.name = 'FatalError'
    }
}

