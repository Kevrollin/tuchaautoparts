import React from 'react';
import './HowItWorks.css';
import { getWhatsAppOrderLink, openWhatsApp } from '../utils/whatsapp';

const steps = [
  {
    num: '1',
    title: 'Tell Us What You Need',
    desc: 'Send us the part name, your car model, year, and any part numbers via WhatsApp or email. The more detail, the better.',
    cta: null,
  },
  {
    num: '2',
    title: 'We Source It in Dubai',
    desc: 'Our team in Dubai and Sharjah locates your part from verified suppliers. We confirm availability and send you a quote.',
    cta: null,
  },
  {
    num: '3',
    title: 'Pay & Confirm',
    desc: 'Make payment via bank transfer or Paybill. We confirm your order and begin the shipping process.',
    cta: null,
  },
  {
    num: '4',
    title: 'Delivered to Kenya',
    desc: 'Your parts are shipped from UAE and delivered to you in Kenya. We keep you updated at every step.',
    cta: null,
  },
];

export default function HowItWorks() {
  return (
    <section className="how section-gap" id="how">
      <div className="container">
        <div className="how-layout">
          <div className="how-left">
            <span className="section-label">The Process</span>
            <h2 className="section-title how-title">
              Sourcing Made
              <br />
              <span className="font-serif italic">Simple.</span>
            </h2>
            <p className="section-desc">
              From your WhatsApp message to your garage door — we handle everything in between.
            </p>
            <a
              href={getWhatsAppOrderLink()}
              className="btn btn-primary how-cta"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => { e.preventDefault(); openWhatsApp(); }}
            >
              Start an Order
            </a>
          </div>

          <div className="how-steps">
            {steps.map((step, i) => (
              <div key={step.num} className="how-step">
                <div className="step-marker">
                  <span className="step-num">{step.num}</span>
                  {i < steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
