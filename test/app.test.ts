import supertest from 'supertest'
import app from '@src/app'
import { Server } from 'http'

let server: Server

beforeAll(async () => {
  server = await app.listen()
})

afterAll(async () => {
  server.close()
})

describe('basic route test', () => {
  test('get hello world from GET /api/hello', async () => {
    const res = await supertest(server).get('/api/hello')
    expect(res.status).toEqual(200)
    expect(res.text).toContain('Hello World!')
  })
})
