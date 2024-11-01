import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from './Components/Home';




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
   </div>
  )
}

export default App
