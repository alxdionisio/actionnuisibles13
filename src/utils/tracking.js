/**
 * Tracking des événements. N’envoie des données que si le consentement
 * cookies (analytics) a été donné. Google Analytics (gtag.js) est chargé
 * uniquement après acceptation.
 */
const CONSENT_KEY = 'cookie_consent';
const GA_MEASUREMENT_ID = 'G-74DSTL94HD';

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'full' || v === 'analytics';
  } catch {
    return false;
  }
}

export function getConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

let gaLoaded = false;

/**
 * Charge Google Analytics (gtag.js) et initialise avec l’ID de mesure.
 * À appeler uniquement lorsque le consentement a été donné.
 */
export function loadGoogleAnalytics() {
  if (typeof window === 'undefined' || !hasAnalyticsConsent() || gaLoaded) return;
  gaLoaded = true;
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  } catch (e) {
    if (import.meta.env.DEV) console.warn('[Tracking] loadGoogleAnalytics', e);
    gaLoaded = false;
  }
}

/**
 * Enregistre un événement si le consentement est donné.
 */
export function track(eventName, payload = {}) {
  if (!hasAnalyticsConsent()) return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }
    if (import.meta.env.DEV) {
      console.debug('[Tracking]', eventName, payload);
    }
  } catch (e) {
    if (import.meta.env.DEV) console.warn('[Tracking]', e);
  }
}
