import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Network, Zap } from 'lucide-react';

export default function AIFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge AI technology ensures perfect matches and continuous optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-2xl p-8 flex items-start gap-6"
          >
            <div className="text-neon-blue">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Smart Matching Algorithm</h3>
              <p className="text-gray-300">
                Our AI analyzes multiple data points to create perfect matches between interns and companies, considering skills, culture fit, and growth potential.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 flex items-start gap-6"
          >
            <div className="text-neon-purple">
              <Network className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Adaptive Learning</h3>
              <p className="text-gray-300">
                Our system continuously learns from successful placements to improve matching accuracy and predict future talent needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel rounded-2xl p-8 flex items-start gap-6"
          >
            <div className="text-neon-blue">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Real-time Analytics</h3>
              <p className="text-gray-300">
                Get instant insights into performance metrics, skill development progress, and project impact through our AI-powered analytics dashboard.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-panel rounded-2xl p-8 flex items-start gap-6"
          >
            <div className="text-neon-purple">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Predictive Success</h3>
              <p className="text-gray-300">
                Our AI predicts internship success rates and provides personalized recommendations to maximize outcomes for both parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}