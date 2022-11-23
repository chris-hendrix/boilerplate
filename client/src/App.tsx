import React from 'react'
import { Box, Link } from '@mui/material'
import Counter from './features/counter/Counter'

const App = () => {
  return (
    <Box className="App">
      <Box typography="body1">
        <Counter sx={{ mb: 2 }} />
        Edit <code>src/App.tsx</code> and save to reload.
        <Box sx={{ mt: 1 }}>
          {'Learn '}
          <Link href="https://redux-toolkit.js.org/" target="_blank">
            Redux Toolkit
          </Link>
          {' and '}
          <Link href="https://react-redux.js.org/" target="_blank">
            {'React Redux'}
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default App
