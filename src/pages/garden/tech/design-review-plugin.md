---
layout: ../../../layouts/GardenNote.astro
title: Improving design review documentation with the Figma Design Review Plugin (I made it)
description: Looking for quick ways to annotated documents in Figma with design feedback and status...never found what I was looking for, so I made my own.
lastModified: March 5, 2025
topics:
  - User Experience
  - Figma
  - Web development
connections:
featured: true
---


The plugin is currently under review by Figma, but I'll update this post with a link once it's approved.
<iframe width="100%" height="400" src="https://www.youtube.com/embed/8O91lO7KJbI?si=sJ4bJPTJQDBMatga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## **Why I built this**
I wanted a way to improve async design reviews and capture design decisions with traceability in Figma. This plugin allows users to select an object or frame, add a review status (Review Needed, Approved, Changes Needed, Not Ready), and attach comments. The review note is placed next to the selected element, making it easy to track feedback directly in the design file. It seemed like a simple enough project to build.

## **How it works**
1. **User selects an object or frame** in Figma.
2. **A UI panel appears** where they can add comments and choose a review status.
3. **The plugin creates a labeled review frame** next to the selected object.
4. **Review notes store metadata** (reviewer name, timestamp, status, and comments) for future reference.
5. **Multiple reviews stack intelligently**, preventing overlap.

## **Basic plugin architecture**
### **Figma plugin API basics**
- `figma.showUI(__html__);` → Displays the custom UI for review input.
- `figma.ui.onmessage` → Listens for user input from the UI.
- `figma.createFrame();` → Creates a review frame on the canvas.
- `figma.currentPage.selection` → Gets the currently selected element.
- `figma.notify()` → Provides in-app notifications to guide users.

### **Handling user input & review metadata**
When the user submits the form, the plugin extracts comments, status, and reviewer name. The review data is stored using pluginData (local storage) on the added review frame.

### **Placing the review frame**
The plugin places the new reviews to the right of the selection, or stacks them below existing ones, if they exist. This prevents overlap by checking nearby review frames.

### **Styling the review notes**
- I used frames to create a structured review card - no auto layout though.
- Dynamic badge colors represent different statuses for quick visual feedback.

## **What I learned**
- How to use the Figma Plugin API to create UI-based interactions.  
- Managing text layers, frames, and UI states in Figma.  
- Formatting review data with timestamps and metadata.  
- Handling positioning logic for non-overlapping UI elements.  
- Enhancing accessibility with clear labels and keyboard navigation.

Not sure what I'll do next or if this will be useful to anyone else, but it's been a fun learning experience and I'll probably keep it around for my own use.


