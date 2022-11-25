import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseApiUrl } from 'config'
import { RootState } from 'store'

export interface Address {
  remoteAddress: string
}
export interface Ping {
  message: string,
  id?: number,
  address?: Address
}

const parsePing = (obj: unknown): Ping => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isPing = (obj: any): obj is Ping => 'message' in obj
  if (!isPing(obj)) throw new Error('Invalid ping format')
  return obj
}

const parsePings = (arr: unknown): Array<Ping> => {
  if (!Array.isArray(arr)) throw new Error('Invalid list')
  return arr.map(obj => parsePing(obj))
}

export const createPing = createAsyncThunk(
  'ping/createPing',
  async (ping: Ping) => {
    try {
      const resp = await fetch(`${baseApiUrl}/pings`, {
        method: 'POST',
        body: JSON.stringify(ping),
        headers: { 'Content-Type': 'application/json' },
      })
      return parsePing(await resp.json())
    } catch (error) {
      error instanceof Error && alert(error.message)
    }
  }
)

export const getPings = createAsyncThunk(
  'ping/getPings',
  async () => {
    try {
      const resp = await fetch(`${baseApiUrl}/pings`)
      return parsePings(await resp.json())
    } catch (error) {
      error instanceof Error && alert(error.message)
    }
  }
)

export const deletePing = createAsyncThunk(
  'ping/deletePing',
  async (ping: Ping) => {
    try {
      await fetch(`${baseApiUrl}/pings/${ping.id}`, {
        method: 'DELETE',
      })
      return ping
    } catch (error) {
      error instanceof Error && alert(error.message)
    }
  }
)


export interface PingState {
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