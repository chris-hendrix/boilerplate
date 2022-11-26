import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { Ping } from 'types/ping'
import { getAll, createOne, deleteOne } from 'api/ping'

export const createPing = createAsyncThunk('ping/createPing', createOne)
export const getPings = createAsyncThunk('ping/getPings', getAll)
export const deletePing = createAsyncThunk('ping/deletePing', deleteOne)

interface PingState {
  ping: Ping | undefined,
  pings: Array<Ping> | undefined,
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PingState = {
  ping: undefined,
  pings: [],
  status: 'idle',
}

export const pingSlice = createSlice({
  name: 'ping',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPing.fulfilled, (state, action) => {
      state.status = 'idle'
      state.ping = action.payload
    })
    builder.addCase(getPings.fulfilled, (state, action) => {
      state.status = 'idle'
      state.pings = action.payload
    })
    builder.addCase(deletePing.fulfilled, (state, action) => {
      state.status = 'idle'
      state.ping = action.payload
    })
  }
})

export const selectPing = (state: RootState) => state.ping.ping
export const selectPings = (state: RootState) => state.ping.pings

export default pingSlice.reducer