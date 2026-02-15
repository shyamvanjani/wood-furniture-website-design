import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style/Contact.css';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Locations',
      details: [
        'Workshop: 32 Nanu kaka Estate, Narol to Piplaj Road, Narol 382405',
        'Office: 13 Radha Raman Shopping Center, Dharni Dhar, Paldi'
      ],
      color: 'var(--primary-brown)'
    },
    {
      icon: '📞',
      title: 'Contact Number',
      details: ['+91 9824072093'],
      color: 'var(--dark-brown)'
    },
    {
      icon: '✉️',
      title: 'Email Address',
      details: ['gajjarfurnitures@gmail.com'],
      color: 'var(--accent-gold)'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      color: 'var(--primary-brown)'
    }
  ];
  

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
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
              📞 Get in Touch
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's <span className="highlight">Create</span> Something
              <br />Amazing <span className="highlight">Together</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Have questions about our furniture? Ready to start your project?
              We're here to help every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div 
            className="contact-info-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="contact-info-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                custom={index}
              >
                <motion.div 
                  className="info-icon-wrapper"
                  style={{ background: info.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="info-icon">{info.icon}</div>
                </motion.div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="info-detail">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="map-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Visit Our <span className="highlight">Studio</span></h2>
            <p className="section-subtitle">
              Come see our craftsmanship in person at our showroom
            </p>
          </motion.div>

          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <div className="map-placeholder">
            <div className="map-content">
              <div className="location-details">
                <h3>📍 Gajjar Furnitures Workshop & Office</h3>
                <div className="location-info">

                  <div className="info-item">
                    <span className="info-label">Address:</span>
                    <span className="info-value">
                      Workshop: 32 Nanu kaka Estate, Narol to Piplaj Road, Narol 382405 <br/>
                      Office: 13 Radha Raman Shopping Center, Dharni Dhar, Paldi
                    </span>
                  </div>

                  <div className="info-item">
                    <span className="info-label">Hours:</span>
                    <span className="info-value">
                      Mon-Sat: 9:00 AM - 7:00 PM, Sunday: Closed
                    </span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Visit:</span>
                    <span className="info-value">
                      Site visits and consultations by appointment
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
            <p className="section-subtitle">
              Quick answers to common questions about our process
            </p>
          </motion.div>

          <motion.div 
            className="faq-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: 'How long does custom furniture take to build?',
                answer: 'Typically 6-8 weeks from design approval to completion, depending on complexity and current workload.'
              },
              {
                question: 'Do you offer delivery and installation?',
                answer: 'Yes, we provide professional white-glove delivery and installation service for all our furniture.'
              },
              {
                question: 'What is your warranty policy?',
                answer: 'All our furniture comes with a lifetime warranty against manufacturing defects.'
              },
              {
                question: 'Can I see samples of wood and finishes?',
                answer: 'Absolutely! Visit our showroom to see samples or request a sample kit to be mailed to you.'
              },
              {
                question: 'Do you work with interior designers?',
                answer: 'Yes, we frequently collaborate with interior designers and offer trade discounts.'
              },
              {
                question: 'How do I care for my wooden furniture?',
                answer: 'We provide detailed care instructions and recommend using specific wood care products we offer.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;