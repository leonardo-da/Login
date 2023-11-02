import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from "./pages/home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <Routes>
            <Route exact index element={<App/>}/>
            <Route exact path='home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
)
