import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import "./main.css"

import {
  Home,
} from "./pages"

const App = () => (
  <div>
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  </div>
)

export default App
