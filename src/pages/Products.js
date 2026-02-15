import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [quickView, setQuickView] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
    { id: 'all', name: 'All Products', icon: '✨', count: 9 },
    { id: 'dining', name: 'Dining Room', icon: '🍽️', count: 3 },
    { id: 'bedroom', name: 'Bedroom', icon: '🛏️', count: 2 },
    { id: 'living', name: 'Living Room', icon: '🛋️', count: 2 },
    { id: 'office', name: 'Home Office', icon: '💼', count: 2 }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest First' },
    { id: 'popular', label: 'Most Popular' }
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
    setQuantity(1);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setQuickView(null);
    document.body.style.overflow = 'auto';
  };

  const increaseQuantity = () => {
    setQuantity(prev => Math.min(10, prev + 1));
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.min(10, Math.max(1, value)));
  };

  const calculateTotalPrice = () => {
    if (!quickView) return '$0';
    const price = parseInt(quickView.price.replace('$', '').replace(',', ''));
    return `$${(price * quantity).toLocaleString()}`;
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

      {/* Quick View Modal */}
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
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeQuickView} aria-label="Close">
                ✕
              </button>
              
              <div className="modal-grid">
                <div className="modal-image">
                  {quickView.featured && (
                    <div className="image-badge">
                      ⭐ Featured
                    </div>
                  )}
                  <div 
                    className="image-main"
                    style={{ backgroundImage: `url(${quickView.image})` }}
                    aria-label={`Image of ${quickView.name}`}
                  />
                </div>
                
                <div className="modal-details">
                  <div className="modal-header">
                    <div className="modal-category">
                      {categories.find(c => c.id === quickView.category)?.icon}
                      {quickView.category}
                    </div>
                    <h2>{quickView.name}</h2>
                    
                    <div className="modal-price-container">
                      <div className="modal-price">{quickView.price}</div>
                      <span className="price-savings">Free Shipping</span>
                    </div>
                    
                    <div className="modal-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating">{quickView.rating}</span>
                      <span className="reviews">({quickView.reviews} reviews)</span>
                    </div>
                    
                    <p className="modal-description">{quickView.description}</p>
                  </div>
                  
                  <div className="modal-specs">
                    <h4>📋 Specifications</h4>
                    <div className="specs-grid">
                      <div className="spec-item">
                        <span className="spec-label">📍 Material</span>
                        <span className="spec-value">{quickView.material}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">📐 Dimensions</span>
                        <span className="spec-value">{quickView.dimensions}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">⚖️ Weight</span>
                        <span className="spec-value">{quickView.weight}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">📦 Delivery</span>
                        <span className="spec-value">{quickView.delivery}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">🛡️ Warranty</span>
                        <span className="spec-value">{quickView.warranty}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">⭐ Rating</span>
                        <span className="spec-value">{quickView.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-additional-info">
                    <div className="info-grid">
                      <div className="info-item">
                        <div className="info-icon">🚚</div>
                        <span className="info-label">Delivery</span>
                        <span className="info-value">Free Shipping</span>
                      </div>
                      <div className="info-item">
                        <div className="info-icon">🛡️</div>
                        <span className="info-label">Warranty</span>
                        <span className="info-value">Lifetime</span>
                      </div>
                      <div className="info-item">
                        <div className="info-icon">↩️</div>
                        <span className="info-label">Returns</span>
                        <span className="info-value">30 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <div className="quantity-selector">
                      <label className="quantity-label">Quantity:</label>
                      <div className="quantity-controls">
                        <motion.button 
                          className="quantity-btn"
                          onClick={decreaseQuantity}
                          disabled={quantity <= 1}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Decrease quantity"
                        >
                          -
                        </motion.button>
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="quantity-input"
                          aria-label="Quantity"
                        />
                        <motion.button 
                          className="quantity-btn"
                          onClick={increaseQuantity}
                          disabled={quantity >= 10}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Increase quantity"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="total-price">
                      <span className="total-label">Total:</span>
                      <span className="total-value">{calculateTotalPrice()}</span>
                    </div>
                    
                    <div className="action-buttons">
                      <motion.button 
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Add to Cart
                      </motion.button>
                      <motion.button 
                        className="btn btn-outline"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Add to Wishlist
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;