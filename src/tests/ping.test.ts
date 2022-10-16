import app from '../app'
import request from 'supertest'

import { connectToDatabase, rollbackMigration } from '../db'

describe('DATABASE', () => {

  it('Rollback migrations', async () => await rollbackMigration())
  it('Connect and migrate', async () => await connectToDatabase())

})

describe('PINGS', () => {

  it('Check server status', async () => {
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

  it('Get all pings', async () => {
    const result = await request(app).get('/api/pings')
    expect(result.statusCode).toEqual(200)
    expect(result.body.length).toEqual(1)
  })

})