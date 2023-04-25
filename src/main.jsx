import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { CharContextProvider } from './Charcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CharContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </CharContextProvider>
)
