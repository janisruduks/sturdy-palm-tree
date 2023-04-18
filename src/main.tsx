import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/testing/mainPage.jsx'
import { BrowserRouter } from "react-router-dom"
import Header from './components/header/header.component';


import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>,
)
