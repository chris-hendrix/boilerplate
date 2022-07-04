import app from '../app'
import request from 'supertest'

/* eslint-disable @typescript-eslint/no-unsafe-call */

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    const result = await request(app).get('/ping')
    expect(result.statusCode).toEqual(200)
    expect(result.text).toEqual('pong')
  })
})