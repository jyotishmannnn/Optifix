import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import BusinessPage from './pages/BusinessPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import DemoPage from './pages/DemoPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-space text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/businesses" element={<BusinessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;