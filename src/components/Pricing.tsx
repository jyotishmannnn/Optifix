import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  Code, 
  Smartphone, 
  Database, 
  Cog, 
  Palette, 
  Video, 
  Image, 
  MessageSquare,
  Megaphone, 
  FileText, 
  GraduationCap,
  Rocket,
  Users
} from 'lucide-react';

export default function Pricing() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleContact = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfaD4xGOkPPpN4fw-2RB-9Ghna0EJjLf7oZjWihLlXv0Oc3YQ/viewform';
  };

  const handleApply = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeTiXi5-li6VcdZEMAr7SD2zC8Api3S4PGzqUpR4mZSuBd8tw/viewform';
  };

  const studentPlans = [
    {
      title: "Unpaid Internships",
      price: "Free",
      description: "Gain valuable experience and build your portfolio",
      features: [
        "Real-world project experience",
        "Portfolio development",
        "Performance tracking",
        "Certificate of completion"
      ]
    },
    {
      title: "Premium Internships",
      price: "₹2,000-5,000",
      period: "/month",
      description: "Advanced opportunities with dedicated mentorship",
      features: [
        "Priority project selection",
        "1-on-1 mentorship",
        "Industry expert sessions",
        "Career guidance"
      ]
    }
  ];

  const smePlans = [
    {
      title: "Basic Plan",
      price: "₹2,500",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1-2 dedicated interns",
        "Basic project management",
        "Email support",
        "Monthly reports"
      ]
    },
    {
      title: "Standard Plan",
      price: "₹7,500",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "3-5 dedicated interns",
        "Advanced project tracking",
        "Priority support",
        "Weekly reports"
      ]
    },
    {
      title: "Premium Plan",
      price: "₹15,000",
      period: "/month",
      description: "Enterprise-grade solution",
      features: [
        "Dedicated intern team",
        "24/7 support",
        "Custom workflows",
        "Real-time analytics"
      ]
    }
  ];

  const services = [
    {
      category: "Development",
      items: [
        {
          icon: <Code />,
          name: "Web Development",
          price: "₹5,000-8,000",
          period: "/project"
        },
        {
          icon: <Smartphone />,
          name: "Mobile App Development",
          price: "₹8,000-12,000",
          period: "/project"
        },
        {
          icon: <Database />,
          name: "Data Analysis & Visualization",
          price: "₹3,000-6,000",
          period: "/project"
        },
        {
          icon: <Cog />,
          name: "Automation Solutions",
          price: "₹6,000-10,000",
          period: "/project"
        }
      ]
    },
    {
      category: "Design",
      items: [
        {
          icon: <Image />,
          name: "Poster Design",
          price: "₹50-200",
          period: "/poster"
        },
        {
          icon: <Palette />,
          name: "Logo Design",
          price: "₹500-1,500",
          period: "/logo"
        },
        {
          icon: <MessageSquare />,
          name: "Social Media Posts",
          price: "₹100-300",
          period: "/post"
        },
        {
          icon: <Video />,
          name: "Video Editing",
          price: "₹500-5,000",
          period: "/video"
        }
      ]
    },
    {
      category: "Marketing",
      items: [
        {
          icon: <Megaphone />,
          name: "Digital Marketing Campaigns",
          price: "₹3,000-5,000",
          period: "/campaign"
        },
        {
          icon: <FileText />,
          name: "Content Creation",
          price: "₹500-1,000",
          period: "/article"
        }
      ]
    }
  ];

  const educationalPlans = [
    {
      icon: <Briefcase />,
      title: "Custom Internship Programs",
      price: "₹50,000 - ₹1,00,000",
      period: "/semester",
      features: [
        "Customized curriculum",
        "Industry mentorship",
        "Progress tracking",
        "Certification"
      ]
    },
    {
      icon: <Rocket />,
      title: "Tech Bootcamps",
      price: "₹25,000 - ₹50,000",
      period: "/session",
      features: [
        "Intensive training",
        "Hands-on projects",
        "Expert instructors",
        "Career support"
      ]
    },
    {
      icon: <Users />,
      title: "Internship Management Systems",
      price: "₹1,00,000 - ₹1,50,000",
      period: "/year",
      features: [
        "Complete management solution",
        "Analytics dashboard",
        "Custom reporting",
        "API integration"
      ]
    }
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
            Flexible Plans for Everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs and budget
          </p>
        </motion.div>

        {/* Student Plans */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <GraduationCap className="inline-block w-8 h-8 mr-2 text-neon-blue" />
            Student Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel rounded-2xl p-8 hover:border-neon-purple transition-all duration-300"
              >
                <h4 className="text-2xl font-bold mb-2 text-white">{plan.title}</h4>
                <div className="text-3xl font-bold mb-4 text-neon-purple">
                  {plan.price}
                  {plan.period && <span className="text-lg text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleApply}
                  className="w-full mt-8 px-6 py-3 bg-neon-purple/20 border border-neon-purple rounded-full text-white hover:bg-neon-purple/30 transition-all duration-300"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SME Plans */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <Briefcase className="inline-block w-8 h-8 mr-2 text-neon-blue" />
            Business Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel rounded-2xl p-8 hover:border-neon-blue transition-all duration-300"
              >
                <h4 className="text-2xl font-bold mb-2 text-white">{plan.title}</h4>
                <div className="text-3xl font-bold mb-4 text-neon-blue">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleContact}
                  className="w-full mt-8 px-6 py-3 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <Code className="inline-block w-8 h-8 mr-2 text-neon-purple" />
            Services
          </h3>
          {services.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-12"
            >
              <h4 className="text-2xl font-bold mb-6 text-white">{category.category}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((service, i) => (
                  <div key={i} className="glass-panel rounded-xl p-6 hover:border-neon-purple transition-all duration-300">
                    <div className="text-neon-purple mb-4">{service.icon}</div>
                    <h5 className="text-lg font-bold mb-2 text-white">{service.name}</h5>
                    <div className="text-xl font-bold text-neon-purple">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Partnerships */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            <GraduationCap className="inline-block w-8 h-8 mr-2 text-neon-blue" />
            Educational Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel rounded-2xl p-8 hover:border-neon-blue transition-all duration-300"
              >
                <div className="text-neon-blue mb-4">{plan.icon}</div>
                <h4 className="text-2xl font-bold mb-2 text-white">{plan.title}</h4>
                <div className="text-xl font-bold mb-4 text-neon-blue">
                  {plan.price}
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleContact}
                  className="w-full mt-8 px-6 py-3 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300"
                >
                  Contact Sales
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}