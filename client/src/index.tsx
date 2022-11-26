import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'store'
import App from './App'

const container = document.getElementById('root')
const root = container && createRoot(container)

root && root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

