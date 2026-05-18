import React from 'react';
import './Hero.css';
import { getWhatsAppOrderLink } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background grid lines */}
      <div className="hero-grid" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="grid-line" />)}
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow anim-fade-up d1">
            <span className="eyebrow-dot" />
            Dubai → Kenya  ·  Sourced & Delivered
          </p>

          <h1 className="hero-headline anim-fade-up d2">
            <span className="line">Premium</span>
            <span className="line italic">Auto Parts.</span>
            <span className="line accent-line">No Compromise.</span>
          </h1>

          <p className="hero-body anim-fade-up d3">
            Genuine auto spares sourced directly from UAE markets and delivered to you in Kenya.
            Engines, body panels, electronics — every part, every brand.
          </p>

          <div className="hero-actions anim-fade-up d4">
            <a
              href={getWhatsAppOrderLink()}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
            <a href="#parts" className="btn btn-ghost">
              View Parts ↓
            </a>
          </div>
        </div>

        <div className="hero-stat-bar anim-fade-up d4">
          <div className="stat">
            <span className="stat-num">500<span className="accent">+</span></span>
            <span className="stat-label">Parts Delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">All<span className="accent">.</span></span>
            <span className="stat-label">Car Brands</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">2<span className="accent">x</span></span>
            <span className="stat-label">Locations — KE &amp; UAE</span>
          </div>
        </div>
      </div>

      {/* Decorative accent strip */}
      <div className="hero-strip" aria-hidden="true" />
    </section>
  );
}
