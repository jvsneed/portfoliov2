---
layout: ../../../layouts/GardenNote.astro
title: Augmented Reality in a Consumer Experience (iOS Only)
description: I created a mock furniture site to integrate an AR experience, allowing users to view 3D furniture models in their space.
lastModified: February 20, 2025
topics:
  - Technology
  - User Experience
  - Extended Reality
connections:
  - title: I made my first(basic) augmented reality project, and it was fun!
    url: /garden/tech/ar-book-demo
featured: true
---

**Demo available at [obliq.johannasneed.com](https://obliq.johannasneed.com) or see video below** 

## Caveats & future considerations
This AR experience only works on Apple mobile and tablet devices. You can visit the site on other devices, but the AR functionality won’t be available. To improve cross-platform compatibility, I should explore alternatives like <model-viewer> or WebXR. If I continue refining this project, I plan to test these options.

## Challenges and process

The most difficult part of this project was designing and developing the mock site itself since I'd be sharing it pubicly. I analyzed Apple's implementation and found that their AR integration relies on the rel="AR" attribute in links to USDZ models. To build my experience:

I created the AR scene using Reality Composer [AR project post](./ar-book-demo.md)
I sourced the 3D asset from Sketchfab
I used reverse image search to find more suitable project images
This project was a great exploration of AR in e-commerce, and I look forward to improving it further.


<div style="padding-bottom: 100%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/NGyW8jKkYMA?autoplay=1&loop=1&modestbranding=1&mute=1&playlist=NGyW8jKkYMA&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: auto; height: 70vh;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>