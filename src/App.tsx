import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home.tsx'
import Layout from './Layout.tsx'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>

      
    </>
    
  )
}

export default App
