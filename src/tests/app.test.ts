import app from '../app'
import request from 'supertest'

import { connectToDatabase, rollbackMigration } from '../db'

const createPing = async (message = 'pong', remoteAddress = '::ffff:127.0.0.1') => {
  return (await request(app).post('/api/pings')
    .set({ 'x-forwarded-for': remoteAddress })
    .send({ message }))
}

describe('Database', () => {

  it('Rollback migrations', async () => await rollbackMigration())

  it('Connect and migrate', async () => await connectToDatabase())

})

describe('Server', () => {

  it('Ping server', async () => {
    const result = await request(app).get('/ping')
    expect(result.statusCode).toEqual(200)
    expect(result.text).toEqual('pong')
  })

})

describe('Pings', () => {

  it('Create ping', async () => {
    const message = 'pong'
    const remoteAddress = '::ffff:127.0.0.1'
    const postPingRes = await createPing(message, remoteAddress)
    expect(postPingRes.statusCode).toEqual(201)
    expect(postPingRes.body.message).toEqual('pong')

    const getAddressRes = await request(app).get(`/api/addresses/${postPingRes.body.addressId}`)
    expect(getAddressRes.body.remoteAddress).toEqual(remoteAddress)
  })

  it('Get all pings', async () => {
    const getPingsRes = await request(app).get('/api/pings')
    expect(getPingsRes.statusCode).toEqual(200)
    expect(getPingsRes.body.length).toEqual(1)
  })

  it('Delete ping', async () => {
    const initialCount = Number(await (await request(app).get('/api/pings')).body.length)
    const postPingRes = await createPing()
    const deletePingRes = await request(app).delete(`/api/pings/${postPingRes.body.id}`)
    expect(deletePingRes.statusCode).toEqual(200)

    const getPingsRes = await request(app).get('/api/pings')
    expect(getPingsRes.body.length).toEqual(initialCount)
  })

})