import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('design');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: 'Custom Furniture Design',
      description: 'Bring your vision to life with our bespoke furniture design service. Our designers work closely with you to create unique pieces tailored to your space and style.',
      icon: '📐',
      color: 'var(--primary-brown)'
    },
    {
      title: 'Restoration & Repair',
      description: 'Give new life to your cherished furniture pieces. Our restoration experts specialize in repairing and refinishing antique and heirloom furniture.',
      icon: '🔧',
      color: 'var(--dark-brown)'
    },
    {
      title: 'Commercial Projects',
      description: 'Furniture solutions for offices, restaurants, hotels, and retail spaces. We create durable, beautiful pieces designed for commercial use.',
      icon: '🏢',
      color: 'var(--accent-gold)'
    },
    {
      title: 'Wood Finishing',
      description: 'Professional finishing services using traditional methods and modern techniques. Choose from a variety of stains, paints, and protective finishes.',
      icon: '🎨',
      color: 'var(--light-brown)'
    },
    {
      title: 'Consultation',
      description: 'Expert advice on wood selection, design considerations, and space planning. Perfect for DIY enthusiasts or those planning a furniture project.',
      icon: '💡',
      color: 'var(--primary-brown)'
    },
    {
      title: 'Delivery & Installation',
      description: 'White-glove delivery and professional installation service. We handle your furniture with care and ensure it\'s perfectly placed in your space.',
      icon: '🚚',
      color: 'var(--dark-brown)'
    }
  ];

  const tabs = [
    { id: 'design', label: 'Design Process', icon: '✏️' },
    { id: 'production', label: 'Production', icon: '⚙️' },
    { id: 'delivery', label: 'Delivery', icon: '📦' },
    { id: 'support', label: 'Support', icon: '🛠️' }
  ];

  const processSteps = {
    design: [
      'Initial Consultation & Vision',
      'Design Concept Development',
      '3D Visualization & Planning',
      'Material Selection',
      'Final Design Approval'
    ],
    production: [
      'Wood Selection & Preparation',
      'Precision Cutting & Joinery',
      'Assembly & Construction',
      'Sanding & Surface Preparation',
      'Finishing & Detailing'
    ],
    delivery: [
      'Quality Inspection',
      'Professional Packaging',
      'Scheduled Delivery',
      'Professional Installation',
      'Final Setup & Adjustments'
    ],
    support: [
      'Post-Installation Check',
      'Maintenance Guidance',
      'Warranty Registration',
      'Repair Services',
      'Future Upgrades'
    ]
  };

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background-animation"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-badge"
            >
              🏆 Premium Services
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting <span className="highlight">Excellence</span> in
              <br />Every <span className="highlight">Service</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              From custom designs to expert restoration, we provide comprehensive 
              woodworking solutions for residential and commercial clients
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="scroll-text">Explore Services</span>
          <div className="scroll-line"></div>
        </motion.div>
      </section>

      {/* Service Introduction Section */}
      <section className="service-intro-section">
        <div className="container">
          <motion.div 
            className="service-intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="intro-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              OUR SERVICE
            </motion.div>
            
            <motion.p 
              className="intro-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer custom made furniture solutions for residential, commercial, 
              and office spaces. From design and material selection to manufacturing 
              and installation, every piece is crafted to match the client's needs, 
              ensuring quality, functionality, and long lasting durability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our <span className="highlight">Services</span></h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your specific needs
            </p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="service-icon-wrapper"
                  style={{ background: service.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="service-icon">{service.icon}</div>
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.div 
                  className="service-learn-more"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our <span className="highlight">Process</span></h2>
            <p className="section-subtitle">
              A systematic approach to ensure perfection in every project
            </p>
          </motion.div>

          <div className="process-tabs">
            <div className="tab-buttons">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: activeTab === tab.id ? 1.05 : 1
                  }}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <motion.div 
              key={activeTab}
              className="tab-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="process-steps">
                {processSteps[activeTab].map((step, index) => (
                  <motion.div
                    key={step}
                    className="process-step"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="step-number"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                    <h4>{step}</h4>
                    <div className="step-line"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Get a free consultation with our expert designers</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;