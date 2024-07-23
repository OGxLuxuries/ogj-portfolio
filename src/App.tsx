import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Layout from './Components/Layout.tsx'
import './CSS/App.css'

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
