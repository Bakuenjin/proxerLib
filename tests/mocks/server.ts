import express from 'express'
const mockServer = express()


mockServer.get('/default', (req, res) => {
    const body: { error: number, code?: string | number, data: any } = {
        error: 0,
        data: {
            hello: 'world'
        }
    }
    res.send(body)
})

mockServer.post('/default', (req, res) => {
    const body: { error: number, code?: string | number, data: any } = {
        error: 0,
        data: {
            hello: 'world'
        }
    }
    res.send(body)
})

mockServer.get('/error', (req, res) => {
    const body: { error: number, code?: string | number, data: any } = {
        error: 1,
        code: '1000',
        data: {}
    }
    res.send(body)
})

mockServer.get('/statuserror', (req, res) => {
    res.status(404).send()
})

export function startMockserver(port: number) {
    mockServer.listen(port)
}
