import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const planIncludes = [
        'Unmatched content library',
        'Workforce development plans',
        'Centralized user management',
        'Advanced analytics & reporting',
        'Source, hire, and retain talent'
    ];
    
    const logos = [
        { src: "https://placehold.co/150x40/0e1018/ffffff?text=Deloitte.", alt: "Deloitte" },
        { src: "https://placehold.co/150x40/0e1018/ffffff?text=TOYOTA", alt: "Toyota" },
        { src: "https://placehold.co/150x40/0e1018/ffffff?text=SIEMENS", alt: "Siemens" },
        { src: "https://placehold.co/150x40/0e1018/ffffff?text=Google", alt: "Google" },
    ];

    const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

    return (
        <section className="bg-gray-900 text-white font-sans py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-700 overflow-hidden"
            >
                {/* Left Column: Form */}
                <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-[#1a1f2c] p-6 sm:p-8 rounded-xl border border-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get a full demo with our team</h2>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Fill the form to schedule a live product demo and Q&A about our cyber readiness solutions.</p>
                    
                    <form className="space-y-4 sm:space-y-6">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Business email*" 
                                className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <input 
                                type="text" 
                                placeholder="First name*" 
                                className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                            />
                            <input 
                                type="text" 
                                placeholder="Last name*" 
                                className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <input 
                                type="text" 
                                placeholder="Company*" 
                                className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                            />
                            <input 
                                type="text" 
                                placeholder="Security / IT team size*" 
                                className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                            />
                        </div>
                        
                        <input 
                            type="text" 
                            placeholder="What best describes your Organization?*" 
                            className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                        />
                        
                        <input 
                            type="text" 
                            placeholder="Country*" 
                            className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                        />
                        
                        <input 
                            type="text" 
                            placeholder="I'm looking for help with...*" 
                            className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base"
                        />
                        
                        <textarea 
                            placeholder="Tell us more about your project, needs, and timeline." 
                            rows={4} 
                            className="w-full bg-[#0e1018] border border-gray-600 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm sm:text-base resize-none"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full blue-button-secondary border-2 text-white font-semibold py-3 sm:py-4 rounded-lg hover:bg-[#3b82f6] hover:text-white transition text-sm sm:text-base"
                        >
                            Submit
                        </button>
                    </form>
                    
                    <p className="text-xs text-gray-500 mt-4 sm:mt-6">
                        This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a> apply.
                    </p>
                </motion.div>

                {/* Right Column: Info */}
                <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="pt-4 sm:pt-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 blue-gradient">The #1 platform to build attack-ready teams and organizations</h1>
                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        Maximum curriculum management flexibility, enhanced skills reporting, and engaging gamification features. Book a demo to see PhantomX in action.
                    </p>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Your plan includes</h3>
                    <ul className="space-y-3 mb-8 sm:mb-12">
                        {planIncludes.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-bright mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-sm sm:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-8 sm:mt-12">
                        <h4 className="text-gray-300 font-semibold mb-4 text-sm sm:text-base">Trusted by leading companies</h4>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                            {logos.map((logo, index) => (
                                <img key={index} src={logo.src} alt={logo.alt} className="h-6 sm:h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};