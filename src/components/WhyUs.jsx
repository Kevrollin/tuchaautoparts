import React from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: '◈',
    title: 'Genuine Parts Only',
    desc: 'We source exclusively from verified UAE suppliers — no counterfeits, no compromises.',
  },
  {
    icon: '◉',
    title: 'Hard-to-Find Parts',
    desc: "If you can't find it in Kenya, we'll find it in Dubai. Luxury, European, American — name it.",
  },
  {
    icon: '◆',
    title: 'Bank Transfer & Paybill',
    desc: 'Simple payment options through bank transfer or Paybill for Kenyan customers.',
  },
  {
    icon: '◇',
    title: 'Dubai & Kenya Support',
    desc: 'Two active lines — one in Kenya, one in Dubai — so you always reach a real person.',
  },
];

export default function WhyUs() {
  return (
    <section className="why section-gap" id="why">
      <div className="container">
        <div className="why-top">
          <div className="why-left">
            <span className="section-label">Why Tucha's</span>
            <h2 className="section-title">
              Quality. Reach.
              <br />
              <span className="font-serif italic">Reliability.</span>
            </h2>
          </div>
          <div className="why-right">
            <p className="why-statement">
              We've built our business on one belief: every car owner in Kenya deserves access to the same quality
              parts available in the world's top auto markets.
            </p>
          </div>
        </div>

        <div className="why-grid">
          {reasons.map(r => (
            <div key={r.title} className="why-card">
              <span className="why-icon">{r.icon}</span>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote strip */}
        <div className="quote-strip">
          <blockquote className="quote-text">
            <span className="quote-mark">"</span>
            Every car deserves the best.
          </blockquote>
          <div className="quote-attr">— Tucha's Auto Parts &amp; Outsourcing</div>
        </div>
      </div>
    </section>
  );
}
