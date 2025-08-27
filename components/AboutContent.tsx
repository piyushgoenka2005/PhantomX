'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Target, 
  Users, 
  Zap, 
  Award, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Mail
} from 'lucide-react'

export default function AboutContent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      image: 'https://placehold.co/300x300/1a1a1a/3b82f6?text=AC',
      bio: 'Former cybersecurity consultant with 15+ years of experience in offensive security and threat intelligence.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'alex@phantomx.com'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://placehold.co/300x300/1a1a1a/10b981?text=SR',
      bio: 'Ex-Google security engineer specializing in cloud infrastructure security and AI-driven threat detection.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'sarah@phantomx.com'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Security Research',
      image: 'https://placehold.co/300x300/1a1a1a/f59e0b?text=MJ',
      bio: 'Renowned penetration tester and author of multiple cybersecurity books. Former NSA contractor.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'marcus@phantomx.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Education',
      image: 'https://placehold.co/300x300/1a1a1a/8b5cf6?text=EW',
      bio: 'PhD in Computer Science with focus on cybersecurity education. Former professor at MIT.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'emily@phantomx.com'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: 'https://placehold.co/300x300/1a1a1a/ef4444?text=DK',
      bio: 'Product leader with experience at Microsoft and AWS. Expert in user experience and platform development.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'david@phantomx.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      image: 'https://placehold.co/300x300/1a1a1a/06b6d4?text=LT',
      bio: 'Operations specialist with 12+ years in scaling cybersecurity companies. Former VP at CrowdStrike.',
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'lisa@phantomx.com'
    }
  ];

  const stats = [
    { icon: Users, value: '3.7M+', label: 'Active Users', description: 'Global community of cybersecurity professionals' },
    { icon: Globe, value: '150+', label: 'Countries', description: 'Serving organizations worldwide' },
    { icon: Award, value: '50+', label: 'Certifications', description: 'Industry-recognized credentials' },
    { icon: Shield, value: '500+', label: 'Labs Available', description: 'Real-world scenarios updated weekly' }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="blue-gradient">PhantomX</span>
            </h1>
            <p className="text-xl text-blue-cerulean max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize cybersecurity education and build the world's most comprehensive 
              platform for developing attack-ready teams and organizations.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-bright" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-bright mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-cerulean text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-blue-cerulean text-lg mb-6 leading-relaxed">
                In today's rapidly evolving threat landscape, organizations need more than just theoretical knowledge. 
                They need hands-on, practical experience that prepares their teams for real-world cyber attacks.
              </p>
              <p className="text-blue-cerulean text-lg mb-8 leading-relaxed">
                PhantomX was founded with a simple yet powerful vision: to create the most comprehensive, 
                hands-on cybersecurity training platform that bridges the gap between theory and practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-bright mr-3" />
                  <span className="text-white">Comprehensive security training</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-bright mr-3" />
                  <span className="text-white">Real-world attack simulations</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-bright mr-3" />
                  <span className="text-white">AI-driven learning experiences</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-2xl p-8">
              <img 
                src="https://placehold.co/600x400/1a1a1a/3b82f6?text=PhantomX+Mission" 
                alt="PhantomX Mission" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Core Team
            </h2>
            <p className="text-xl text-blue-cerulean max-w-3xl mx-auto">
              The brilliant minds behind PhantomX, bringing together decades of experience in cybersecurity, 
              education, and technology innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-bright/50 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-bright/20 group-hover:border-blue-bright/40 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-bright font-semibold mb-4">{member.role}</p>
                  <p className="text-blue-cerulean text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.linkedin} 
                    className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="p-2 bg-gray-700 rounded-lg hover:bg-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={member.github} 
                    className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 bg-gray-700 rounded-lg hover:bg-red-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-blue-cerulean max-w-3xl mx-auto">
              The principles that guide everything we do at PhantomX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-bright" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-blue-cerulean">
                We strive for excellence in everything we do, from our platform development to customer support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-bright" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-blue-cerulean">
                We believe in the power of community and collaboration to advance cybersecurity knowledge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-bright/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-bright" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-blue-cerulean">
                We continuously innovate to stay ahead of emerging threats and provide cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
