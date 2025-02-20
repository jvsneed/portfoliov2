---
layout: ../../../layouts/GardenNote.astro
title: Integrating an augmented reality project into a consumer experience (iOS only)
description: I made a mock furniture site to integrate the AR experience
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


Caveat: AR experiences only work on mobile/tablet Apple devices. You can visit the site on another device, but what's shown in the demo just won't work. In order to have better cross platform compatibility, I should explore something like `<model-viewer>` or webXR. If I continue down this journey, I will give it a try.

That most difficult part of the project was designing and developing a site to mockup. I did a review of the Apple pages to figure out how they got the usdz models to display on their site, and turns out, it's just using the rel="AR" attribute on their links. I created the AR scene using Reality Composer (see quick demo in my first [AR project post](./ar-book-demo.md), sourced the 3D asset from sketchfab, and did a reverse image search to find more suitable project images.

<div style="padding-bottom: 100%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/NGyW8jKkYMA?autoplay=1&loop=1&modestbranding=1&mute=1&playlist=NGyW8jKkYMA&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: auto; height: 70vh;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>