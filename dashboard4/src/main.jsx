import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SalesAgent from './Components/SalesAgent/SalesAgent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SalesAgent/>
    {/* <App /> */}
  </React.StrictMode>,
)
