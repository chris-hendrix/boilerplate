import express from 'express'
import { RequestHandler } from 'express'

import Address from '../models/address'

const addressRouter = express.Router()

addressRouter.get('/', (async (_req, res) => {
  const addresses = await Address.findAll({})
  res.status(200).json(addresses)
}) as RequestHandler)

addressRouter.get('/:id', (async (req, res) => {
  const address = await Address.findByPk(req.params.id)
  res.status(200).json(address)
}) as RequestHandler)

export default addressRouter
