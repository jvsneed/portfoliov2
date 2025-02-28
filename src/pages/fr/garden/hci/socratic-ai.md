---
layout: ../../../../layouts/GardenNote.astro
title: "SocraticAI pour l'interaction entre agents"
description: "Réflexions sur un article intéressant sur l'utilisation de la méthode socratique pour l'interaction entre agents IA"
growth: "evergreen"
lastModified: "2025-02-27"
topics: ["interaction homme-machine", "agents IA", "éthique"]
connections:
  # - { title: "Composants des systèmes de design", url: "/garden/ux/design-system-components" }
  # - { title: "Guide du contraste des couleurs", url: "/garden/design/color-contrast" }
  # - { title: "Principes du design inclusif", url: "/garden/design/inclusive-design-principles" }
featured: true
---

Il y a quelques mois, une connaissance a partagé cet article sur BlueSky : [AI as Extraherics: Fostering Higher-order Thinking Skills in Human-AI Interaction](https://arxiv.org/html/2409.09218v2). C'est déjà une lecture intéressante en soi, mais il fait écho au concept de **Socratic AI**, qui applique une approche similaire pour aider les agents IA à converger vers la meilleure solution. En gros, il s'agit de prendre l'idée d'**extraherics** et de l'appliquer **entre** agents IA. L'ajout du contexte humain et du développement cognitif dans cette approche était particulièrement intéressant, et j’écrirai plus en détail sur ce que j’ai appris dans une prochaine note.

Lien vers l’article : [The Socratic Method for Self-Discovery in Large Language Models](https://princeton-nlp.github.io/SocraticAI/)

Voici mes réflexions sur l’utilisation de la méthode socratique dans la prise de décision entre IA.

## Résumé  
Les modèles de langage (LLMs) peuvent être améliorés en faisant travailler plusieurs agents IA ensemble sur une tâche, plutôt que de s’appuyer sur une simple requête donnée à un seul modèle. Dans l’article, les agents prennent des rôles distincts (comme "analyste" ou "relecteur") afin de tirer parti de leurs forces respectives et d’agir comme une équipe.

L’idée centrale s’inspire de la **méthode socratique**, que les cours d’introduction à la philosophie oublient souvent de préciser qu’elle peut être perçue comme agressive par des esprits fermés. Mais le but ici est d’amener les LLMs à une pensée plus analytique.  

Les stratégies classiques comme **Chain-of-Thought (CoT)** ou **ReAct** ont déjà amélioré le raisonnement des LLMs en les forçant à expliquer leurs étapes. Mais ces approches restent figées.  

À l’inverse, une approche socratique encourage un questionnement libre : plusieurs LLMs se posent des questions, remettent en cause leurs réponses et développent leurs idées dans un dialogue ouvert.

Ce changement repense complètement le concept de "prompting", en s’éloignant des instructions rigides pour aller vers des **conversations autonomes entre agents**. Les premières expériences des auteurs montrent que les LLMs peuvent dialoguer de manière autonome et "auto-découvrir" des connaissances en élargissant leur perspective à travers des échanges itératifs.

## Limites et défis  
Analyser les limites, c'est la meilleure façon d'améliorer un système. Voici ce que j’ai retenu de l’article.  

**Amplification des erreurs et biais**  
Si un agent partage une fausse hypothèse, les autres peuvent la valider et la renforcer, ce qui fausse tout le raisonnement. Les auteurs soulignent que sans modération, le dialogue multi-agents peut accroître la désinformation.  

Un exemple concret a été observé lorsque les agents SocraticAI ont tous validé à tort que 71 est un nombre premier. Sans intervention extérieure, l’échange aurait continué sur une mauvaise base.  

**Coordination complexe et surcharge cognitive**  
Gérer plusieurs agents signifie suivre l’état du dialogue, organiser les tours de parole et intégrer des outils externes (exécution de code, requêtes API). Cela ajoute des points de défaillance :  
- Les agents peuvent se perdre dans la conversation  
- Le dialogue peut stagner si aucun agent n’a une nouvelle idée  
- Il y a un coût computationnel important à exécuter plusieurs modèles en parallèle ou en séquence  

**Contrainte de longueur de contexte**  
Comme observé dans la démonstration sur le cerveau de mouche, les dialogues longs peuvent dépasser les limites de contexte des modèles actuels, mettant fin à la session trop tôt.  

En résumé, malgré ses avantages, la méthode SocraticAI doit encore surmonter des défis liés à la propagation des erreurs, la gestion des ressources et la complexité architecturale.

## Autres applications  
En revenant à l’article initial, plusieurs études suggèrent que la dépendance excessive à l’IA pourrait affaiblir les compétences en pensée critique.  
Est-ce que des méthodes de prompting alternatives, ou même du reverse prompting, pourraient au contraire stimuler et renforcer ces capacités ? Il y a sûrement des travaux sur le sujet.  
