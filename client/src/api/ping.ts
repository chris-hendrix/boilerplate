import { baseApiUrl } from 'config'
import { Ping } from 'types/ping'

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

export const getAll = async () => {
  try {
    const resp = await fetch(`${baseApiUrl}/pings`)
    return parsePings(await resp.json())
  } catch (error) {
    error instanceof Error && alert(error.message)
  }
}


export const createOne = async (ping: Ping) => {
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

export const deleteOne = async (ping: Ping) => {
  try {
    await fetch(`${baseApiUrl}/pings/${ping.id}`, {
      method: 'DELETE',
    })
    return ping
  } catch (error) {
    error instanceof Error && alert(error.message)
  }
}