import React from 'react';
import { motion } from 'framer-motion';

export default function ApplyPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeTiXi5-li6VcdZEMAr7SD2zC8Api3S4PGzqUpR4mZSuBd8tw/viewform';
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
            Apply for Internships
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Take the first step towards your dream career
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
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="your@email.com"
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
              <label htmlFor="resume" className="block text-white mb-2">Resume/CV</label>
              <input
                type="file"
                id="resume"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                accept=".pdf,.doc,.docx"
              />
            </div>
            <div>
              <label htmlFor="interests" className="block text-white mb-2">Areas of Interest</label>
              <select
                id="interests"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
              >
                <option value="">Select an area</option>
                <option value="software">Software Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="design">UI/UX Design</option>
                <option value="content">Content Strategy</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Why should we consider you?</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Tell us about yourself and why you're interested in this opportunity"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}