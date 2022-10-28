import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
)
