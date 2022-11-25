/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField
} from '@mui/material'

import { useAppDispatch } from 'hooks'

import { createPing } from 'store/ping'

const PingCreator = ({ ...rest }) => {
  const dispatch = useAppDispatch()
  const [pingType, setPingType] = React.useState('')
  return (
    <Card {...rest}>
      <CardContent>
        <TextField
          value={pingType}
          size="small"
          onChange={(e) => setPingType(e.target.value)}
          sx={{ width: '100%' }}
        />
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(createPing({ pingType }))}>
          Submit Ping Message
        </Button>
      </CardActions>
    </Card >
  )
}

export default PingCreator
