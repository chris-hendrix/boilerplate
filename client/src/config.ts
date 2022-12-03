const PORT = process.env.PORT || '3000'
const REACT_APP_NODE_ENV = process.env.REACT_APP_NODE_ENV || 'dev'
const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001/api'
const REACT_APP_TEST_BASE_API_URL = process.env.REACT_APP_TEST_BASE_API_URL || 'http://localhost:3010/api'


export const baseApiUrl = REACT_APP_NODE_ENV === 'test'
  ? REACT_APP_TEST_BASE_API_URL
  : REACT_APP_BASE_API_URL
export const nodeEnv = REACT_APP_NODE_ENV
export const port = PORT
export const appUrl = `http://localhost:${port}`

const config = { baseApiUrl, nodeEnv, port, appUrl }

if (nodeEnv !== 'prod') console.log({ config })

export default config