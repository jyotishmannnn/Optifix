import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Laptop, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OpportunitiesPage() {
  const navigate = useNavigate();

  const opportunities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      company: "TechCorp Solutions",
      description: "Build real-world applications using modern tech stacks",
      match: "98%",
      location: "Remote",
      duration: "3 months",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Digital Marketing",
      company: "Growth Pioneers",
      description: "Drive growth through data-driven marketing campaigns",
      match: "95%",
      location: "Hybrid",
      duration: "6 months",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "UI/UX Design",
      company: "Creative Minds",
      description: "Design beautiful and intuitive user experiences",
      match: "92%",
      location: "On-site",
      duration: "4 months",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Content Strategy",
      company: "Media Masters",
      description: "Create engaging content that drives engagement",
      match: "90%",
      location: "Remote",
      duration: "3 months",
    },
    // Add more opportunities as needed
  ];

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
            Available Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover internship opportunities matched to your skills and interests
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <input
              type="text"
              placeholder="Search opportunities..."
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none w-full max-w-md"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel rounded-2xl p-8 hover:border-neon-purple transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-neon-purple p-3 glass-panel rounded-lg">
                    {opportunity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
                    <p className="text-gray-400">{opportunity.company}</p>
                  </div>
                </div>
                <div className="text-neon-blue font-bold">{opportunity.match}</div>
              </div>
              <p className="text-gray-300 mb-4">{opportunity.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400">{opportunity.location}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{opportunity.duration}</span>
              </div>
              <button
                onClick={() => navigate('/apply')}
                className="flex items-center gap-2 px-6 py-2 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}