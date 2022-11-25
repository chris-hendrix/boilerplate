import React from 'react'
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

import { useAppSelector, useAppDispatch } from 'hooks'
import { getPings, selectPings, Ping } from 'store/ping'

const PingTable = ({ ...rest }) => {
  const pings = useAppSelector(selectPings) || []
  const dispatch = useAppDispatch()
  React.useEffect(() => void dispatch(getPings()), [])

  const renderHeaderRow = () => {
    const headers = ['Message', 'Address']
    return <TableRow>{headers.map(h => <TableCell key={h}>{h}</TableCell>)}</TableRow>
  }

  const renderBodyRow = (ping: Ping) => {
    return (
      <TableRow key={ping.id}>
        <TableCell>{ping.message}</TableCell>
        <TableCell>{ping.address}</TableCell>
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