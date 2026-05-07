import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import ProductsHub from './pages/ProductsHub'
import ProductPage from './pages/ProductPage'
import ServicesHub from './pages/ServicesHub'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsHub />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
