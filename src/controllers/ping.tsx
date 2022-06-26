import express from 'express'
import models from '../models'
import { parseString, parseNumber } from '../util/parser'
import asyncWrapper  from '../util/asyncWrapper'

const router = express.Router()
const { Address, Ping } = models

router.get('/', asyncWrapper (async (_req, res) => {
  const pings = await Ping.findAll({})
  res.status(200).json(pings)
}))

router.post('/', asyncWrapper( async (req, res) => {
  const pingType = parseString(req.body.pingType)
  const remoteAddress = parseString(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
  const [address] = await Address.findOrCreate({ where: { remoteAddress } })
  const ping = await Ping.create({ pingType, addressId: parseNumber(address.id) })
  res.status(200).json(ping)
}))
