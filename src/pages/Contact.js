import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

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
    { value: 'general', label: 'General Inquiry', icon: '💬' },
    { value: 'design', label: 'Design Consultation', icon: '🎨' },
    { value: 'quote', label: 'Get a Quote', icon: '💰' },
    { value: 'restoration', label: 'Restoration', icon: '🛠️' },
    { value: 'support', label: 'Customer Support', icon: '🆘' }
  ];

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Location',
      details: ['123 Woodcraft Street', 'Furniture City, FC 12345'],
      color: 'var(--primary-brown)'
    },
    {
      icon: '📞',
      title: 'Contact Numbers',
      details: ['Main: (123) 456-7890', 'Sales: (123) 456-7891'],
      color: 'var(--dark-brown)'
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      details: ['info@timbercraft.com', 'sales@timbercraft.com'],
      color: 'var(--accent-gold)'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'var(--light-brown)'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

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

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <motion.div 
              className="form-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Send Us a <span className="highlight">Message</span></h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            {formStatus.submitted ? (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="contact-form"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Interested In</label>
                  <div className="service-options">
                    {services.map((service) => (
                      <motion.div
                        key={service.value}
                        className={`service-option ${formData.service === service.value ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, service: service.value })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="service-icon">{service.icon}</span>
                        <span className="service-label">{service.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-secondary submit-btn"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: formStatus.submitting ? 1 : 1.05 }}
                  whileTap={{ scale: formStatus.submitting ? 1 : 0.95 }}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.form>
            )}
          </div>
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
                  <h3>📍 TimberCraft Studio & Showroom</h3>
                  <div className="location-info">
                    <div className="info-item">
                      <span className="info-label">Address:</span>
                      <span className="info-value">123 Woodcraft Street, Furniture City</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Hours:</span>
                      <span className="info-value">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Parking:</span>
                      <span className="info-value">Free onsite parking available</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Tour:</span>
                      <span className="info-value">Showroom tours by appointment</span>
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