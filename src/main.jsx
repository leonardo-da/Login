import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from "./pages/home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact index element={<App/>}/>
            <Route exact path='home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
