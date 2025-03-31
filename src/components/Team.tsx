import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter } from 'lucide-react';
import JyotishmanImage from './Images/Jyotishman.jpg';
import HimanshuImage from './Images/Himanshu.jpg';
import SumitaImage from './Images/Sumita.jpg';
import PreetiImage from './Images/Preeti.jpeg';


export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Jyotishman Das",
      role: "CEO & Founder",
      image: JyotishmanImage, // Update with actual image URL
      bio: "Mechatronics engineering student and tech entrepreneur with a passion for robotics, automation, and product development.",
      linkedin: "https://www.linkedin.com/in/jyotishman-das-439858236/",
      twitter: "#",
      github: "https://github.com/jyotishmannnn"
    },
    {
      name: "Sumita Pradhan",
      role: "COO",
      image: SumitaImage, // Update with actual image URL
      bio: "Business strategist and management expert pursuing an BBA at IIM Jammu, specializing in operations and leadership.",
      linkedin: "https://www.linkedin.com/in/sumita-pradhan-93983b30b/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Himanshu Bordoloi",
      role: "CTO",
      image: HimanshuImage, // Update with actual image URL
      bio: "Cybersecurity professional with deep expertise in ethical hacking and secure software development.",
      linkedin: "https://www.linkedin.com/in/himanshu-bordoloi/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Preeti Kewlani",
      role: "CFO",
      image: PreetiImage, // Update with actual image URL
      bio: "Chartered Accountant with extensive experience in financial planning, risk management, and corporate finance.",
      linkedin: "https://www.linkedin.com/in/preetikewlani/",
      twitter: "#",
      github: "#"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
            Meet the Innovators
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team of industry experts is dedicated to revolutionizing the internship experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel rounded-2xl p-6 hover:border-neon-blue transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent rounded-lg" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-neon-blue font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 mb-6">{member.bio}</p>
              <div className="flex gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}