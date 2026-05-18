import React from 'react';
import './Blog.css';

const posts = [
  {
    slug: 'how-to-identify-genuine-spare-parts-kenya',
    title: 'How to Identify Genuine Spare Parts in Kenya',
    category: 'Spare Part Guides',
    excerpt: 'Learn practical checks to avoid counterfeit parts and protect your vehicle performance.',
  },
  {
    slug: 'best-toyota-spare-parts-shop-nairobi',
    title: 'Best Toyota Spare Parts Shop in Nairobi',
    category: 'Buying Guides',
    excerpt: 'What to verify before buying Toyota parts and how Tuchas sources quality parts from UAE markets.',
  },
  {
    slug: 'signs-your-brake-pads-need-replacement',
    title: 'Signs Your Brake Pads Need Replacement',
    category: 'Car Maintenance',
    excerpt: 'Key signs, replacement intervals, and why brake quality matters for safety on Kenyan roads.',
  },
];

export default function Blog() {
  return (
    <section className="blog section-gap" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Knowledge Hub</span>
          <h2 className="section-title">
            Auto Parts &amp; Maintenance
            <br />
            <span className="font-serif italic">Guides for Kenya</span>
          </h2>
          <p className="section-desc">
            Helpful content to support smarter buying decisions for car spare parts in Nairobi and across Kenya.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="blog-category">{post.category}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#contact" className="blog-link">Get This Part via WhatsApp →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
