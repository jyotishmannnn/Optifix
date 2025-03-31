import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Flexible pricing options designed to meet your needs and budget
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
          >
            Contact Sales for Custom Plans
          </button>
        </motion.div>

        <Pricing />
      </div>
    </div>
  );
}