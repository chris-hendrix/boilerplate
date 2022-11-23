import React, { useState } from 'react'

import { Box, Button, TextField } from '@mui/material'

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
        <Button onClick={() => dispatch(decrement())}>
          -
        </Button>
        {count}
        <Button onClick={() => dispatch(increment())}>
          +
        </Button>
      </Box>
      <Box >
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
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
