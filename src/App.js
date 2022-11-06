import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import {
  Home,
} from "./pages"

const App = () => {
  return (
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
}

export default App
