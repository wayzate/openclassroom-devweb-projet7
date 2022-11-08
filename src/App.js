import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import "./main.css"
import Navbar from './Navbar'

import {
  Home,
  About,
  PageNotFound,
  Logement,
} from "./pages"

const App = () => (
  <div>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logements/:logementId" element={<Logement />} />
          <Route path="/kasa" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  </div>
)

export default App
