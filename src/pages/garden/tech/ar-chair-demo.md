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

<video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="400px"
    fluid="vjs-16-9"
    poster="/images/garden/ar-chair-demo.jpeg"
    data-setup="{}">
    <source src="/images/garden/ar-chair-demo.MP4" type="video/mp4" />
    <source src="MY_VIDEO.webm" type="video/webm" />
    </p>
  </video>


