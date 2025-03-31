import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Laptop, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentPage() {
  const navigate = useNavigate();

  const opportunities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      company: "TechCorp Solutions",
      description: "Build real-world applications using modern tech stacks",
      match: "98%",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Digital Marketing",
      company: "Growth Pioneers",
      description: "Drive growth through data-driven marketing campaigns",
      match: "95%",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "UI/UX Design",
      company: "Creative Minds",
      description: "Design beautiful and intuitive user experiences",
      match: "92%",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Content Strategy",
      company: "Media Masters",
      description: "Create engaging content that drives engagement",
      match: "90%",
    },
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
            Launch Your Career with Optifix
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get matched with the perfect internship opportunity and start building your future today
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
          >
            Apply Now
          </button>
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
              <p className="text-gray-300 mb-6">{opportunity.description}</p>
              <button
                onClick={() => navigate('/apply')}
                className="flex items-center gap-2 px-6 py-2 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <button
            onClick={() => navigate('/opportunities')}
            className="px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
          >
            View All Opportunities
          </button>
        </motion.div>
      </div>
    </div>
  );
}