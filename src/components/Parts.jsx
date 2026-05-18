import React from 'react';
import './Parts.css';

const categories = [
  {
    num: '01',
    title: 'Engine & Drivetrain',
    items: ['Complete engines', 'Gearboxes', 'Shock absorbers', 'Transmission parts'],
    tag: 'High-demand',
  },
  {
    num: '02',
    title: 'Body & Exterior',
    items: ['Bumpers & fenders', 'Nose cuts', 'Half cuts', 'Full body units', 'Chassis parts'],
    tag: 'All makes',
  },
  {
    num: '03',
    title: 'Lights & Optics',
    items: ['Headlights', 'Tail lights', 'Signal lights', 'DRL assemblies'],
    tag: 'OEM quality',
  },
  {
    num: '04',
    title: 'Wheels & Tyres',
    items: ['Alloy rims', 'Steel rims', 'Hub caps', 'Lug nuts'],
    tag: 'All sizes',
  },
  {
    num: '05',
    title: 'Electronics & Accessories',
    items: ['ECU units', 'Sensors', 'Side mirrors', 'Interior accessories'],
    tag: 'Genuine',
  },
  {
    num: '06',
    title: 'Rare & Hard to Find',
    items: ['Luxury brands', 'European makes', 'American cars', 'Special order'],
    tag: 'We source it',
  },
];

const brands = ['Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Range Rover', 'Toyota', 'Jeep', 'Chrysler', 'Mitsubishi', 'Lexus'];

export default function Parts() {
  return (
    <section className="parts section-gap" id="parts">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Supply</span>
          <h2 className="section-title">
            Every Part.<br />
            <span className="font-serif italic">Every Brand.</span>
          </h2>
          <p className="section-desc">
            We stock and source a comprehensive range of genuine auto parts — from full engines to body panels —
            shipped from the UAE's largest salvage and wholesale markets.
          </p>
        </div>

        <div className="parts-grid">
          {categories.map(cat => (
            <article key={cat.num} className="part-card">
              <div className="card-header">
                <span className="card-num">{cat.num}</span>
                <span className="card-tag">{cat.tag}</span>
              </div>
              <h3 className="card-title">{cat.title}</h3>
              <ul className="card-list">
                {cat.items.map(item => (
                  <li key={item}><span className="list-dash">—</span> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="brands-row">
          <p className="brands-label">Brands we cover</p>
          <div className="brands-list">
            {brands.map(b => (
              <span key={b} className="brand-pill">{b}</span>
            ))}
            <span className="brand-pill brand-more">+ Many More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
