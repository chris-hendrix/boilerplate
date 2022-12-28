const PORT = process.env.PORT || '3000'
const NODE_ENV = process.env.NODE_ENV || 'dev'
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT || '3001'

export const appNodeEnv = NODE_ENV
export const appPort = appNodeEnv === 'production' ? REACT_APP_SERVER_PORT : PORT
export const appUrl = `http://localhost:${appPort}`
export const serverPort = REACT_APP_SERVER_PORT
export const serverApiUrl = `http://localhost:${serverPort}/api`

const config = { serverApiUrl, appNodeEnv, appPort, serverPort, appUrl }

if (appNodeEnv !== 'production') console.log({ config })

export default config