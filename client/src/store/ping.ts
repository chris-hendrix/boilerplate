import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseApiUrl } from 'config'

export interface Ping {
  message: string
}

const parsePing = (obj: unknown): Ping => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isPing = (obj: any): obj is Ping => 'message' in obj
  if (!isPing(obj)) throw new Error('Invalid ping format')
  return obj
}

export const createPing = createAsyncThunk(
  'ping/create',
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


export interface PingState {
  ping: Ping | undefined,
  pings: Array<Ping>,
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
  }
})

export default pingSlice.reducer