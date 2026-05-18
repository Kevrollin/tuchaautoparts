import React from 'react';
import './Ticker.css';

const items = [
  'Engines', 'Gearboxes', 'Body Panels', 'Headlights', 'Tail Lights',
  'Rims & Tyres', 'Bumpers', 'Fenders', 'Side Mirrors', 'Shocks',
  'Nose Cuts', 'Half Cuts', 'Full Body', 'Electronics', 'Signal Lights',
  'Chassis Parts', 'Mercedes', 'BMW', 'Audi', 'Porsche', 'Range Rover',
  'Toyota', 'Jeep', 'G-Wagon',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span className="ticker-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
