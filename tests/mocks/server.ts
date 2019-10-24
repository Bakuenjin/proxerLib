import express from 'express'
import userMock from './userApiMock'
const app = express()

app.get('/default', (_, res) => {
    res.send({
        error: 0,
        data: { hello: 'world' }
    })
})

app.post('/default', (_, res) => {
    res.send({
        error: 0,
        data: { hello: 'world' }
    })
})

app.get('/error', (_, res) => {
    res.send({
        error: 1,
        code: '1000'
    })
})

app.get('/statuserror', (_, res) => {
    res.status(404).send()
})

// USER API

app.post('/user/login',     (_, res) => { res.send(userMock.login) })
app.post('/user/logout',    (_, res) => { res.send({ error: 0 })})
app.get('/user/userinfo',   (_, res) => { res.send(userMock.userinfo) })
app.get('/user/topten',     (_, res) => { res.send(userMock.topten) })
app.get('/user/list',       (_, res) => { res.send(userMock.list) })
app.get('/user/comments',   (_, res) => { res.send(userMock.comments) })
app.get('/user/history',    (_, res) => { res.send(userMock.history) })
app.get('/user/about',      (_, res) => { res.send(userMock.about) })
app.get('/user/friends',    (_, res) => { res.send(userMock.friends) })
app.post('/user/requestauth',(_, res) => { res.send({ error: 0 })})
app.post('/user/checkauth',  (_, res) => { res.send(userMock.login) })

export function startMockserver(port: number) {
    app.listen(port)
}
