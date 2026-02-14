import { lazy, Suspense } from 'react'
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout.tsx'

// Optimizing performance with Code Splitting:
// Lazy load route components to reduce initial bundle size.
// Only the necessary chunk for the initial route will be downloaded.
const Home = lazy(() => import('./Pages/home.tsx'))
const Demo = lazy(() => import('./Pages/Demo.tsx'))
const Resume = lazy(() => import('./Pages/Resume.tsx'))
const UnderConstruction = lazy(() => import('./Pages/UnderConstruction.tsx'))
const Fair = lazy(() => import('./Pages/Fair.tsx'))
const FavoriteMom = lazy(() => import('./Pages/FavoriteMom.tsx'))
const Landing = lazy(() => import('./Pages/Landing.tsx'))


function App() {  

  return (
    <>
    <Router>
      {/* Suspense handles the loading state while lazy components are fetched */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
      </Suspense>
    </Router>      
    </>    
  )
}

export default App
