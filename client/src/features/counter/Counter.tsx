import React, { useState } from 'react'

import { Box, Button, Chip, IconButton, TextField } from '@mui/material'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'

const Counter = ({ ...rest }) => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <Box typography="body1" {...rest}>
      <Box>
        <IconButton onClick={() => dispatch(decrement())}>
          -
        </IconButton>
        <Chip label={count} />
        <IconButton onClick={() => dispatch(increment())}>
          +
        </IconButton>
      </Box>
      <>
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          sx={{ width: '100px' }}
        />
      </>
      <Box >
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
      </Box>
    </Box>
  )
}

export default Counter
