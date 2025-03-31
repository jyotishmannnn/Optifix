import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Users, Zap, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SMEPortal() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleContact = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfaD4xGOkPPpN4fw-2RB-9Ghna0EJjLf7oZjWihLlXv0Oc3YQ/viewform';
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access Top Talent",
      description: "Connect with pre-vetted students matched to your specific needs",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerate Growth",
      description: "Complete critical projects faster with dedicated intern support",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Measure Impact",
      description: "Track ROI and project progress through our analytics dashboard",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale Efficiently",
      description: "Flexible talent solution that grows with your business",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space/50 to-deep-space" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Empower Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your business with AI-matched talent and streamlined project management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel rounded-2xl p-8"
            >
              <div className="text-neon-blue mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-panel rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Ready to Transform Your Business?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/demo')}
              className="px-8 py-4 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300 neon-glow"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
            >
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}