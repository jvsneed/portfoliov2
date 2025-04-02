---
title: "How to incorporate accessibility into every step of the software development lifecycle"
date: "November 21, 2024"
excerpt: "By embedding accessibility into every phase of the software development lifecycle, we create products that work for everyone."
tags: ["Accessibility", "Web Development"]
layout: "../../layouts/BlogPost.astro"
featured: true
image: "/images/articles/accessibility-in-sdlc.png"
---

Accessibility should never be an afterthought. By embedding accessibility into every phase of the software development lifecycle (SDLC) and following a user-centered design process, we create products that work for everyone. Prioritizing accessibility early aligns teams with user needs, reduces rework, and improves usability for all.

In my experience as a digital experience and app dev manager, I’ve seen the impact of applying these practices, but I’ve also reflected on what I could have done differently (which I've incorporated in this guide). The great news is, you don’t need to be a manager to start making a difference. Anyone can adopt these approaches or influence others to prioritize accessibility. It’s a shared responsibility.

 <div class="sdlc-visual"
 style="display:grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: 1rem; margin: 2rem 0; grid-wrap:wrap;">
      <div class="sdlc-phase"
      style="border: 1px solid var(--color-muted); padding: 1rem;">
        <div class="phase-content">
          <p class="phase-title"><b>Planning</b></p>
          <p>Setting clear accessibility expectations and training</p>
        </div>
      </div>
        <div class="sdlc-phase"
        style="border: 1px solid var(--color-muted); padding: 1rem;">
        <div class="phase-content">
          <p class="phase-title"><b>Design</b></p>
          <p>Incorporating accessible patterns and testing prototypes</p>
        </div>
      </div>
      <div class="sdlc-phase"
      style="border: 1px solid var(--color-muted); padding: 1rem;">
        <div class="phase-content">
          <p class="phase-title"><b>Development</b></p>
          <p>Using checklists and semantic practices</p>
        </div>
      </div>
      <div class="sdlc-phase"
      style="border: 1px solid var(--color-muted); padding: 1rem;">  
        <div class="phase-content">
          <p class="phase-title"><b>Testing</b></p>
          <p>Conducting manual and automated accessibility tests</p>
        </div>
      </div>
      <div class="sdlc-phase"
      style="border: 1px solid var(--color-muted); padding: 1rem;">
        <div class="phase-content">
          <p class="phase-title"><b>Deploymen</b>t</p>
          <p>Monitoring user analytics and scheduling audits</p>
        </div>
      </div>
    </div>

## Planning

Accessibility starts with thoughtful planning. During the planning phase, we set the foundation for inclusivity by embedding accessibility into every aspect of our approach.

### 1. Training and team alignment
Training is critical for fostering a shared understanding of accessibility. It’s not just about compliance, it’s about serving real people. For example, knowing that over 50% of our user base was aged 50 or older helped our team see the tangible human impact of accessibility. This connection deepened their commitment to creating inclusive experiences.

Accessibility begins with thoughtful planning, where teams establish a foundation for inclusivity by integrating accessibility into every part of the process. To ensure accessibility was well understood by all team members, implementing a simple training plan to incorporate into onboarding can be helpful. This plan includes training and helpful resources to keep bookmarked or on hand during all SDLC phases.


#### Get started
 - [What is Web Accessibility in 60 Seconds](https://www.youtube.com/watch?v=hufMi9LZX2I) – A YouTube video briefly demonstrating the importance of accessibility.
 - [Accessibility Fundamentals](https://www.w3.org/WAI/fundamentals/) – W3C’s primer on accessibility concepts.
- [Introduction to Web Accessibility](https://mawconsultingllc.com/videos/v/hzzcebcywrh37xperxt54z53bryzea) – A video showcasing web accessibility practices and assistive technologies.

#### Foundations
- [Digital Accessibility Foundations Online Course](https://www.w3.org/WAI/courses/foundations-course/) – Sign up for W3C’s accessibility foundations course.
- [MDN's ARIA Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) – Learn ARIA roles and best practices.
- [Nielsen Norman Group’s 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) – Foundational usability principles for better design.
- [Usability.gov](https://usability.gov/) – Guidelines and best practices for user-centered design.

#### Additional learning and tools
- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/) – Use this checklist to ensure accessibility standards.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) – Evaluate color contrast for accessibility compliance.
- [WebAIM Keyboard Accessibility](https://webaim.org/techniques/keyboard/) – Ensuring keyboard navigation is seamless.
- [Color blindness simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/) – Upload an image to simulate various types of color blindness.

### 2. Embedding Accessibility in User Stories and Acceptance Criteria
To integrate accessibility into daily development, include specific accessibility requirements directly in user stories. This ensures they are implemented and tested as part of the development process. An example user story or requirement could be as simple as "As a user relying on keyboard navigation, I need clear focus indicators so I can navigate forms efficiently." For every UI-related task, I recommend using the Accessibility Checklist from The A11Y Project as a reference. This checklist can become an essential tool that guides developers through key considerations, such as:
- Ensuring semantic HTML was used wherever possible
- Providing proper ARIA roles for complex interactions
- Confirming color contrast met WCAG standards

User stories should not be considered "done" until they meet specified accessibility standards. This helps avoid accessibility being treated as an afterthought and reduces the chances of issues cropping up late in the process when fixes would be more time-consuming.

## Design
In the design phase, embed accessibility into every element of the process. Use accessible patterns like high-contrast color schemes, large touch targets, and clear focus indicators as part of your design system. When creating prototypes, prioritize assistive technology users by testing early with screen readers and keyboard navigation to ensure compatibility.

Engage users with disabilities during usability testing to uncover barriers early. Iterating on their feedback ensures designs meet accessibility best practices, reduces friction for all users, and creates a more inclusive experience. For example, testing a prototype with a screen reader user might reveal navigation issues that otherwise go unnoticed.

For further guidance, explore the [NNGroup Accessibility and Inclusivity Study Guide](https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/). This resource provides expert insights, best practices, and actionable strategies for building accessible and inclusive designs.For additional insights, explore these resources:

- [The Inclusive Design Guide](https://guide.inclusivedesign.ca/) – Provides design guidance for digital, physical, and other formats.
- [Towards a Greater Emphasis on Accessibility Within the Trust & Safety Industry](https://uxdesign.cc/towards-a-greater-emphasis-on-accessibility-within-the-trust-safety-industry-c863b78a943e) – Highlights the critical role of accessibility in ensuring trust and safety across digital platforms.
- [Understanding Accessibility Makes You a Better [Insert Your Name Here]](https://uxdesign.cc/understanding-accessibility-makes-you-a-better-insert-your-name-here-1f7a15c50e7f?source=collection_home---------7----------------------------) – Explores how accessibility improves your craft, no matter your role in the design process.
- [UX Principles That Include Cognitive Accessibility](https://www.ab11y.com/articles/ux-principles-that-include-cognitive-accessibility/?utm_source=stephaniewalter.design&utm_medium=weeklylinks) – Offers practical guidance for designing interfaces that cater to users with cognitive disabilities.
- [Where’s the Fun in Accessibility?](https://uxdesign.cc/wheres-the-fun-in-accessibility-b78c6b9d280d) – Discusses how to approach accessibility as an opportunity to innovate and enhance the user experience. I especially love the Transformers example. Creating delight by showing the Transformers logo even for users with slow internet speeds or when images are disabled.

<img src="/transformers-example.png" style="max-width:100%;" alt="Transformers email logo displays when images are disabled">


## Development
During development, treat accessibility as a core part of the process. Incorporate checklists into story cards to ensure key elements like semantic HTML, ARIA roles, and WCAG compliance are consistently applied. Automate accessibility testing with tools like [axe-core](https://www.deque.com/axe/) or integrate other accessibility testing tools directly into your CI/CD pipeline to identify and fix issues early. For example, integrating axe-core into your repo, configuring automated tests to run on commit, and using reports to fix violations before merging.

Foster collaboration between designers and developers to ensure accessible design elements are implemented correctly. Establish regular reviews and feedback loops to keep accessibility at the forefront throughout the development phase.

For practical development resources, explore:

- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/) – A developer-friendly checklist for accessible HTML, ARIA roles, and more.
- [WAVE Accessibility Evaluation Tool](https://wave.webaim.org/) – Quickly evaluate web accessibility during development before it even hits QA.
- [Google Web.dev Measure](https://web.dev/measure/) – Analyze and improve performance.


## Testing
Testing brings accessibility and user-centered design together. Combine automated and manual testing to ensure your product works effectively for users with disabilities. Use tools like [NVDA](https://www.nvaccess.org/download/) and [VoiceOver](https://www.apple.com/voiceover/info/guide/) to manually test compatibility with assistive technologies and identify gaps automated tools might miss.

Incorporate usability tests with real users, including those with disabilities, to uncover barriers that can't be detected by automation. These tests provide valuable insights, helping refine designs and ensure the final product meets accessibility standards and user expectations.

While automated tools are invaluable, manual testing remains critical for understanding the full user experience. Simulate interactions with assistive technologies like screen readers (e.g., NVDA or VoiceOver) and perform keyboard-only navigation testing to uncover nuanced issues.

For comprehensive testing, use these evaluation tools:

- [WAVE Accessibility Evaluation Tool](https://wave.webaim.org/) – Evaluate web accessibility visually during development.
- [BrowserStack Accessibility Testing](https://www.browserstack.com/accessibility-testing) – Test and debug accessibility across devices, operating systems, and browsers.
- [axe DevTools](https://www.deque.com/axe/) – A comprehensive tool for automated accessibility testing.
- [Google Lighthouse](https://web.dev/measure/) – Open-source tool for auditing performance, accessibility, and more.
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/) – Free tools for manual and automated testing.

## Deployment and monitoring
Accessibility doesn’t stop at launch. Post-deployment, monitor user behavior with analytics tools to identify areas where users may struggle. Use this data to prioritize iterative improvements. Ensure all documentation is written with accessibility in mind, offering clear and concise instructions for users who rely on assistive technologies.

Establish feedback channels that allow users to report issues or share suggestions. Proactively addressing this feedback ensures accessibility remains central to the product as it evolves over time.

For ongoing monitoring and improvements, consider these resources:

- [Google Analytics Reports](https://marketingplatform.google.com/about/analytics/) – Track user interactions and identify potential usability gaps.
- [Hotjar](https://www.hotjar.com/) – Use heatmaps, user feedback, and session recordings to visualize user behavior and detect accessibility barriers.
- [Microsoft Accessibility Insights for Documentation](https://www.microsoft.com/en-us/accessibility/windows) – Ensure documentation meets accessibility standards for all users.
- [iOS Accessibility Guidelines](https://developer.apple.com/accessibility/) – Explore Apple’s extensive accessibility documentation and testing tools for iOS apps.
- [Android Accessibility Documentation](https://developer.android.com/guide/topics/ui/accessibility) – Guidance for building accessible Android apps, including TalkBack and testing tips.
- [macOS Accessibility Features](https://support.apple.com/guide/mac-help/get-started-mh35884/mac) – Apple’s guide to accessibility settings and tools for macOS apps.

## Final thoughts
Accessibility drives better design, development, and user experiences. Embedding accessibility into every phase of the SDLC removes barriers, fosters inclusivity, and creates products that truly work for everyone. This approach is both ethical and practical. It enhances usability, minimizes costly rework, and should align with business goals. Every decision we make as creators has the potential to either include or exclude. Start small, take consistent steps, and remember that accessibility benefits everyone.

If you have questions or other resources you think could be helpful for this guide, feel free to reach out. It could help someone!

