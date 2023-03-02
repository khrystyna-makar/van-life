import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import './index.css'
import "./server.js"

function App() {
  return (
    <div>
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer>
    © 2023 #VANLIFE
    </footer>
    </div>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);