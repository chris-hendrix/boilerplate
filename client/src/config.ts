
const NODE_ENV = process.env.NODE_ENV || 'dev'
const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001/api'
const REACT_APP_TEST_BASE_API_URL = process.env.REACT_APP_TEST_BASE_API_URL || 'http://localhost:3010/api'

const baseApiUrl = NODE_ENV === 'test' ? REACT_APP_TEST_BASE_API_URL : REACT_APP_BASE_API_URL
const nodeEnv = NODE_ENV

export default { baseApiUrl, nodeEnv }