---
layout: "../../../../layouts/GardenNote.astro"
title: "Mon premier projet de réalité augmentée... cool!"
description: "J'ai exploré la RA et trouvé un cas d'utilisation accessible pour débutants."
lastModified: "2025-02-17"
topics:
  - Technologie
  - User Experience
  - Extended Reality
connections:
  - title: "Intégration d'un projet RA (iOS) dans une expérience consommateur"
    url: "/fr/garden/tech/ar-chair-demo"
  - title: "Mes favoris"
    url: "/fr/garden/miscellaneous/bookmarks"
---
<video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="300px"
    height="450px"
    fluid="vjs-16-9"
    poster="/images/garden/ar-demo-book-cover.jpg"
    data-setup="{}">
    <source src="/images/garden/ar-book-demo.mov" type="video/mp4" />
    <source src="MY_VIDEO.webm" type="video/webm" />
    </p>
  </video>

J’ai testé la RA et trouvé un cas d’utilisation super accessible pour débutants...

J'me suis laissé embarquer dans un trip RA un peu par hasard. Étonnamment, j’ai eu des résultats super vite. En environ cinq heures, j’ai bouclé ce projet et un [projet de site web pour des meubles](./ar-chair-demo).  

Ce n’est _techniquement_ pas un tuto, juste une note de jardin pour documenter mon processus. Je ne suis pas expert en RA, mais j’ai déjà un peu d’expérience en modélisation 3D avec Blender.

_(Petite info : Cette approche fonctionne uniquement sur un appareil Apple, mobile ou tablette.)_

## Rassembler des ressources
J’ai fouillé un peu partout pour trouver des sites et ressources sur la RA, la VR et la 3D. Voici quelques liens utiles :
<iframe style="border: 0; width: 100%; height: 450px; margin-bottom:2rem;" allowfullscreen frameborder="0" src="https://raindrop.io/savedbyjo/extended-reality-xr-tools-and-resources-52630885/embed/theme=light"></iframe>

## Choisir la bonne techno
Comme j’étais totalement novice en XR, j’ai voulu garder ça simple. Je suis parti sur les outils ARKit d’Apple :  
- **Reality Composer**  
- **Reality Composer Pro**  
- **Reality Converter**  

J’ai trouvé des tutos bien foutus qui m’ont aidé à piger les bases de la RA et à manipuler des environnements 3D. Un énorme avantage avec les outils Apple, c’est que je pouvais modifier et tester mes projets directement depuis mon iPhone ou iPad. Le seul hic ? Les fichiers sont optimisés pour l’écosystème Apple (format `.reality`). En exportant en USDZ, c’est plus polyvalent, mais la qualité en prend un coup.

## Créer ma première scène en RA
Je voulais tester **l’ancrage d’image**, un truc qui permet d’associer une image à un objet réel et de déclencher des interactions en RA. J’avais vu ça pour annoter des livres.

### Trouver un objet
J’ai chopé un bouquin et pris une photo, puis je l’ai recadrée bien proprement. Il faut une photo bien droite, sans ombres ni reflets (ce que, soyons honnêtes, j’ai moyennement réussi ici).

<img src="/images/garden/odd-birds.png" alt="Le livre Odd Birds de Ian Harding" style="width:30%;">

### Créer les éléments en RA
Reality Composer permet d’ajouter des éléments directement dans son interface ou d’importer des images. J’ai opté pour l’import, ce qui impliquait d’utiliser un iPad en mode écran partagé. Pour ce projet, j’ai préparé une courte critique du livre dans Figma.  

Résultat final : mon image était un poil de travers. Si j’avais repris la photo avec un meilleur cadrage, ça aurait été plus propre.  

<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/gtU4tXD2W3M?modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Propulsé par <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a></small></iframe></div>

### Ajouter des interactions
Là, ça devient VRAIMENT fun.  

Les interactions définissent comment les éléments en RA réagissent. J’ai configuré mon projet comme ça :  
1. Le titre du livre apparaît dès le début.  
2. La critique reste cachée.  
3. Un tap sur le titre révèle la critique.  

<div style="padding-bottom: 56.25%;margin-bottom:3rem;position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/49Lkm6s5qFI??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Propulsé par <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a></small></iframe></div>

## Le résultat final
Ce n’était pas parfait, mais l’important, c’était d’expérimenter.  

<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/_dFfCWhQ1PY??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; padding-bottom: 4rem;"><small>Propulsé par <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a></small></iframe></div>

## Ce que j’ai retenu
- **L’alignement de l’image est crucial.** Mon image était un peu de travers, et ça se voyait en RA.  
- **La transparence a ses bizarreries.** Les fichiers `.reality` gèrent bien les PNG transparents, mais en exportant en USDZ, tout devient opaque.  
- **Les délais d’apparition doivent être réglés sur zéro.** Sinon, les éléments s’affichent dès le début de la scène.  
- **L’éclairage, c’est un vrai sujet.** Il faudrait que j’explore Reality Composer Pro pour améliorer ça.  
- **J’ai grave kiffé !**  

Bref, une super introduction à la RA, et j’ai bien envie d’aller plus loin.  