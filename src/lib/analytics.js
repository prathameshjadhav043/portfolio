const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

export function initAnalytics() {
  if (!MEASUREMENT_ID || initialized || typeof window === 'undefined') {
    return;
  }

  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(path = window.location.pathname + window.location.hash) {
  if (!MEASUREMENT_ID) return;

  window.gtag?.('event', 'page_view', {
    page_path: path,
  });
}

export function trackEvent(name, properties = {}) {
  if (!MEASUREMENT_ID) return;

  window.gtag?.('event', name, properties);
}
