import express from 'express'
import { parseString } from '../util/parser'
import asyncWrapper from '../util/asyncWrapper'

import Ping from '../models/ping'
import Address from '../models/address'

const pingRouter = express.Router()

pingRouter.get('/', asyncWrapper(async (_req, res) => {
  const pings = await Ping.findAll({})
  res.status(200).json(pings)
}))

pingRouter.post('/', asyncWrapper(async (req, res) => {
  const pingType: string = parseString(req.body.pingType)
  const remoteAddress = parseString(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
  const [address] = await Address.findOrCreate({ where: { remoteAddress } })
  const ping = await Ping.create({ pingType, address })
  res.status(200).json(ping)
}))

export default pingRouter
