'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, BookOpen, FileText, Play, Shield, Download, ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import { Header, MobileMenu } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

interface Resource {
  id: string
  title: string
  description: string
  type: 'blog' | 'whitepaper' | 'case-study' | 'webinar' | 'tool'
  category: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
  featured?: boolean
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'The Future of Cybersecurity: AI-Powered Threat Detection',
    description: 'Explore how artificial intelligence is revolutionizing threat detection and response in modern cybersecurity.',
    type: 'whitepaper',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '15 min read',
    image: '/api/placeholder/400/250',
    tags: ['AI', 'Threat Detection', 'Machine Learning'],
    featured: true
  },
  {
    id: '2',
    title: 'Zero-Day Exploits: Prevention and Response Strategies',
    description: 'Learn about the latest zero-day vulnerabilities and how to protect your organization.',
    type: 'blog',
    category: 'Vulnerability Management',
    author: 'Mike Rodriguez',
    date: '2024-01-12',
    readTime: '8 min read',
    image: '/api/placeholder/400/250',
    tags: ['Zero-Day', 'Vulnerabilities', 'Security']
  },
  {
    id: '3',
    title: 'Case Study: Fortune 500 Company Breach Prevention',
    description: 'How PhantomX helped a Fortune 500 company prevent a major data breach.',
    type: 'case-study',
    category: 'Success Stories',
    author: 'PhantomX Team',
    date: '2024-01-10',
    readTime: '12 min read',
    image: '/api/placeholder/400/250',
    tags: ['Case Study', 'Enterprise', 'Breach Prevention']
  },
  {
    id: '4',
    title: 'Webinar: Cloud Security Best Practices 2024',
    description: 'Join our experts as they discuss the latest cloud security trends and best practices.',
    type: 'webinar',
    category: 'Cloud Security',
    author: 'Lisa Thompson',
    date: '2024-01-20',
    readTime: '60 min',
    image: '/api/placeholder/400/250',
    tags: ['Cloud Security', 'Webinar', 'Best Practices']
  },
  {
    id: '5',
    title: 'Security Assessment Tool: Network Vulnerability Scanner',
    description: 'Free tool to scan your network for common vulnerabilities and security misconfigurations.',
    type: 'tool',
    category: 'Security Tools',
    author: 'PhantomX Labs',
    date: '2024-01-08',
    readTime: '5 min setup',
    image: '/api/placeholder/400/250',
    tags: ['Tool', 'Vulnerability Scanner', 'Network Security']
  },
  {
    id: '6',
    title: 'Ransomware Protection: Complete Defense Guide',
    description: 'Comprehensive guide to protecting your organization from ransomware attacks.',
    type: 'whitepaper',
    category: 'Ransomware',
    author: 'David Kim',
    date: '2024-01-05',
    readTime: '20 min read',
    image: '/api/placeholder/400/250',
    tags: ['Ransomware', 'Protection', 'Defense']
  },
  {
    id: '7',
    title: 'DevSecOps: Integrating Security into Development',
    description: 'Learn how to integrate security practices into your development workflow.',
    type: 'blog',
    category: 'DevSecOps',
    author: 'Alex Johnson',
    date: '2024-01-03',
    readTime: '10 min read',
    image: '/api/placeholder/400/250',
    tags: ['DevSecOps', 'Development', 'Security']
  },
  {
    id: '8',
    title: 'Compliance Guide: GDPR and Data Protection',
    description: 'Essential guide to GDPR compliance and data protection regulations.',
    type: 'whitepaper',
    category: 'Compliance',
    author: 'Emma Wilson',
    date: '2023-12-28',
    readTime: '18 min read',
    image: '/api/placeholder/400/250',
    tags: ['GDPR', 'Compliance', 'Data Protection']
  }
]

const categories = [
  'All',
  'AI & Machine Learning',
  'Vulnerability Management',
  'Cloud Security',
  'Ransomware',
  'DevSecOps',
  'Compliance',
  'Success Stories',
  'Security Tools'
]

const resourceTypes = [
  { value: 'all', label: 'All Types', icon: FileText },
  { value: 'blog', label: 'Blog Posts', icon: BookOpen },
  { value: 'whitepaper', label: 'Whitepapers', icon: FileText },
  { value: 'case-study', label: 'Case Studies', icon: Shield },
  { value: 'webinar', label: 'Webinars', icon: Play },
  { value: 'tool', label: 'Tools', icon: Download }
]

export default function ResourcesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    const typeConfig = resourceTypes.find(t => t.value === type)
    return typeConfig ? typeConfig.icon : FileText
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500'
      case 'whitepaper': return 'bg-purple-500'
      case 'case-study': return 'bg-green-500'
      case 'webinar': return 'bg-orange-500'
      case 'tool': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header 
        isScrolled={isScrolled} 
        onMobileMenuToggle={handleMobileMenuToggle} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleMobileMenuClose} 
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cybersecurity Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access the latest insights, tools, and best practices to strengthen your organization's security posture
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:bg-gray-700/50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="max-w-4xl mx-auto mb-8"
              >
                <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Categories */}
                    <div>
                      <h3 className="text-white font-semibold mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              selectedCategory === category
                                ? 'bg-lime-500 text-black'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Resource Types */}
                    <div>
                      <h3 className="text-white font-semibold mb-3">Resource Types</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {resourceTypes.map((type) => {
                          const Icon = type.icon
                          return (
                            <button
                              key={type.value}
                              onClick={() => setSelectedType(type.value)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedType === type.value
                                  ? 'bg-lime-500 text-black'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              {type.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>

          {/* Featured Resources */}
          {filteredResources.filter(r => r.featured).length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Resources</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredResources
                  .filter(resource => resource.featured)
                  .map((resource) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                        <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(resource.type)}`}>
                          {resource.type.replace('-', ' ').toUpperCase()}
                        </div>
                                                 <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                             {(() => {
                               const Icon = getTypeIcon(resource.type)
                               return <Icon className="w-8 h-8 text-gray-400" />
                             })()}
                           </div>
                         </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-gray-400">{resource.category}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs text-gray-400">{resource.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <User className="w-4 h-4" />
                            {resource.author}
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-lime-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* All Resources */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(resource => !resource.featured)
                .map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                      <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(resource.type)}`}>
                        {resource.type.replace('-', ' ').toUpperCase()}
                      </div>
                                             <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                           {(() => {
                             const Icon = getTypeIcon(resource.type)
                             return <Icon className="w-6 h-6 text-gray-400" />
                           })()}
                         </div>
                       </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-400">{resource.category}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-400">{resource.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-400 transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 mb-3 text-sm line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <User className="w-3 h-3" />
                          {resource.author}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-lime-400 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No resources found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
