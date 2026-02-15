import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/Footer.css";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

  const footerSections = [
    {
      title: "Gajjar Furnitures",
      content: (
        <p className="footer-description">
          All Kind of Furniture Contractor. We provide high-quality custom
          furniture solutions with craftsmanship and precision.
        </p>
      ),
    },
    {
      title: "Quick Links",
      content: (
        <ul>
          {quickLinks.map(({ label, path }) => (
            <motion.li
              key={label}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={path}>{label}</Link>
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      title: "Contact Info",
      content: (
        <ul className="contact-info">
          <li>
            <span className="contact-icon">📞</span>
            <span>+91 9824072093</span>
          </li>
          <li>
            <span className="contact-icon">🌐</span>
            <span>www.gajjarfurnitures.com</span>
          </li>
          <li>
            <span className="contact-icon">✉️</span>
            <span>gajjarfurnitures@gmail.com</span>
          </li>
          <li>
            <span className="contact-icon">📍</span>
            <span>
              Workshop: 32 Nanu kaka Estate, Narol to Piplaj Road, Narol 382405
            </span>
          </li>
          <li>
            <span className="contact-icon">📍</span>
            <span>
              Office: 13 Radha Raman Shopping Center, Dharni Dhar, Paldi
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Business Hours",
      content: (
        <ul>
          <li>
            <strong>Mon-Sat:</strong> 9:00 AM - 7:00 PM
          </li>
          <li>
            <strong>Sunday:</strong> Closed
          </li>
        </ul>
      ),
    },
  ];
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{section.title}</h3>
              {section.content}
            </motion.div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
           &copy; {new Date().getFullYear()} Gajjar Furnitures. All rights reserved.
            reserved.
          </p>
        </div>
      </div>

      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
