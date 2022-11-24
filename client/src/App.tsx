import React from 'react'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Link } from '@mui/material'
import { Counter } from './components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        typography="body1"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          bgcolor: 'grey.700'
        }}
      >
        <Box
          className="layout"
          sx={{
            bgcolor: 'grey.300',
            p: 4,
          }}
        >
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
    </ThemeProvider>
  )
}

export default App
