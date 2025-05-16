import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Determine if we're running in a /dapp path or standalone
const basename = window.location.pathname.startsWith('/dapp') ? '/dapp' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      <ToastContainer position="bottom-right" theme="dark" />
    </BrowserRouter>
  </React.StrictMode>,
) 