import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CookieConsentProvider, useCookieConsent } from './context/CookieConsent';
import { loadGoogleAnalytics } from './utils/tracking';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import VillePage from './pages/VillePage';
import ThematiquePage from './pages/ThematiquePage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '');
      const scrollToEl = () => {
        const el = id && document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };
      if (scrollToEl()) return;
      const t = setTimeout(() => { scrollToEl(); }, 100);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function GoogleAnalyticsLoader() {
  const { consent } = useCookieConsent();
  useEffect(() => {
    if (consent === 'full' || consent === 'analytics') loadGoogleAnalytics();
  }, [consent]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CookieConsentProvider>
        <GoogleAnalyticsLoader />
        <ScrollToTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/intervention/:slug" element={<VillePage />} />
            <Route path="/thematique/:slug" element={<ThematiquePage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
        <CookieBanner />
      </CookieConsentProvider>
    </BrowserRouter>
  );
}

export default App;
