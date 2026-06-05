<<<<<<< HEAD
# 📚 Application de Bibliothèque — React + TypeScript (Documentation)

##  Introduction

Ce projet est une application web frontend développée avec **React, TypeScript et Vite**.

Elle simule une interface de bibliothèque numérique connectée à des API externes :
- 📚 Open Library API (données des livres)
-  API Wikipédia (informations complémentaires)

###  Objectifs du projet

L’application permet à l’utilisateur de :
- Rechercher des livres
- Consulter des informations détaillées
- Accéder à des données enrichies via Wikipédia
- Utiliser une recherche avancée avec filtres

Le projet met l’accent sur :
- Une architecture propre et structurée
- La réutilisation de composants
- L’intégration d’API externes
- Une interface responsive
- Des tests basiques

---

#  Architecture du projet

Le projet suit une architecture frontend en couches :
Couche UI (Composants React)

Pages (Vues principales)

Services (Appels API)

APIs externes (Open Library / Wikipédia)

---

#  Fonctionnalités

---

## 1 Recherche rapide (Search globale)

###  Description
Une barre de recherche disponible sur toutes les pages via la Navbar.

### Fonctionnement
- L’utilisateur saisit un mot-clé
- Requête envoyée à Open Library : https://openlibrary.org/search.json?q={query}
- 

###  Résultats affichés :
- Titre du livre
- Auteur(s)
- Image de couverture
- Lien vers la page détail

---

##  2. Recherche avancée

###  Description
Une page dédiée permettant des recherches plus précises.

###  Filtres disponibles :
- Titre
- Auteur
- Année de publication
- Sujet / catégorie

###  Exemple de requête :
https://openlibrary.org/search.json?title=harry&author=rowling

###  Résultats :
Affichage sous forme de cartes responsives contenant :
- Couverture
- Titre
- Auteur
- Lien vers les détails

---

##  3. Page de détails d’un livre

###  Description
Cette page affiche toutes les informations d’un livre sélectionné.

###  Données Open Library :

###  Informations affichées :
- Titre du livre
- Image de couverture
- Description
- Date de création
- Dernière modification

---

## 4. Intégration Wikipédia

###  Description
Chaque livre est enrichi avec des données provenant de Wikipédia.

### API utilisée :
https://en.wikipedia.org/api/rest_v1/page/summary/{title}

###  Données affichées :
- Résumé du livre
- Image miniature
- Lien vers l’article Wikipédia

###  Objectif :
- Ajouter du contexte au livre
- Améliorer l’expérience utilisateur
- Fournir une source externe fiable

---

##  5. Page d’accueil (modifications récentes)

###  Description
La page d’accueil affiche les dernières modifications de la bibliothèque Open Library.

###  API utilisée :

###  Données affichées :
- Type de changement
- Date / heure
- Auteur

---

#  Responsive Design

L’application est entièrement responsive grâce à :
- CSS Grid
- Flexbox
- Layout adaptatif

###  Compatibilité :
- Ordinateur 
- Tablette 
- Mobile 

---

# Couche Services

##  bookService.ts
Gère les appels API Open Library :
- Recherche de livres
- Détails d’un livre
- Modifications récentes

##  wikipediaService.ts
Gère les appels API Wikipédia :
- Résumé d’un livre
- Image miniature
- Lien vers article complet

---

#  Tests

##  Outils utilisés
- Vitest
- Testing Library
- JSDOM

##  Tests réalisés :

###  SearchBar
- Vérifie l’affichage du champ de recherche
- Vérifie la présence du bouton

###  BookDetailsPage
- Vérifie l’affichage de la page
- Utilise des données simulées (mock)

## ▶ Lancer les tests :

```bash
npm run test
=======
# library-app
>>>>>>> 3bf239cb6a13395e2c80111288ebd2f3ea900f36
