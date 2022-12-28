import React, { useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField
} from '@mui/material'

import { useAppSelector, useAppDispatch } from 'hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from 'store/counter'

interface Props {
  initialIncrement?: number
  [x: string]: unknown
}

const Counter = ({ initialIncrement = 2, ...rest }: Props) => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState(String(initialIncrement))

  const incrementValue = Number(incrementAmount) || 0

  const boxSx = { width: '100%', display: 'flex', justifyContent: 'center' }

  return (
    <Card {...rest}>
      <CardContent>
        <Box sx={{ ...boxSx, mb: 2 }}>
          <IconButton onClick={() => dispatch(decrement())}>-</IconButton>
          <Box className='countBox' typography="h2">{count}</Box>
          <IconButton onClick={() => dispatch(increment())}>+</IconButton>
        </Box>
        <Box sx={{ ...boxSx }}>
          <TextField
            value={incrementAmount}
            size="small"
            onChange={(e) => setIncrementAmount(e.target.value)}
            sx={{ width: '100px' }}
            InputProps={{
              inputProps: { style: { textAlign: 'center' }, }
            }}
          />
        </Box>
      </CardContent>
      <CardActions sx={{ ...boxSx }} >
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </CardActions>
    </Card>
  )
}

export default Counter
