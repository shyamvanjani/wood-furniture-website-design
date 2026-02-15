import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style/Home.css';

const Home = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: '🪚',
      title: 'Artisan Crafted',
      description: 'Each piece is meticulously handcrafted by our skilled artisans with attention to every detail.',
      delay: 0.1
    },
    {
      icon: '🌳',
      title: 'Sustainable Wood',
      description: 'We use only responsibly sourced, high-quality wood from sustainable forests.',
      delay: 0.2
    },
    {
      icon: '⚙️',
      title: 'Custom Designs',
      description: 'Create your dream furniture with our custom design service tailored to your space.',
      delay: 0.3
    },
    {
      icon: '🏆',
      title: 'Lifetime Warranty',
      description: 'Our furniture comes with a lifetime warranty because we believe in lasting quality.',
      delay: 0.4
    }
  ];

  const products = [
    {
      category: 'Modern Dining Sets',
      description: 'Elegant dining solutions for memorable family gatherings',
      image: 'dining'
    },
    {
      category: 'Bedroom Suites',
      description: 'Create your perfect sanctuary with our bedroom collections',
      image: 'bedroom'
    },
    {
      category: 'Living Room',
      description: 'Comfortable and stylish living room furniture pieces',
      image: 'living'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Made <span className="highlight">To Order</span> Furniture
              <br />for <span className="highlight">Modern Living</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Experience custom-crafted furniture designed to fit your lifestyle and space, combining durability, comfort, and elegant craftsmanship.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-buttons"
            >
              <Link to="/products" className="btn">
                Explore Collection
                <span className="btn-icon">→</span>
              </Link>
              {/* <Link to="/contact" className="btn btn-outline">
                <span className="play-icon">▶</span>
                Virtual Tour
              </Link> */}
            </motion.div>
          </div>
        </div>
        
        {/* <motion.div 
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
          <div className="scroll-line"></div>
        </motion.div> */}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Gajjar Furnitures
          </motion.h2>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="feature-icon-wrapper"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Collections</h2>
            <p className="section-subtitle">
              Discover our curated collections that blend modern design with timeless craftsmanship
            </p>
          </motion.div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.category}
                className="product-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
              >
                <div className="product-image-wrapper">
                  <div className={`product-image ${product.image}`}></div>
                  <div className="product-overlay">
                    <Link to="/products" className="btn btn-secondary">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.category}</h3>
                  <p>{product.description}</p>
                  <motion.div 
                    className="product-line"
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    initial={{ width: 0 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Space?</h2>
            <p>Schedule a free design consultation with our experts</p>
            <Link to="/contact" className="btn btn-secondary">
              Book Consultation
              <span className="btn-icon">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;