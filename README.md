# Action Nuisibles 13

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite** - Build tool ultra-rapide
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Fonctionnalités modernes

## 📋 Prérequis

- Node.js version 16 ou supérieure
- npm ou yarn

## 🔧 Installation

1. Clonez ou téléchargez ce projet

2. Installez les dépendances :
```bash
npm install
```

## 🎯 Lancement du projet

### Mode développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 🌐 Déploiement sur Netlify (drag & drop)

1. Générer le build : `npm run build`
2. **Déployer uniquement le dossier `dist`** (pas la racine du projet).
   - Si vous déposez la racine au lieu de `dist`, le site affiche un **écran blanc** (l’index de dev pointe vers `/src/main.jsx`, absent sur le serveur).
3. Sur [app.netlify.com](https://app.netlify.com), glisser-déposer le dossier **`dist`** dans « Deploy manually ».

Le fichier `public/_redirects` est copié dans `dist` au build (`/* /index.html 200`) pour que les routes SPA fonctionnent.

## 🚀 Déploiement sur GitHub Pages (CI/CD)

Le dépôt est configuré pour déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### Configuration initiale (une seule fois)

1. **Pousser le code sur GitHub**  
   Créez un dépôt sur GitHub (ex. `actionnuisibles13`), puis :
   ```bash
   git remote add origin https://github.com/<votre-username>/<nom-du-repo>.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**  
   Dans le dépôt : **Settings → Pages**  
   - **Source** : choisir **GitHub Actions** (et non « Deploy from a branch »).

Après le premier push sur `main`, le workflow `.github/workflows/deploy-pages.yml` s’exécute : build du site puis déploiement. Le site sera en ligne à l’adresse :
**`https://<votre-username>.github.io/<nom-du-repo>/`**

### Fonctionnement

- Chaque **push sur `main`** déclenche un build et un déploiement.
- Le base path est défini automatiquement à `/<nom-du-repo>/` pour que les assets et le routage fonctionnent.
- Une copie de `index.html` en `404.html` permet au SPA de gérer les routes directes (ex. `/contact`).

## 📁 Structure du projet

```
action-nuisibles-13/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # Point d'entrée
│   ├── App.jsx               # Composant principal
│   ├── index.css             # Styles globaux
│   └── components/
│       ├── Header.jsx        # En-tête et navigation
│       ├── Hero.jsx          # Section hero principale
│       ├── Services.jsx      # Grille de services
│       ├── Stats.jsx         # Statistiques
│       ├── About.jsx         # Section à propos
│       ├── Testimonials.jsx  # Témoignages clients
│       ├── ProofSection.jsx  # Preuve sociale
│       ├── FAQ.jsx           # Questions fréquentes
│       ├── Contact.jsx       # Formulaire de contact
│       ├── Blog.jsx          # Articles de blog
│       └── Footer.jsx        # Pied de page
```

## 🎨 Fonctionnalités implémentées

✅ Design system complet avec variables CSS
✅ Navigation responsive avec menu mobile
✅ Section Hero avec badge de notation
✅ Grille de services avec cartes interactives
✅ Section statistiques
✅ Section À propos avec features
✅ Slider de témoignages
✅ FAQ avec accordéon interactif
✅ Formulaire de contact fonctionnel
✅ Section blog avec articles
✅ Footer complet
✅ Animations et transitions fluides
✅ Responsive design (mobile, tablette, desktop)
✅ Effets hover sur tous les éléments interactifs

## 🎯 Sections du site

1. **Header** - Navigation fixe avec barre de contact
2. **Hero** - Section principale avec CTA et badge de notation
3. **Features** - 3 cartes de fonctionnalités clés
4. **Services** - Grille de 3 services avec images
5. **Stats** - 4 statistiques importantes
6. **About** - Présentation avec 6 avantages
7. **Testimonials** - Slider de 6 témoignages clients
8. **Proof** - Section de preuve sociale
9. **FAQ** - 5 questions fréquentes
10. **Contact** - Informations et formulaire
11. **Blog** - 3 derniers articles
12. **Footer** - Footer complet avec CTA

## 🎨 Design System

### Couleurs principales
- Primary: `#10b981` (vert)
- Primary Dark: `#059669`
- Text Dark: `#1f2937`
- Text Gray: `#6b7280`
- Background: `#f9fafb`

### Typographie
- Famille: System fonts (Apple, Segoe UI, Roboto)
- Tailles: Responsive avec rem

### Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints optimisés pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔗 Navigation

Toutes les sections sont accessibles via :
- Menu de navigation
- Liens dans le footer
- Boutons CTA

## 📝 Notes

- Les images sont chargées depuis les CDN originaux (framerusercontent.com)
- Le formulaire de contact affiche une alerte au lieu d'envoyer réellement
- Tous les liens téléphoniques et emails sont fonctionnels
- Le site est optimisé pour les performances

## 🚀 Améliorations possibles

- Ajouter un vrai backend pour le formulaire de contact
- Implémenter le routing avec React Router pour les pages
- Ajouter des animations plus complexes
- Intégrer Google Maps pour la localisation
- Ajouter un système de réservation en ligne


---

Créé avec ❤️ en React + Vite
