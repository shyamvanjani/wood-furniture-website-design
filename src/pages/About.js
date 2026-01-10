import React from 'react';
import { motion } from 'framer-motion';
import './style/About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const values = [
    {
      title: 'Craftsmanship',
      description: 'Every joint, every curve, every finish is executed with precision and care, honoring traditional woodworking techniques.',
      icon: '🛠️'
    },
    {
      title: 'Sustainability',
      description: 'We source wood from responsibly managed forests and use eco-friendly finishes to minimize our environmental impact.',
      icon: '🌱'
    },
    {
      title: 'Innovation',
      description: 'Blending traditional techniques with modern technology to create furniture that stands the test of time.',
      icon: '💡'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background-pattern"></div>
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
              Since 1995
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting Stories in <span className="highlight">Wood</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Three generations of passion, precision, and perfection in woodworking
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Our <span className="highlight">Journey</span>
              </h2>
              <div className="story-text">
                <p>
                  Founded in a small garage workshop by master craftsman Robert Miller, 
                  TimberCraft began as a passion project fueled by a love for woodworking 
                  inherited from his grandfather.
                </p>
                <p>
                  What started with crafting simple chairs and tables for friends and family 
                  quickly evolved into a respected studio known for innovative design and 
                  uncompromising quality.
                </p>
                <p>
                  Today, led by Robert's daughter Sarah, we continue to push boundaries 
                  while honoring the traditional techniques that define our craft.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="story-image-main"></div>
              <div className="story-image-secondary"></div>
              <div className="floating-element"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core <span className="highlight">Values</span>
          </motion.h2>
          
          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -15 }}
              >
                <motion.div
                  className="value-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <motion.div
                  className="value-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our <span className="highlight">Master Craftsmen</span></h2>
            <p className="section-subtitle">
              The talented individuals behind every TimberCraft creation
            </p>
          </motion.div>

          <div className="team-grid">
            {[
              { name: 'Sarah Miller', role: 'Lead Designer', experience: '15 years' },
              { name: 'James Wilson', role: 'Master Carpenter', experience: '25 years' },
              { name: 'Elena Rodriguez', role: 'Finish Specialist', experience: '12 years' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image-wrapper">
                  <div className={`team-image member-${index + 1}`}></div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-experience">{member.experience} of experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;