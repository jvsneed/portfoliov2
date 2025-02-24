---
layout: ../../../layouts/GardenNote.astro
title: I made my first(basic) augmented reality project, and it was fun!
description: I dabbled in AR and found a beginner-friendly use case...here's how it went
lastModified: February 17, 2025
topics:
  - Technology
  - User Experience
  - Extended Reality
connections:
  - title: Integrating augmented reality project(iOS) into a consumer experience
    url: /garden/tech/ar-chair-demo
featured: false
---

I'm not sure how, but I went down a small AR rabbit hole, and surprisingly, it didn't take too much time investment to see results. I spent about 5 hours total from learning to completing this project and a [furniture website project](./ar-chair-demo) , I outline my process here. I am considering this a garden note, as I am not an expert in this topic and this isn't _technically_ a tutorial. Also, I have some previous 3D/Blender experience...

(FYI, the approach I took does require an Apple mobile or tablet device)

## Gathering resources
I searched the web for AR, VR, and 3D related sites and resources. Here are some of the links I've found:
<iframe style="border: 0; width: 100%; height: 450px; margin-bottom:2rem;" allowfullscreen frameborder="0" src="https://raindrop.io/whoisHunkyDory/extended-reality-xr-tools-and-resources-52630885/embed/theme=light"></iframe>



## Picking the technology
I had a lot to learn, and I didn’t even know the basics of XR. To keep things simple, I went with Apple’s ARKit tools, Reality Composer, Reality Composer Pro, and Reality Converter. I found some quick, intuitive tutorials that helped me grasp AR fundamentals and navigate 3D environments. The best part: I could modify and update projects directly from an iPhone or iPad. The tradeoff was that files are optimized for Apple devices (.reality extension), but exporting to USDZ made them more versatile, even if it meant sacrificing some quality. 

## Creating my first AR scene
I chose to create a scene with image anchoring since it required the most thought and pushed me to learn more. Image anchoring matches a provided image to a real-world object, triggering relevant information. I saw examples of this used for book annotations, so I decided to explore that approach.



### Finding an object
I grabbed a book and took a photo of it, then cropped it to the edges. The image should be straight on, and avoid shadows and glare as much as possible.

<img src="/images/garden/odd-birds.png" alt="Ian Harding's book titled Odd Birds" style="width:30%;">

### Creating the AR elements
You can create these directly in the Reality Composer UI using the +(plus symbol) or import images, I went with the importing images route (requires an iPad to enable two windows open at once). For this example, I chose to write a short book review in Figma. As you can see in the final part of the video, my photo was a little crooked. You can fix this pretty easily by retaking, cropping, and tilting the image.

<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/gtU4tXD2W3M?modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>

### Adding behaviors
This is where it gets REALLY fun! Behaviors are interactions with the AR elements. In this case, I wanted for the title to display in the scene when it starts, but not the review. Then, when I tap the book title, I want the review information to appear.
<div style="padding-bottom: 56.25%;margin-bottom:3rem;position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/49Lkm6s5qFI??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>


--- 
## The final product

The final product wasn't perfect, and no one will ever see it again, so it didn't need to be. 
<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/_dFfCWhQ1PY??modestbranding=1&mute=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; padding-bottom: 4rem;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>

A few things I learned:
- My anchored image alignment is important. The photo of the book I took and cropped was slightly crooked, resulting in my other elements looking crooked relative to it.
- I can use transparent layers (pngs) in the Reality Composer and .reality files, but they become opaque once exported to usdz files
- I ended up needing to change one of the behaviors, the "Show" behavior duration should actually be set to zero (0) in order for the elements not be displayed immediately on scene start
- I think I need to explore Reality Composer pro to work on lighting
- I had fun!!

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


