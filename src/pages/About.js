import React from 'react';
import { motion } from 'framer-motion';
import './style/About.css';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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

  // Core values based on PPT
  const values = [
    {
      title: 'Quality Craftsmanship',
      description:
        'Every piece is built using premium materials and skilled workmanship to ensure durability and long-lasting performance.',
      icon: '🪵'
    },
    {
      title: 'Customized Solutions',
      description:
        'We create made-to-order furniture tailored to your space, lifestyle, and functional requirements.',
      icon: '📐'
    },
    {
      title: 'Thoughtful Design',
      description:
        'Our designs combine aesthetics, comfort, and usability to enhance the overall experience of your space.',
      icon: '✨'
    }
  ];

  const teamMembers = [
    {
      name: 'Ashok B. Gajjar',
      role: 'Founder',
      experience: 'Leadership & Expertise'
    },
    {
      name: 'Design Team',
      role: 'Furniture Planning & Customization',
      experience: 'Space-focused Designs'
    },
    {
      name: 'Craftsmen Team',
      role: 'Manufacturing & Installation',
      experience: 'Skilled Workmanship'
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
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              Custom Furniture Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Designing Spaces with <span className="highlight">Precision & Care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-subtitle"
            >
              Made-to-order furniture solutions for homes, offices, and commercial spaces
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* About / Journey Section */}
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
                About <span className="highlight">Gajjar Furnitures</span>
              </h2>

              <div className="story-text">
                <p>
                  Gajjar Furnitures is a custom furniture brand focused on creating
                  functional, comfortable, and durable furniture solutions tailored to each client’s needs.
                </p>

                <p>
                  We specialize in made-to-order furniture for residential, commercial,
                  and office spaces. From design consultation and material selection to
                  manufacturing and installation, every project is handled with precision and care.
                </p>

                <p>
                  With a strong emphasis on quality materials, skilled craftsmanship, and thoughtful detailing,
                  we deliver furniture that is timeless, practical, and built to last.
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


      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our <span className="highlight">Vision</span>
            </h2>

            <p>
              We envision spaces where furniture is not just placed, but thoughtfully integrated.
              Our goal is to design custom pieces that complement architecture, improve usability,
              and elevate the overall experience of the space.
            </p>
          </motion.div>
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
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-line"></div>
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
            <h2 className="section-title">
              Our <span className="highlight">Team</span>
            </h2>
            <p className="section-subtitle">
              Skilled professionals dedicated to quality, precision, and customer satisfaction
            </p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
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
                  <p className="team-experience">{member.experience}</p>
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
