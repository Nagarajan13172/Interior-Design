import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import HomePage from './pages/HomePage'

/**
 * App shell. React Router is set up with a single route today; add more
 * <Route> entries here (and corresponding pages) as the site grows.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add additional pages here, e.g.:
            <Route path="/projects/:id" element={<ProjectDetailPage />} /> */}
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}
