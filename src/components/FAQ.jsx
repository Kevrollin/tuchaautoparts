import React from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do you sell genuine car spare parts in Kenya?',
    a: 'Yes. Tuchas Auto Spares focuses on genuine and verified parts sourced from trusted UAE suppliers.',
  },
  {
    q: 'Can you source hard-to-find parts for Toyota and Nissan?',
    a: 'Yes. We source Toyota, Nissan, Mercedes, BMW, and other brands, including rare and special-order parts.',
  },
  {
    q: 'How long does delivery from Dubai to Kenya take?',
    a: 'Delivery timelines vary by part size and customs processing. We provide updates after order confirmation.',
  },
  {
    q: 'How do I place an order?',
    a: 'Send your part details on WhatsApp with car make/model/year and location. We confirm availability and pricing.',
  },
];

export default function FAQ() {
  return (
    <section className="faq section-gap" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 className="section-title">Quick Answers for Buyers in Kenya</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
