import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SalesAgent from './Components/SalesAgent/SalesAgent.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SalesAgent/> */}
    <LandingPage/>
    {/* <App /> */}
  </React.StrictMode>,
)
