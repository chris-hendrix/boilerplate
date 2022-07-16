import app from '../app'
import request from 'supertest'

import { start } from '../'

/* eslint-disable @typescript-eslint/no-unsafe-call */

start().catch(_error => null)

describe('GET PINGS - ', () => {

  it('Make request to API', async () => {
    const result = await request(app).get('/ping')
    expect(result.statusCode).toEqual(200)
    expect(result.text).toEqual('pong')
  })

  it('Create ping', async () => {
    const ping = { pingType: 'pong' }
    const remoteAddress = '::ffff:127.0.0.1'
    const result = (await request(app).post('/api/pings')
      .set({ 'x-forwarded-for': remoteAddress })
      .send(ping))
    expect(result.statusCode).toEqual(201)
    expect(result.body.pingType).toEqual('pong')
  })

})