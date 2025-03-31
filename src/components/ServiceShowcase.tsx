import { motion } from 'framer-motion';
import { Code2, GraduationCap, LineChart, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ServiceShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Our advanced algorithms match students with the perfect internship opportunities based on skills, interests, and company culture.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Real Projects, Real Impact",
      description: "Work on meaningful projects that directly impact SMEs while building your professional portfolio.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Growth Analytics",
      description: "Track your progress with detailed analytics and performance metrics throughout your internship.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Skill Development",
      description: "Access personalized learning paths and mentorship to accelerate your professional growth.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Future-Ready Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the power of AI-driven internships that benefit both students and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel rounded-2xl p-8 hover:border-neon-blue transition-all duration-300"
            >
              <div className="text-neon-blue mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}