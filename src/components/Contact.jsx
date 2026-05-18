import React from 'react';
import './Contact.css';

const contacts = [
  { label: 'Kenya (Call / WhatsApp)', value: '+254 723 590 884', href: 'https://wa.me/254723590884' },
  { label: 'Dubai (Call / WhatsApp)', value: '+971 585 590 884', href: 'https://wa.me/971585590884' },
  { label: 'Dubai (Robert)', value: '+971 556 150 206', href: 'tel:+971556150206' },
];

const social = [
  { label: 'Facebook', handle: 'tuchas.autoparts', href: 'https://www.facebook.com/tuchas.autoparts' },
  { label: 'Instagram', handle: '@tuchas_autoparts', href: 'https://instagram.com/tuchas_autoparts' },
  { label: 'Email', handle: 'tuchas_autoparts@outlook.com', href: 'mailto:tuchas_autoparts@outlook.com' },
];

export default function Contact() {
  return (
    <section className="contact section-gap" id="contact">
      <div className="container">
        {/* Top CTA */}
        <div className="cta-block">
          <div className="cta-text">
            <span className="section-label">Get in Touch</span>
            <h2 className="cta-headline">
              Can't find the part?
              <br />
              <span className="font-serif italic">We'll find it.</span>
            </h2>
          </div>
          <a
            href="https://wa.me/254723590884"
            className="btn btn-primary cta-btn"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us Now
          </a>
        </div>

        {/* Contact grid */}
        <div className="contact-grid">
          <div className="contact-col">
            <p className="col-label">Phone / WhatsApp</p>
            <div className="contact-list">
              {contacts.map(c => (
                <a key={c.value} href={c.href} className="contact-item" target="_blank" rel="noreferrer">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-col">
            <p className="col-label">Follow & Reach</p>
            <div className="contact-list">
              {social.map(s => (
                <a key={s.handle} href={s.href} className="contact-item" target="_blank" rel="noreferrer">
                  <span className="contact-label">{s.label}</span>
                  <span className="contact-value">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-col payments-col">
            <p className="col-label">Payments Accepted</p>
            <div className="payment-tags">
              <span className="pay-tag">M-Pesa</span>
              <span className="pay-tag">Bank Transfer</span>
              <span className="pay-tag">Cash</span>
            </div>
            <p className="pay-note">
              Kenyan customers can pay via M-Pesa (Lipa Na M-Pesa). UAE payments via bank transfer or cash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
