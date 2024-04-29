import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/QRcode.css'
import { QRcode } from './assets/QRcode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QRcode />
  </React.StrictMode>,
)
