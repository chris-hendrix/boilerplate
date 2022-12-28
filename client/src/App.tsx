import React from 'react'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import { Counter, Header, PingCreator, PingTable } from 'components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        typography="body1"
        sx={{ display: 'flex', justifyContent: 'center', height: '100vh', bgcolor: 'grey.700' }}
      >
        <Box
          className="layout"
          sx={{ bgcolor: 'grey.300', minWidth: '50%', p: 4 }}
        >
          <Header sx={{ mb: 2 }} />
          <Counter sx={{ mb: 2 }} />
          <PingCreator sx={{ mb: 2 }} />
          <PingTable />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
