import React, { createContext, useContext, useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie_consent';

const CookieConsentContext = createContext({
  consent: null,
  setConsent: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }) {
  const [consent, setConsentState] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setConsentState(stored || null);
    if (!stored) setBannerVisible(true);
  }, []);

  const setConsent = (value) => {
    if (value) localStorage.setItem(CONSENT_KEY, value);
    else localStorage.removeItem(CONSENT_KEY);
    setConsentState(value);
    setBannerVisible(false);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent, bannerVisible, setBannerVisible }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
