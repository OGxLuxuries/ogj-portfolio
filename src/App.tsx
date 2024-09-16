import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Demo from './Pages/Demo.tsx'
import Layout from './Components/Layout.tsx'
import Resume from './Pages/Resume.tsx'
import UnderConstruction from './Pages/UnderConstruction.tsx'
import Linkedin from './Pages/Linkedin.tsx'



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<UnderConstruction />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/demo" element={<Demo />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/linkedin" element={<Linkedin />}></Route>
        </Route>
      </Routes>
    </Router>

      
    </>
    
  )
}

export default App
