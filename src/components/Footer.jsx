import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-mark">T</span>
          <div>
            <div className="footer-name">TUCHA'S AUTO PARTS</div>
            <div className="footer-tagline">Dubai to Kenya. Sourcing Made Easy.</div>
          </div>
        </div>

        <nav className="footer-nav">
          <a href="#parts">Parts</a>
          <a href="#how">How It Works</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-copy">
          © {new Date().getFullYear()} Tucha's Autoparts &amp; Outsourcing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
