import React from 'react';
import { motion } from 'framer-motion';

export default function DemoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfaD4xGOkPPpN4fw-2RB-9Ghna0EJjLf7oZjWihLlXv0Oc3YQ/viewform';
  };

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
            Schedule a Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            See how Optifix can transform your business with AI-powered internships
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-panel rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-white mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Work Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="your@company.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="team-size" className="block text-white mb-2">Team Size</label>
              <select
                id="team-size"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
              >
                <option value="">Select team size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">How can we help?</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Tell us about your needs and what you're looking to achieve"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300 neon-glow"
            >
              Schedule Demo
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}