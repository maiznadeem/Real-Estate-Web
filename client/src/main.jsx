import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import config from '../config.js'

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
        domain={config.domain}
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>,
)
