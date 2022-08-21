import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
 
import {ProfileProvider } from "./helper/context"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <ProfileProvider>
    <App />
    </ProfileProvider>
      </BrowserRouter>
  </React.StrictMode>
)
