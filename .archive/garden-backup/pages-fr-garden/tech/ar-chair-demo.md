---
layout: ../../../../layouts/GardenNote.astro
title: La réalité augmentée (RA) dans une expérience consommateur (iOS uniquement)
description: J’ai créé un faux site de meubles pour intégrer une expérience en RA, permettant aux utilisateurs de visualiser des modèles 3D de meubles chez eux.
lastModified: 2025-02-20
topics:
  - Technologie
  - Expérience utilisateur
  - Réalité étendue
connections:
  - title: J’ai réalisé mon premier projet de réalité augmentée (basique), et c’était fun !
    url: /fr/garden/tech/ar-book-demo
featured: true
---

**Démo disponible sur [obliq.johannasneed.com](https://obliq.johannasneed.com) ou en vidéo ci-dessous**  

## Limitations & réflexions pour la suite  
Cette expérience en RA fonctionne uniquement sur les appareils mobiles et tablettes Apple. Vous pouvez visiter le site sur d’autres appareils, mais la fonctionnalité RA ne sera pas disponible. Pour améliorer la compatibilité multiplateforme, je devrais explorer des alternatives comme `<model-viewer>` ou WebXR. Si je continue à peaufiner ce projet, ces options seront à tester.

## Défis et processus  

Le plus gros défi de ce projet a été la conception et le développement du site factice, puisqu'il allait être partagé publiquement. En analysant l'implémentation d’Apple, j’ai découvert que leur intégration RA repose sur l’attribut `rel="AR"` dans les liens vers les modèles USDZ.  

Pour construire mon expérience :  
- J’ai créé la scène RA avec Reality Composer → [Post sur mon projet RA](./ar-book-demo)  
- J’ai récupéré l’objet 3D sur Sketchfab  
- J’ai utilisé la recherche d’images inversée pour trouver des visuels plus adaptés au projet  

Ce projet a été une super exploration de la RA dans l’e-commerce, et j’ai hâte de l’améliorer encore !  

<div style="padding-bottom: 100%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/NGyW8jKkYMA?autoplay=1&loop=1&modestbranding=1&mute=1&playlist=NGyW8jKkYMA&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: auto; height: 70vh;"><small>Propulsé par <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a></small></iframe></div>
