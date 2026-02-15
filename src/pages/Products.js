import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [quickView, setQuickView] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: '✨', count: 12 },
    { id: 'dining', name: 'Dining Room', icon: '🍽️', count: 4 },
    { id: 'bedroom', name: 'Bedroom', icon: '🛏️', count: 2 },
    { id: 'living', name: 'Living Room', icon: '🛋️', count: 4 },
    { id: 'office', name: 'Home Office', icon: '💼', count: 2 }
  ];

  const products = [
    {
      id: 1,
      category: 'dining',
      name: 'Classic Wooden Dining Setup',
      description: 'Custom solid wood dining table with matching chairs crafted for durability and elegance.',
      price: 'Custom Quote',
      material: 'Solid Wood',
      featured: true,
      image: '/images/dining-1.png',
      rating: 4.9,
      reviews: 18
    },
  
    {
      id: 2,
      category: 'dining',
      name: 'Modern Marble Dining Table',
      description: 'Premium marble top dining table with upholstered chairs for a modern luxury look.',
      price: 'Custom Quote',
      material: 'Marble & Wood',
      featured: true,
      image: '/images/dining-2.png',
      rating: 4.8,
      reviews: 14
    },
  
    {
      id: 3,
      category: 'bedroom',
      name: 'Brick Wall Master Bedroom',
      description: 'Custom bed frame with wardrobe and rustic brick wall interior finish.',
      price: 'Custom Quote',
      material: 'Teak Wood',
      featured: true,
      image: '/images/bedroom-1.png',
      rating: 4.9,
      reviews: 22
    },
    
    {
      id: 4,
      category: 'bedroom',
      name: 'Minimal Modern Bedroom',
      description: 'Minimal style bedroom with clean furniture lines and warm lighting.',
      price: 'Custom Quote',
      material: 'Engineered Wood',
      featured: false,
      image: '/images/bedroom-2.png',
      rating: 4.7,
      reviews: 11
    },
  
    {
      id: 5,
      category: 'living',
      name: 'Contemporary Sofa Setup',
      description: 'Modern sofa set with custom center table and elegant lighting design.',
      price: 'Custom Quote',
      material: 'Fabric & Wood',
      featured: true,
      image: '/images/living-room-1.png',
      rating: 4.8,
      reviews: 20
    },
  
    {
      id: 6,
      category: 'living',
      name: 'Luxury Lounge Area',
      description: 'Premium lounge seating with handcrafted tables and decorative interior.',
      price: 'Custom Quote',
      material: 'Leather & Wood',
      featured: true,
      image: '/images/living-room-2.png',
      rating: 4.9,
      reviews: 17
    },
  
    {
      id: 7,
      category: 'living',
      name: 'Garden View Living Room',
      description: 'Bright living area with custom sofas and glass enclosure design.',
      price: 'Custom Quote',
      material: 'Fabric',
      featured: false,
      image: '/images/living-room-3.png',
      rating: 4.7,
      reviews: 12
    },
  
    {
      id: 8,
      category: 'living',
      name: 'Classic Sofa Interior',
      description: 'Elegant living room with traditional sofa arrangement and rug styling.',
      price: 'Custom Quote',
      material: 'Fabric',
      featured: false,
      image: '/images/living-room-4.png',
      rating: 4.7,
      reviews: 9
    },
  
    {
      id: 9,
      category: 'office',
      name: 'Home Study Room',
      description: 'Compact study setup with wooden desk and comfortable seating.',
      price: 'Custom Quote',
      material: 'Wood',
      featured: true,
      image: '/images/study-room-1.png',
      rating: 4.8,
      reviews: 13
    },
  
    {
      id: 10,
      category: 'office',
      name: 'Workspace Desk Setup',
      description: 'Custom office desk with storage and ergonomic chair setup.',
      price: 'Custom Quote',
      material: 'Wood',
      featured: false,
      image: '/images/study-room-2.png',
      rating: 4.7,
      reviews: 8
    },
  
    {
      id: 11,
      category: 'dining',
      name: 'Designer Wooden Chairs',
      description: 'Handcrafted designer chairs with woven seating and premium finish.',
      price: 'Custom Quote',
      material: 'Solid Wood',
      featured: false,
      image: '/images/chairs-1.png',
      rating: 4.8,
      reviews: 10
    },

    {
      id: 12,
      category: 'dining',
      name: 'Traditional Wooden Dining Interior',
      description: 'Handcrafted solid wood dining tables and chairs with classic finish. Designed for durability and timeless elegance, perfect for family dining spaces and traditional interiors.',
      price: 'Custom Quote',
      material: 'Solid Teak Wood',
      dimensions: 'Custom Size Available',
      weight: 'Custom',
      featured: true,
      image: '/images/dining-3.png', 
      rating: 4.9,
      reviews: 21,
      delivery: '3-5 weeks',
      warranty: '5 Years'
    },    
  ];
  

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const openQuickView = (product) => {
    setQuickView(product);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setQuickView(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
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
              🛒 New Collection
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Masterfully <span className="highlight">Crafted</span>
              <br />Furniture <span className="highlight">Collections</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Discover our handcrafted furniture pieces, designed for beauty, 
              built to last, and made with sustainable materials
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="products-controls">
        <div className="container">
          <div className="controls-wrapper">
            <div className="categories-filter">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: selectedCategory === category.id ? 1.05 : 1
                  }}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                  <span className="category-count">{category.count}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="products-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={itemVariants}
                  whileHover="hover"
                  layout
                >                
                  <div className="product-image-wrapper">
                    <div 
                      className="product-image"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="product-overlay">
                        <motion.button 
                          className="quick-view-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openQuickView(product)}
                        >
                          Quick View
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <div className="product-category">
                      {categories.find(c => c.id === product.category)?.icon} 
                      {product.category}
                    </div>
                    
                    <h3 className="product-name">{product.name}</h3>

                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-specs">
                      <div className="spec-item">
                        <span className="spec-label">Material:</span>
                        <span className="spec-value">{product.material}</span>
                      </div>
                    </div>
                    
                    <div className="product-footer">
                      <div className="product-price">{product.price}</div>
                      <motion.button 
                        className="btn add-to-cart"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openQuickView(product)}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Simplified Quick View Modal - Only Image, Title & Category */}
      <AnimatePresence>
        {quickView && (
          <motion.div 
            className="quick-view-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
          >
            <motion.div 
              className="modal-content-simple"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-simple" onClick={closeQuickView} aria-label="Close">
                <motion.span
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  ✕
                </motion.span>
              </button>
              
              <div className="modal-simple">
                {/* Image Container with Hover Effects */}
                <motion.div 
                  className="modal-image-simple"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    delay: 0.1
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 40px -15px rgba(139, 69, 19, 0.4)"
                  }}
                >
                  {quickView.featured && (
                    <motion.div 
                      className="image-badge-simple"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className="image-main-simple"
                    style={{ backgroundImage: `url(${quickView.image})` }}
                    aria-label={`Image of ${quickView.name}`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Shine effect overlay */}
                    <motion.div 
                      className="image-shine"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Title and Category with Animations */}
                <motion.div 
                  className="modal-info-simple"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.div 
                    className="modal-category-simple"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      delay: 0.3 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className="category-icon-simple">
                      {categories.find(c => c.id === quickView.category)?.icon}
                    </span>
                    <span>{quickView.category}</span>
                  </motion.div>
                  
                  <motion.h2 
                    className="modal-title-simple"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {quickView.name}
                  </motion.h2>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;