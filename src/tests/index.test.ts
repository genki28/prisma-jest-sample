import { app, server } from '../index'
import request from 'supertest'

beforeAll(done => {
    server.close() // beforeAllにserverを閉じる処理を入れる必要がある・・・？なぜ・・・？
    done()
})

// afterAll(done => {
//     server.close()
//     done()
// })

describe('Test return response 200', () => {
    it('Request / return hoge', async (done) => {
        const result = await request(server).get('/').send()

        expect(result.status).toBe(200)
        expect(result.body.data).toBe('hoge')
        done()
    })
})