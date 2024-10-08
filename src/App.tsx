import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Demo from './Pages/Demo.tsx'
import Layout from './Components/Layout.tsx'
import Resume from './Pages/Resume.tsx'
import UnderConstruction from './Pages/UnderConstruction.tsx'
import Fair from './Pages/Fair.tsx'




function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Fair />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/demo" element={<Demo />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/uc" element={<UnderConstruction />}/>
          <Route path="/fair" element={<Fair />}></Route>
          
        </Route>
      </Routes>
    </Router>

      
    </>
    
  )
}

export default App
