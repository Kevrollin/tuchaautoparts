import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Parts', href: '#parts' },
    { label: 'How It Works', href: '#how' },
    { label: 'Why Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          <img 
            src="/WhatsApp Image 2026-05-13 at 6.56.39 PM.jpeg" 
            alt="Tucha's Auto Parts Logo"
            className="logo-image"
          />
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/254723590884" className="nav-cta" target="_blank" rel="noreferrer">
            Order Now
          </a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
