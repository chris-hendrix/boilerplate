export interface Address {
  remoteAddress: string
}
export interface Ping {
  message: string,
  id?: number,
  address?: Address
}