import React from 'react';
import './Contact.css';
import { DUBAI_WHATSAPP_NUMBER, getWhatsAppOrderLink, openWhatsApp } from '../utils/whatsapp';

const contacts = [
  { label: 'Kenya (Call / WhatsApp)', value: '+254 723 590 884', href: getWhatsAppOrderLink() },
  { label: 'Dubai (Call / WhatsApp)', value: '+971 585 590 884', href: getWhatsAppOrderLink(undefined, DUBAI_WHATSAPP_NUMBER) },
  { label: 'Dubai (Robert)', value: '+971 556 150 206', href: 'tel:+971556150206' },
];

const social = [
  { label: 'Facebook', handle: "Tucha's Auto Spares And Outsourcing", href: 'https://www.facebook.com/tuchas.autoparts' },
  { label: 'Facebook', handle: "Tucha's Autoparts", href: 'https://www.facebook.com/tuchas.autoparts' },
  { label: 'Instagram', handle: '@_tuchas_autospares', href: 'https://instagram.com/_tuchas_autospares' },
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
            href={getWhatsAppOrderLink()}
            className="btn btn-primary cta-btn"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => { e.preventDefault(); openWhatsApp(); }}
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
                <a
                  key={c.value}
                  href={c.href}
                  className="contact-item"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    // if it's a whatsapp link, track it
                    if (c.href && c.href.includes('wa.me')) {
                      e.preventDefault();
                      // choose phone if provided
                      if (c.value && c.value.includes('+971')) {
                        openWhatsApp(undefined, DUBAI_WHATSAPP_NUMBER);
                      } else {
                        openWhatsApp();
                      }
                    }
                  }}
                >
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
              <span className="pay-tag">Bank Transfer</span>
              <span className="pay-tag">Paybill</span>
            </div>
            <p className="pay-note">
              Kenyan customers can pay via bank transfer or Paybill.
            </p>
          </div>
        </div>
        {/* Map embed for Local SEO */}
        <div className="contact-map" aria-hidden="false">
          <iframe
            title="Tuchas Auto Spares location"
            src="https://www.google.com/maps?q=-1.286389,36.817223&z=15&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
