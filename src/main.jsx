import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  // it is for router
  // <BrowserRouter>
  // <App></App>
  //  </BrowserRouter>
  <StrictMode>
    <App></App>
  </StrictMode>
)
