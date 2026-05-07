import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import WorkPage from './pages/WorkPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/work/:slug" element={<WorkPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
