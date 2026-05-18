import { useEffect } from 'react';

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.head.querySelector(`${selector}[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement(selector);
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

export default function SEO({
  title = 'Tuchas Auto Spares | Genuine Auto Parts in Kenya',
  description = 'Tuchas Auto Spares offers quality genuine car spare parts in Kenya at affordable prices. Fast delivery, trusted automotive solutions, and professional customer support.',
  keywords = 'auto spares Kenya, car spare parts Nairobi, genuine spare parts, Toyota parts Kenya, Nissan parts Kenya, automotive shop Kenya, Tuchas Auto Spares',
  canonical = 'https://tuchasautospares.com/',
  ogImage = '/og-image.jpg',
  url = 'https://tuchasautospares.com/',
  jsonLd = null,
}) {
  useEffect(() => {
    if (title) document.title = title;

    upsertMeta('meta', 'name', 'description', description);
    upsertMeta('meta', 'name', 'keywords', keywords);
    upsertMeta('meta', 'name', 'author', 'Kelvin Mukaria');
    upsertMeta('meta', 'name', 'robots', 'index, follow');

    upsertMeta('meta', 'property', 'og:title', title);
    upsertMeta('meta', 'property', 'og:description', description);
    upsertMeta('meta', 'property', 'og:image', ogImage);
    upsertMeta('meta', 'property', 'og:url', url);
    upsertMeta('meta', 'property', 'og:site_name', 'Tuchas Auto Spares');

    upsertMeta('meta', 'name', 'twitter:title', title);
    upsertMeta('meta', 'name', 'twitter:description', description);
    upsertMeta('meta', 'name', 'twitter:image', ogImage);

    upsertLink('canonical', canonical);

    // Organization + LocalBusiness + Website + Breadcrumb + FAQ + SearchAction + Product ItemList
    const org = {
      '@context': 'https://schema.org',
      '@type': 'AutoPartsStore',
      name: "Tuchas Auto Spares",
      url: 'https://tuchasautospares.com',
      logo: 'https://tuchasautospares.com/logo.png',
      sameAs: [
        'https://facebook.com/tuchas.autoparts',
        'https://instagram.com/_tuchas_autospares',
        'https://kelvinmukaria.vercel.app',
      ],
      founder: {
        '@type': 'Person',
        name: 'Kelvin Mukaria',
        url: 'https://kelvinmukaria.vercel.app',
      },
    };

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: "Tuchas Auto Spares",
      telephone: '+254723590884',
      email: 'tuchas_autoparts@outlook.com',
      openingHours: 'Mo-Sa 08:00-18:00',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+254723590884',
          contactType: 'customer service',
          areaServed: 'KE',
          availableLanguage: ['English', 'Swahili'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nairobi',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi County',
        addressCountry: 'KE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.286389,
        longitude: 36.817223,
      },
      sameAs: org.sameAs,
      url: org.url,
    };

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Tuchas Auto Spares',
      url: 'https://tuchasautospares.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://tuchasautospares.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };

    const webPage = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      inLanguage: 'en-KE',
      about: {
        '@type': 'Thing',
        name: 'Auto spare parts in Kenya',
      },
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tuchasautospares.com/' },
        { '@type': 'ListItem', position: 2, name: 'Parts', item: 'https://tuchasautospares.com/#parts' },
        { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://tuchasautospares.com/#blog' },
        { '@type': 'ListItem', position: 4, name: 'How It Works', item: 'https://tuchasautospares.com/#how' },
        { '@type': 'ListItem', position: 5, name: 'Why Us', item: 'https://tuchasautospares.com/#why' },
        { '@type': 'ListItem', position: 6, name: 'FAQ', item: 'https://tuchasautospares.com/#faq' },
        { '@type': 'ListItem', position: 7, name: 'Contact', item: 'https://tuchasautospares.com/#contact' },
      ],
    };

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you deliver to Kenya from Dubai?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — we ship parts from the UAE to Kenya and handle customs and delivery.' },
        },
        {
          '@type': 'Question',
          name: 'How do I place an order?',
          acceptedAnswer: { '@type': 'Answer', text: 'Send part details via WhatsApp or use the contact form. We will confirm availability and pricing.' },
        },
      ],
    };

    // Build Product ItemList from site visible categories (fallback if no products)
    const productList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Parts Categories',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Engine & Drivetrain', url: 'https://tuchasautospares.com/#parts' },
        { '@type': 'ListItem', position: 2, name: 'Body & Exterior', url: 'https://tuchasautospares.com/#parts' },
        { '@type': 'ListItem', position: 3, name: 'Lights & Optics', url: 'https://tuchasautospares.com/#parts' },
      ],
    };

    const schemas = [org, localBusiness, website, webPage, breadcrumb, faq, productList];

    const scriptId = 'seo-json-ld';
    let script = document.head.querySelector(`#${scriptId}`);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(jsonLd || schemas);

    return () => {};
  }, [title, description, keywords, canonical, ogImage, url, jsonLd]);

  return null;
}
