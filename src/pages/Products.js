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
      name: 'Walnut Dining Table', 
      description: 'Solid walnut table with extension leaves, featuring butterfly joints and a natural oil finish. Perfect for family gatherings and dinner parties.',
      price: '$2,499',
      material: 'Solid Walnut',
      dimensions: '72" L × 42" W × 30" H',
      weight: '120 lbs',
      featured: true,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      reviews: 42,
      delivery: '6-8 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 2, 
      category: 'dining', 
      name: 'Modern Dining Chairs', 
      description: 'Set of 4 upholstered dining chairs with walnut frames and premium fabric. Ergonomic design with excellent back support.',
      price: '$1,299',
      material: 'Walnut & Fabric',
      dimensions: '20" W × 22" D × 32" H',
      weight: '25 lbs each',
      featured: true,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      reviews: 38,
      delivery: '4-6 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 3, 
      category: 'bedroom', 
      name: 'King Size Bed Frame', 
      description: 'Solid oak bed frame with integrated storage and modern minimalist design. Includes under-bed drawer system.',
      price: '$1,899',
      material: 'Solid Oak',
      dimensions: '76" W × 84" L × 30" H',
      weight: '180 lbs',
      featured: true,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      reviews: 56,
      delivery: '8-10 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 4, 
      category: 'bedroom', 
      name: 'Dresser & Mirror', 
      description: '6-drawer dresser with matching mirror in cherry wood with brass hardware. Features soft-close drawers.',
      price: '$1,599',
      material: 'Cherry Wood',
      dimensions: '60" W × 20" D × 32" H',
      weight: '95 lbs',
      featured: false,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      rating: 4.6,
      reviews: 29,
      delivery: '6-8 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 5, 
      category: 'living', 
      name: 'Leather Recliner', 
      description: 'Handcrafted leather reclining chair with walnut base and premium cushioning. Features 360-degree swivel.',
      price: '$1,299',
      material: 'Full-grain Leather',
      dimensions: '36" W × 40" D × 40" H',
      weight: '85 lbs',
      featured: true,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80',
      rating: 4.8,
      reviews: 45,
      delivery: '5-7 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 6, 
      category: 'living', 
      name: 'Coffee Table', 
      description: 'Live edge walnut coffee table with steel legs and resin river design. Unique natural wood pattern.',
      price: '$899',
      material: 'Walnut & Steel',
      dimensions: '48" L × 24" W × 18" H',
      weight: '65 lbs',
      featured: false,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80',
      rating: 4.7,
      reviews: 32,
      delivery: '4-6 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 7, 
      category: 'office', 
      name: 'Executive Desk', 
      description: 'Large executive desk with cable management and built-in charging stations. Includes leather desk pad.',
      price: '$1,799',
      material: 'Maple Wood',
      dimensions: '72" W × 36" D × 30" H',
      weight: '150 lbs',
      featured: true,
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80',
      rating: 4.9,
      reviews: 51,
      delivery: '8-10 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 8, 
      category: 'office', 
      name: 'Bookshelf', 
      description: 'Floor-to-ceiling adjustable bookshelf with integrated lighting. Features 8 adjustable shelves.',
      price: '$1,199',
      material: 'Birch Wood',
      dimensions: '36" W × 12" D × 84" H',
      weight: '110 lbs',
      featured: false,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      rating: 4.6,
      reviews: 27,
      delivery: '6-8 weeks',
      warranty: 'Lifetime'
    },
    { 
      id: 9, 
      category: 'dining', 
      name: 'Bar Cabinet', 
      description: 'Convertible bar cabinet with fold-out workspace and glass storage. Features LED interior lighting.',
      price: '$1,499',
      material: 'Mahogany & Glass',
      dimensions: '42" W × 18" D × 72" H',
      weight: '130 lbs',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      reviews: 34,
      delivery: '7-9 weeks',
      warranty: 'Lifetime'
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
            
            <div className="sort-controls">
              <span className="sort-label">Sort by:</span>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
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
                  {product.featured && (
                    <div className="featured-badge">
                      ⭐ Featured
                    </div>
                  )}
                  
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
                    
                    <div className="product-actions">
                      <motion.button 
                        className="action-btn wishlist"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Add to wishlist"
                      >
                        ♡
                      </motion.button>
                      <motion.button 
                        className="action-btn compare"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Compare product"
                      >
                        ⇄
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <div className="product-category">
                      {categories.find(c => c.id === product.category)?.icon} 
                      {product.category}
                    </div>
                    
                    <h3 className="product-name">{product.name}</h3>
                    
                    <div className="product-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating">{product.rating}</span>
                      <span className="reviews">({product.reviews})</span>
                    </div>
                    
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-specs">
                      <div className="spec-item">
                        <span className="spec-label">Material:</span>
                        <span className="spec-value">{product.material}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Delivery:</span>
                        <span className="spec-value">{product.delivery}</span>
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