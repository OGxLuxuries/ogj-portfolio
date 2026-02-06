import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home.tsx'
import Demo from './Pages/Demo.tsx'
import Layout from './Components/Layout.tsx'
import Resume from './Pages/Resume.tsx'
import UnderConstruction from './Pages/UnderConstruction.tsx'
import Fair from './Pages/Fair.tsx'
import FavoriteMom from './Pages/FavoriteMom.tsx'
import Landing from './Pages/Landing.tsx'




function App() {  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout/>}>
          <Route path="/home" element={<Home />}/>
          <Route path="/demo" element={<Demo />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/uc" element={<UnderConstruction />}/>
          <Route path="/fair" element={<Fair />}/>          
          <Route path="/favorite-mom" element={<FavoriteMom />}/>
        </Route>
      </Routes>
    </Router>      
    </>    
  )
}

export default App
