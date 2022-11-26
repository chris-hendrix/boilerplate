/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import {
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

import { Delete } from '@mui/icons-material'

import { useAppSelector, useAppDispatch } from 'hooks'
import { Ping } from 'types/ping'
import { deletePing, getPings, selectPings, selectPing } from 'store/ping'

const PingTable = ({ ...rest }) => {
  const ping = useAppSelector(selectPing) || undefined
  const pings = useAppSelector(selectPings) || []
  const dispatch = useAppDispatch()
  React.useEffect(() => void dispatch(getPings()), [ping])

  const renderHeaderRow = () => {
    const headers = ['Message', 'Address', '']
    return <TableRow>{headers.map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
  }

  const renderBodyRow = (ping: Ping) => {
    return (
      <TableRow key={ping.id}>
        <TableCell>{ping.message}</TableCell>
        <TableCell>{ping.address?.remoteAddress}</TableCell>
        <TableCell>
          <IconButton onClick={() => dispatch(deletePing(ping))} color="error" size="small" >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>)
  }

  return (
    <Card {...rest}>
      <CardContent>
        <Table>
          <TableHead>{renderHeaderRow()}</TableHead>
          <TableBody>{pings.map(p => renderBodyRow(p))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default PingTable