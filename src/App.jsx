import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import DataDeletion from './pages/DataDeletion';
import RefundPolicy from './pages/RefundPolicy';
import ContactUs from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';

const LEGAL_PATHS = ['/privacy-policy', '/terms-conditions', '/data-deletion', '/refund-policy', '/contact'];

function AppInner() {
  const location = useLocation();
  const isLegalPage = LEGAL_PATHS.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {!isLegalPage && <Footer />}
      <FloatingButtons />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#111111',
            color: '#f5f5f5',
            border: '1px solid #2a2a2a',
            fontSize: '14px',
          },
        }}
      />
      <AppInner />
    </BrowserRouter>
  );
}
