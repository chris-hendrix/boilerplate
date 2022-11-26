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
  const [message, setMessage] = React.useState('')
  return (
    <Card {...rest}>
      <CardContent>
        <TextField
          value={message}
          size="small"
          onChange={(e) => setMessage(e.target.value)}
          sx={{ width: '100%' }}
        />
      </CardContent>
      <CardActions>
        <Button onClick={() => void dispatch(createPing({ message })).then(() => setMessage(''))}>
          Submit Message
        </Button>
      </CardActions>
    </Card >
  )
}

export default PingCreator
