import React from 'react'
import { Box } from '@mui/material'

const Header = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Box
        typography="h3"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Ping Boilerplate
      </Box>
    </Box>

  )
}

export default Header
