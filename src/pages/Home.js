import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import "./style/Home.css";

/* ───────────────────────────────────────────
   HERO IMAGE CAROUSEL
─────────────────────────────────────────── */
const heroSlides = [
  {
    image: "/images/hero-living-room.jpg",
    title: "Crafting Timeless",
    highlight: "Living Spaces",
    subtitle: "Handcrafted furniture that transforms your house into a home",
  },
  {
    image: "/images/hero-bedroom.jpg",
    title: "Design Your Dream",
    highlight: "Bedroom",
    subtitle: "Premium bedroom suites built for comfort and elegance",
  },
  {
    image: "/images/hero-dining.jpg",
    title: "Gather Around",
    highlight: "Beautiful Tables",
    subtitle: "Dining sets that bring families together every day",
  },
];

/* ───────────────────────────────────────────
   ANIMATED COUNTER
─────────────────────────────────────────── */
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ───────────────────────────────────────────
   HOME COMPONENT
─────────────────────────────────────────── */
const Home = () => {
  /* hero carousel state */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((p) => (p + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(nextSlide, 5500);
    return () => clearInterval(id);
  }, [nextSlide]);

  const goToSlide = (i) => {
    setDirection(i > currentSlide ? 1 : -1);
    setCurrentSlide(i);
  };

  /* parallax refs */
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  /* gallery section parallax */
  const galleryRef = useRef(null);
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  /* slide variants */
  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0, scale: 1.1 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, scale: 0.95 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 60 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };


  const products = [
    {
      category: "Modern Dining Sets",
      description: "Elegant dining solutions for memorable family gatherings",
      image: "/images/dining-1.png",
      gallery: ["/images/dining-2.jpg", "/images/dining-3.jpg"],
    },
    {
      category: "Bedroom Suites",
      description: "Create your perfect sanctuary with our bedroom collections",
      image: "/images/bedroom-1.png",
      gallery: ["/images/bedroom-2.jpg", "/images/bedroom-3.jpg"],
    },
    {
      category: "Living Room",
      description: "Comfortable and stylish living room furniture pieces",
      image: "/images/living-room-1.png",
      gallery: ["/images/living-2.jpg", "/images/living-3.jpg"],
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Happy Customers" },
    { value: 20, suffix: "+", label: "Years Experience" },
    // { value: 1200, suffix: "+", label: "Pieces Crafted" },
    { value: 50, suffix: "+", label: "Wood Varieties" },
  ];

  const roomShowcase = [
    {
      title: "Contemporary Living",
      image: "/images/room-living.jpg",
      tag: "Living Room",
    },
    {
      title: "Cozy Bedroom",
      image: "/images/room-bedroom.jpg",
      tag: "Bedroom",
    },
    {
      title: "Elegant Dining",
      image: "/images/room-dining.jpg",
      tag: "Dining",
    },
    {
      title: "Modern Kitchen",
      image: "/images/room-kitchen.jpg",
      tag: "Kitchen",
    },
  ];

  const [activeRoom, setActiveRoom] = useState(0);

  return (
    <div className="home">
      {/* ════════════════ HERO CAROUSEL ════════════════ */}
      <section className="hero-carousel">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.45, 0, 0.15, 1] }}
          >
            <div className="hero-slide-image">
              <motion.img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
              <div className="hero-slide-overlay" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* hero text */}
        <div className="hero-carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-text-block"
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <span className="hero-tag">✦ GAJJAR FURNITURES</span>
              <h1>
                {heroSlides[currentSlide].title}{" "}
                <span className="highlight">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>
              <p>{heroSlides[currentSlide].subtitle}</p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary-hero">
                  Explore Collection <span className="btn-arrow">→</span>
                </Link>
                <Link to="/contact" className="btn btn-outline-hero">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* slide indicators */}
        <div className="hero-indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            >
              <motion.div
                className="indicator-fill"
                animate={{ scaleX: i === currentSlide ? 1 : 0 }}
                transition={{ duration: i === currentSlide ? 5.5 : 0.3 }}
              />
            </button>
          ))}
        </div>

        {/* floating furniture thumbnails */}
        <div className="hero-floating-images">
          {/* <motion.div
            className="floating-thumb thumb-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/images/float-chair.png" alt="Chair" />
          </motion.div> */}
          {/* <motion.div className="floating-thumb thumb-2" animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            <img src="/images/lamp.jpg" alt="Lamp" />
          </motion.div> */}
        </div>

        {/* scroll cue */}
        <motion.div
          className="scroll-cue"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ════════════════ MARQUEE STRIP ════════════════ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-content" key={i}>
              <span>★ Handcrafted Excellence</span>
              <span>★ Premium Woods</span>
              <span>★ Custom Designs</span>
              <span>★ Free Consultation</span>
              <span>★ Lifetime Warranty</span>
              <span>★ Pan India Delivery</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════ ABOUT / IMAGE REVEAL ════════════════ */}
      <section className="about-section" ref={parallaxRef}>
        <div className="container about-grid">
          {/* image stack with parallax */}
          <div className="about-images">
            <motion.div
              className="about-img-main"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/images/about-workshop.jpg"
                alt="Our workshop"
                style={{ y: parallaxY }}
              />
            </motion.div>
            {/* <motion.div
              className="about-img-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src="/images/about-detail.jpg" alt="Crafting detail" />
              <div className="experience-badge">
                <strong>20+</strong>
                <span>Years of Excellence</span>
              </div>
            </motion.div> */}
          </div>

          {/* text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-label">ABOUT US</span>
            <h2 className="section-title">
              We Build Furniture With{" "}
              <span className="highlight">Passion & Precision</span>
            </h2>
            <p className="about-description">
              At Gajjar Furnitures, every piece tells a story. Our master
              craftsmen blend traditional woodworking techniques with
              contemporary design to create furniture that's not just functional
              — it's a work of art that lasts generations.
            </p>
            <div className="about-stats-row">
              {stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <strong>
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary-hero">
              Our Story <span className="btn-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ FEATURES WITH IMAGES ════════════════ */}
      {/* <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">WHY CHOOSE US</span>
            <h2 className="section-title">The Gajjar Difference</h2>
          </motion.div>

          <div className="features-image-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature-image-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-img-wrapper">
                  <motion.img
                    src={f.image}
                    alt={f.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="feature-img-overlay">
                    <span className="feature-icon-badge">{f.icon}</span>
                  </div>
                </div>
                <div className="feature-img-content">
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ════════════════ FEATURES SECTION ════════════════ */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Gajjar Furnitures</h2>
            <div className="title-underline"></div>
          </motion.div>

          <motion.div
            className="features-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: "🪚",
                title: "Artisan Crafted",
                description:
                  "Each piece is meticulously handcrafted by our skilled artisans with attention to every detail.",
              },
              {
                icon: "🌳",
                title: "Sustainable Wood",
                description:
                  "We use only responsibly sourced, high-quality wood from sustainable forests.",
              },
              {
                icon: "⚙️",
                title: "Custom Designs",
                description:
                  "Create your dream furniture with our custom design service tailored to your space.",
              },
              {
                icon: "🏆",
                title: "Lifetime Warranty",
                description:
                  "Our furniture comes with a lifetime warranty because we believe in lasting quality.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="feature-icon-circle"
                  whileHover={{
                    rotate: [0, -10, 10, -5, 0],
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                </motion.div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <motion.div
                  className="feature-underline"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ROOM SHOWCASE (tab-based) ════════════════ */}
      <section className="room-showcase">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">INSPIRATION</span>
            <h2 className="section-title">Room Inspirations</h2>
            <p className="section-subtitle">
              Click a room to explore the design
            </p>
          </motion.div>

          <div className="showcase-tabs">
            {roomShowcase.map((r, i) => (
              <button
                key={r.tag}
                className={`showcase-tab ${i === activeRoom ? "active" : ""}`}
                onClick={() => setActiveRoom(i)}
              >
                {r.tag}
              </button>
            ))}
          </div>

          <div className="showcase-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom}
                className="showcase-image-wrapper"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <img
                  src={roomShowcase[activeRoom].image}
                  alt={roomShowcase[activeRoom].title}
                />
                <div className="showcase-info-bar">
                  <h3>{roomShowcase[activeRoom].title}</h3>
                  <Link to="/products" className="btn btn-small">
                    View Furniture →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════ PROCESS TIMELINE ════════════════ */}
      {/* <section className="process-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">HOW WE WORK</span>
            <h2 className="section-title">From Idea to Reality</h2>
          </motion.div>

          <div className="process-timeline">
            {processes.map((p, i) => (
              <motion.div
                key={p.step}
                className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-image">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="timeline-step">{p.step}</div>
                </div>
                <div className="timeline-text">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section> */}

      {/* ════════════════ PRODUCT COLLECTIONS ════════════════ */}
      <section className="featured-products">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">COLLECTIONS</span>
            <h2 className="section-title">Featured Collections</h2>
            <p className="section-subtitle">
              Discover curated collections that blend modern design with
              timeless craftsmanship
            </p>
          </motion.div>

          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.category}
                className="product-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
              >
                <div className="product-image-wrapper">
                  <motion.img
                    src={product.image}
                    alt={product.category}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="product-overlay">
                    <Link to="/products" className="btn btn-secondary">
                      View Collection
                    </Link>
                  </div>
                  <div className="product-badge">New</div>
                </div>
                <div className="product-info">
                  <h3>{product.category}</h3>
                  <p>{product.description}</p>
                  <motion.div
                    className="product-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ GALLERY MASONRY ════════════════ */}
      {/* <section className="gallery-section" ref={galleryRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">GALLERY</span>
            <h2 className="section-title">Our Craftsmanship</h2>
          </motion.div>

          <div className="gallery-masonry">
            {galleryImages.map((img, i) => {
              const yVal =
                i % 3 === 0 ? galleryY1 : i % 3 === 1 ? galleryY2 : galleryY3;
              return (
                <motion.div
                  key={i}
                  className={`gallery-item gallery-${img.span}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ y: yVal }}
                >
                  <motion.img
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="gallery-hover-overlay">
                    <span>View</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ════════════════ CTA SECTION ════════════════ */}
      <section className="cta-section">
        <div className="cta-bg-image">
          <motion.img
            src="/images/cta-workshop.jpg"
            alt="Workshop"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="cta-overlay" />
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Space?</h2>
            <p>
              Schedule a free design consultation with our experts and bring
              your vision to life.
            </p>
            {/* <div className="cta-buttons">
              <Link to="/contact" className="btn btn-cta-primary">
                Book Consultation <span className="btn-arrow">→</span>
              </Link>
              <a href="tel:+919876543210" className="btn btn-cta-outline">
                📞 Call Now
              </a>
            </div> */}
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">
                Book Consultation <span className="btn-arrow">→</span>
              </Link>
              <a href="tel:+919876543210" className="btn-cta-outline">
                <span className="call-icon">📞</span>
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
