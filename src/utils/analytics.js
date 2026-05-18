export function trackEvent(eventName, payload = {}) {
  try {
    if (typeof window !== 'undefined') {
      if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...payload });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload);
      }
    }
  } catch (e) {
    // no-op in environments without analytics
  }
}
