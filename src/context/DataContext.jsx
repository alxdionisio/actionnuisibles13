import React, { createContext, useContext, useState, useEffect } from 'react';
import { articles as staticArticles } from '../data/articles';
import { services as staticServices } from '../data/services';
import { faqItems as staticFaq } from '../data/faq';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [articles, setArticles] = useState(staticArticles);
  const [services, setServices] = useState(staticServices);
  const [faqItems, setFaqItems] = useState(staticFaq);

  useEffect(() => {
    // Le site public est servi par GitHub Pages, qui n'expose aucune route /api :
    // ces trois appels y répondaient 404 à chaque chargement, sur les 61 pages.
    // Le repli sur les données statiques étant silencieux, le défaut ne se voyait
    // que dans la console — et coûtait des points en bonnes pratiques Lighthouse.
    // En développement, le proxy Vite les transmet au serveur d'administration.
    if (!import.meta.env.DEV) return;

    Promise.all([
      fetch('/api/articles').then(r => r.ok ? r.json() : null).catch(() => null),
      fetch('/api/services').then(r => r.ok ? r.json() : null).catch(() => null),
      fetch('/api/faq').then(r => r.ok ? r.json() : null).catch(() => null),
    ]).then(([arts, svcs, faq]) => {
      if (arts) setArticles(arts);
      if (svcs) setServices(svcs);
      if (faq) setFaqItems(faq);
    });
  }, []);

  return (
    <DataContext.Provider value={{ articles, services, faqItems }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
