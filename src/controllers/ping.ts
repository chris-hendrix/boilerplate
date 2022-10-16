import express from 'express'
import { RequestHandler } from 'express'
import { parseString } from '../util/parser'

import Ping from '../models/ping'
import Address from '../models/address'

const pingRouter = express.Router()

pingRouter.get('/', (async (_req, res) => {
  const pings = await Ping.findAll({})
  res.status(200).json(pings)
}) as RequestHandler)

pingRouter.post('/', (async (req, res) => {
  const pingType: string = parseString(req.body.pingType)
  const remoteAddress = parseString(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
  const [address] = await Address.findOrCreate({ where: { remoteAddress } })
  const ping = await Ping.create({ pingType, addressId: Number(address.id) })
  res.status(201).json(ping)
}) as RequestHandler)

pingRouter.delete('/:id', (async (req, res) => {
  const ping = await Ping.findByPk(req.params.id)
  await ping?.destroy()
  res.status(200).json(ping)
}) as RequestHandler)

export default pingRouter
