import { motion } from 'framer-motion';
import { Brain, Rocket, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GalaxyBackground from './GalaxyBackground';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GalaxyBackground />
      </div>
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-deep-space z-20" />
      
      <div className="container mx-auto px-4 pt-32 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Break the Experience Paradox
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Connecting ambitious students with innovative SMEs through AI-powered internships
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button 
              onClick={() => navigate('/students')}
              className="px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
            >
              For Students
            </button>
            <button 
              onClick={() => navigate('/businesses')}
              className="px-8 py-4 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300 neon-glow"
            >
              For Businesses
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <StatsCard
            icon={<Users className="w-8 h-8 text-neon-blue" />}
            number="500+"
            label="Active Internships"
          />
          <StatsCard
            icon={<Brain className="w-8 h-8 text-neon-purple" />}
            number="95%"
            label="Success Rate"
          />
          <StatsCard
            icon={<Rocket className="w-8 h-8 text-neon-blue" />}
            number="10+"
            label="Partnered Companies"
          />
        </motion.div>
      </div>
    </div>
  );
}

function StatsCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-panel rounded-2xl p-6 text-center backdrop-blur-lg"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
}