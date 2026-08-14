# Portfolio — Kesse Gondo Firmin

Portfolio personnel React + Vite + Tailwind CSS.
Administrateur Réseaux & Systèmes — Abidjan, Côte d'Ivoire.

## Démarrage

Il faut avoir [Node.js](https://nodejs.org) installé (version 18 ou plus).

```bash
npm install     # installe les dépendances (une seule fois)
npm run dev     # lance le site en local → http://localhost:5173
```

## Mise en ligne

```bash
npm run build   # génère le dossier dist/
```

Ensuite, publie gratuitement :

- **Netlify** — va sur [app.netlify.com/drop](https://app.netlify.com/drop) et glisse-dépose le dossier `dist/`
- **Vercel** — `npx vercel --prod` depuis ce dossier
- **GitHub Pages** — pousse le contenu de `dist/` sur la branche `gh-pages`

## Modifier le contenu

Tout le texte est centralisé dans **`src/data.js`** :

| Variable | Contenu |
|---|---|
| `profile` | Nom, rôle, contact, liens LinkedIn/portfolio, texte "À propos" |
| `stats` | Les 4 chiffres clés affichés sous l'accueil |
| `skills` | Catégories de compétences techniques |
| `experience` | Postes occupés, missions, technologies |
| `projects` | Projets techniques (contexte, actions, résultats) |
| `education` | Diplômes |
| `certifications` | Certifications |
| `languages` / `interests` | Langues et centres d'intérêt |

Pas besoin de toucher aux composants pour mettre à jour le contenu.

## Remplacer la photo ou le CV

- Photo : remplace `public/photo.png` (format carré recommandé)
- CV : remplace `public/CV_Kesse_Gondo_Firmin.pdf`

## Structure

```
portfolio/
├─ public/          photo.png, CV PDF
├─ src/
│  ├─ data.js       ← tout le contenu éditable
│  ├─ App.jsx
│  ├─ index.css
│  └─ components/   Nav, Hero, About, Skills, Experience,
│                   Projects, Education, Contact, Footer, Icons, Reveal
├─ index.html
├─ tailwind.config.js
└─ vite.config.js
```
