---
layout: ../../../layouts/GardenNote.astro
title: My first(basic) augmented reality project...how fun!
description: I dabbled in AR and found a beginner-friendly use case.
lastModified: February 17, 2025
topics:
  - Technology
  - User Experience
  - Extended Reality
connections:
  - title: Integrating augmented reality project(iOS) into a consumer experience
    url: /garden/tech/ar-chair-demo
  - { title: "All of my bookmarks", url: "/garden/miscellaneous/bookmarks" }
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
  
I dabbled in AR and found a beginner-friendly use case—here’s how it went.

Somehow, I ended up going down a small AR rabbit hole. Surprisingly, it didn’t take much time to see results. In about five hours, I completed both this project and a [furniture website project](./ar-chair-demo).  

This isn’t _technically_ a tutorial, just a garden note documenting my process. I’m not an expert in AR, but I do have some prior experience with 3D modeling in Blender.

_(FYI: This approach requires an Apple mobile or tablet device.)_

## Gathering resources
I searched for AR, VR, and 3D-related sites and resources. Here are some useful links I found:
<iframe style="border: 0; width: 100%; height: 450px; margin-bottom:2rem;" allowfullscreen frameborder="0" src="https://raindrop.io/savedbyjo/extended-reality-xr-tools-and-resources-52630885/embed/theme=light"></iframe>



## Picking the technology
Since I was new to XR, I needed to keep things simple. I chose Apple’s ARKit tools:  
- **Reality Composer**  
- **Reality Composer Pro**  
- **Reality Converter**  

I found intuitive tutorials that helped me grasp AR fundamentals and navigate 3D environments. A huge perk of Apple’s tools is that I could modify and update projects directly from an iPhone or iPad. The tradeoff? Files are optimized for Apple’s ecosystem (`.reality` format). Exporting to USDZ made them more versatile but at the cost of some quality.


## Creating my first AR scene
I wanted to experiment with **image anchoring**, which maps a provided image to a real-world object and triggers AR interactions. I had seen this used for book annotations.



### Finding an object
I grabbed a book and took a photo of it, then cropped it to the edges. The image should be straight on, and avoid shadows and glare as much as possible (which, frankly, I didn't do properly here).

<img src="/images/garden/odd-birds.png" alt="Ian Harding's book titled Odd Birds" style="width:30%;">

### Creating the AR elements
Reality Composer lets you add elements directly in its UI or import images. I chose to import images, which required using an iPad with split-screen mode. For this project, I created a short book review in Figma.  

In the final result, my photo was slightly crooked. Retaking, cropping, and tilting the image would have helped correct this.  


<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/gtU4tXD2W3M?modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>

### Adding behaviors
This is where things got REALLY fun.  

Behaviors control interactions with AR elements. I set mine up so that:  
1. The book title appears immediately in the scene.  
2. The book review remains hidden.  
3. Tapping the book title reveals the review. 

<div style="padding-bottom: 56.25%;margin-bottom:3rem;position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/49Lkm6s5qFI??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>


--- 
## The final product
It wasn’t perfect, but that wasn’t the point. I was just experimenting!  

<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/_dFfCWhQ1PY??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; padding-bottom: 4rem;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>

## Takeaways
- **Image alignment matters.** My book image was slightly crooked, which made my AR elements appear off.  
- **Transparency behaves differently.** `.reality` files support transparent layers (PNGs), but they turn opaque in USDZ exports.  
- **"Show" behavior duration should be set to zero.** Otherwise, elements appear immediately when the scene starts.  
- **Lighting needs work.** I should explore Reality Composer Pro to refine this.  
- **I had fun!**  

This was a solid intro to AR, and I’m excited to explore more.




