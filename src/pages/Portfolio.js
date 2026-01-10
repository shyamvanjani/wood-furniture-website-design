import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const categories = [
    { id: 'all', name: 'All Projects', icon: '✨' },
    { id: 'residential', name: 'Residential', icon: '🏠' },
    { id: 'commercial', name: 'Commercial', icon: '🏢' },
    { id: 'restoration', name: 'Restoration', icon: '🛠️' },
    { id: 'custom', name: 'Custom', icon: '🎨' }
  ];

  const portfolioItems = [
    { 
      id: 1, 
      category: 'residential', 
      title: 'Modern Dining Room', 
      description: 'Custom walnut dining set for a contemporary home',
      year: '2023',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      id: 2, 
      category: 'commercial', 
      title: 'Restaurant Interior', 
      description: 'Complete furniture package for a farm-to-table restaurant',
      year: '2023',
      client: 'Green Leaf Bistro',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      id: 3, 
      category: 'residential', 
      title: 'Master Bedroom Suite', 
      description: 'Oak bedroom furniture with custom storage solutions',
      year: '2023',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      id: 4, 
      category: 'commercial', 
      title: 'Hotel Lobby', 
      description: 'Reception and lounge furniture for boutique hotel',
      year: '2022',
      client: 'Urban Retreat Hotel',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      id: 5, 
      category: 'restoration', 
      title: 'Antique Restoration', 
      description: 'Complete restoration of 19th century mahogany desk',
      year: '2022',
      client: 'Heirloom Project',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80'
    },
    { 
      id: 6, 
      category: 'residential', 
      title: 'Home Office', 
      description: 'Custom built-in bookshelves and desk in cherry wood',
      year: '2022',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80'
    },
    { 
      id: 7, 
      category: 'custom', 
      title: 'Conference Table', 
      description: 'Custom conference table and chairs for tech startup',
      year: '2023',
      client: 'TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80'
    },
    { 
      id: 8, 
      category: 'restoration', 
      title: 'Family Heirloom', 
      description: 'Restoration and refinishing of family dining table',
      year: '2023',
      client: 'Heritage Restoration',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80'
    },
    { 
      id: 9, 
      category: 'custom', 
      title: 'Luxury Bar', 
      description: 'Custom walnut bar with integrated lighting',
      year: '2023',
      client: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
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
              🏆 Featured Work
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our <span className="highlight">Portfolio</span> of
              <br />Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Discover our curated collection of completed projects showcasing 
              innovation, craftsmanship, and attention to detail
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-wrapper">
            <div className="filter-categories">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: activeFilter === category.id ? 1.05 : 1
                  }}
                >
                  <span className="filter-icon">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
            <div className="filter-counter">
              <motion.span 
                key={activeFilter}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="counter-number"
              >
                {filteredItems.length}
              </motion.span>
              <span className="counter-text">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="portfolio-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="portfolio-item"
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() => openProject(item)}
                  layout
                >
                  <div className="portfolio-image-wrapper">
                    <div 
                      className="portfolio-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="image-overlay">
                        <motion.div 
                          className="view-project"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          View Project
                          <span className="view-icon">🔍</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="portfolio-category">
                      {categories.find(c => c.id === item.category)?.icon} {item.category}
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="portfolio-meta">
                      <span className="meta-year">{item.year}</span>
                      <span className="meta-client">{item.client}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProject}>
                ✕
              </button>
              
              <div className="modal-image">
                <div 
                  className="image-main"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
              </div>
              
              <div className="modal-info">
                <div className="modal-header">
                  <div className="modal-category">
                    {categories.find(c => c.id === selectedProject.category)?.icon}
                    {selectedProject.category}
                  </div>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                </div>
                
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Client</span>
                    <span className="detail-value">{selectedProject.client}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Category</span>
                    <span className="detail-value">{selectedProject.category}</span>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-secondary">View Full Gallery</button>
                  <button className="btn btn-outline">Similar Projects</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;