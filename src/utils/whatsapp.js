import { trackEvent } from './analytics';

const KENYA_WHATSAPP_NUMBER = '254723590884';
const DUBAI_WHATSAPP_NUMBER = '971585590884';

export const WHATSAPP_ORDER_MESSAGE = [
  "Hi Tucha's Autoparts, I’d like to place an order.",
  'Part needed:',
  'Car make/model/year:',
  'Location:',
  'I can also share an image of the part if needed.',
].join('\n');

export function getWhatsAppOrderLink(message = WHATSAPP_ORDER_MESSAGE, phoneNumber = KENYA_WHATSAPP_NUMBER) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message = WHATSAPP_ORDER_MESSAGE, phoneNumber = KENYA_WHATSAPP_NUMBER) {
  trackEvent('whatsapp_click', { phone: phoneNumber });
  const url = getWhatsAppOrderLink(message, phoneNumber);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    return url;
  }
}

export { KENYA_WHATSAPP_NUMBER, DUBAI_WHATSAPP_NUMBER };
