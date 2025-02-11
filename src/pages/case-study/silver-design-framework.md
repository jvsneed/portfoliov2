---
layout: ../../layouts/CaseStudy.astro
title: "Silver Design System"
role: "User researcher, Design system developer"
timeline: "2 months"
team: "4 UX Researchers"
tools: ["Figma", "Zoom", "React"]
heroImage: "/silverdesign-hero.png"
overview: "With the lack of a design framework specifically tailored for senior users, UX designers and engineers often lack the tools needed to create accessible designs for this age group. Our team aimed to develop a comprehensive framework that includes design guidelines, an evaluation checklist, and UI components to enhance accessibility and inclusivity for elderly users."
color: "#FF4444"
---

<section id="overview">

## Overview

Silver Design is a comprehensive design framework created to address the unique needs of senior users when interacting with digital interfaces. The project identified significant usability challenges for this demographic and aimed to provide UX designers and developers with practical tools, including design guidelines, a checklist, and UI components that focus on improving accessibility for seniors.

As the elderly population grows, the demand for digital experiences tailored to users over the age of 65 becomes increasingly urgent. Senior users often face cognitive, physical, and sensory challenges, such as difficulty reading small text, navigating complex interfaces, and interacting with small or improperly labeled elements. Despite existing standards like WCAG, no design frameworks specifically address the unique needs of this demographic, leaving a critical gap in accessible design.



---

</section>

<section id="challenge">

## The Challenge

Visitors to large art galleries like the Tate Modern often face challenges navigating exhibits, finding information, and enhancing their experience through digital tools. The Navigate the Tate app was designed to improve this experience by offering digital ticket access, gallery maps, and a feature to request printed postcards of artworks. However, the app’s usability had not been fully tested, and there was uncertainty about how intuitive and user-friendly it would be for a broad range of users, from tourists to art enthusiasts.

>How might we empower designers and engineers to build accessible interfaces that adapt to seniorr user needs?

**Goals**
- Identify the needs and pain points of our demographic and analyze these findings/sites via web accessibility evaluations
- Choose components and design them
- Conduct user research and refine components based on feedback
- Develop comprehensive design guidelines and evaluation checklist

---

</section>
<section id="solution">

## Solution

Silver Design delivers practical tools to make digital interfaces more accessible for senior users:

- Large, high-contrast text for readability.
- Consistent design patterns aligned with real-world expectations.
- Metrics from usability testing and surveys validated the framework’s effectiveness, and the heuristic checklist provided a valuable resource for designers.
<div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Vfeoe2V9UDU?autoplay=1&controls=0&loop=1&modestbranding=1&mute=1&playlist=Vfeoe2V9UDU&playsinline=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe></div>



---

</section>

<section id="process">

## Research Process

The team used a user-centered design approach to answer our research question.
<img src="/images/navigate-the-tate/process.png" style="width: 70%; display:flex; margin: 2rem auto;" alt="The user centered design process is research current experience, define the problem, design the concept and prototype, conduct usability evaluations, and iterate designs" />

### Competitive Review

We conducted a competitive review to assess the key players in the market. Based on the competitive review, a direct competitor of a UI design framework specific to elderly users does not exist. I was responsible for analyzing existing design frameworks and systems so that I could effectively build the framework site, while my team members focused on existing websites and applications. We documented our findings in a competitive review table, noting effictiveness of the product, component development, and existing guidelines.


<img src="/images/silver-design-framework/competitive-review.png" style="width: 70%; display:flex; margin: 2rem auto;" alt="A chart showing a competitive review" />

### Secondary Research
The team collabored to gather academic research and verified them peer review either through the DePaul Library Search designation or Ulrich’s Web. We read through our articles to assure their applicability to our scope and summarized their findings as the basis for our first set of guidelines.

The literature review revealed critical insights into designing for seniors. Cognitive changes, such as difficulties with memory recall and processing new information, necessitate simplified interfaces that reduce mental load while retaining essential functionality. Progressive disclosure, clear information architecture, and usability testing were emphasized as methods to achieve this balance.

The review also critiqued modern design trends that often exclude seniors. Flat design and minimalism, while aesthetically pleasing, can strip away critical affordances like clear visual cues and predictable layouts. This can lead to frustration and abandonment of tasks. By prioritizing usability over aesthetics, designers can create interfaces that serve all users, particularly seniors.

I compiled the information and wrote the full literature review, which can be found [on my blog](https://www.johannasneed.com/articles/is-modern-design-ageist).

### Surveys
We surveyed nine participants between the ages of 61 and 80. Participants were given the survey link to complete and were provided with additional assistance (such as scrolling) if needed.

We asked participants about their usage, attitudes, and preferences for web technologies. First, we asked participants about their use of technology, including what kind of devices they use, how often they use it, which operating system they prefer, and the purpose. Participants also rated their level of confidence with their technology interaction based on the Likert scale and shared their positive and negative experiences.

We also created and shared a survey for design peers, 10 designers from our cohort completed the survey. All participants were asked about their opinions on technology design for elderly users. For this portion, using a Likert scale, participants rated how strongly they agreed or disagreed with statements on seniors and technology.

<br>

**Sample of select survey quesitons for seniors**
<div style="padding-bottom: 2rem; text-align: center;">
        <div style="display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;">
            <!-- Card 1 -->
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Habits
                </h3>
                <p>
                    How often do you use a Smartphone? 
                </p>
                <p>
                Do you have a preference between iOS (Apple iPhone) or Android (e.g., Samsung, Google, LG) phones?                </p>
            </div>
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Sentiment
                </h3>
                <p>
                    Rate your agreement with the following statement: Technology makes my life easier.
                </p>
                <p>
                Rate your agreement with the following statement: I can usually figure out how to use new apps or devices on my own.</p>
            </div>
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Experiences
                </h3>
                <p>
What are some websites or apps you enjoy using and why?
                </p>
                <p>
Describe a recent bad experience you had with technology. What made it difficult or frustrating?
                </p>
            </div>
        </div>
    </div>

<br>

**Sample of select survey quesitons for designers**
<div style="padding-bottom: 2rem; text-align: center;">
        <div style="display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;">
            <!-- Card 1 -->
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Screener
                </h3>
                <p>
Do you have experiences witnessing seniors in your life interact with everyday technology?
                </p>
            </div>
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Sentiment
                </h3>
                <p>
Rate your agreement with the following statement: It is important to adhere to accessibility standards when designing technology for seniors.
                </p>
            </div>
            <div style="
                padding: 20px;
                border-radius: 10px;
                /* background-color: #f6f5f3; */
                border: 1px solid #ddd;
                text-align: left;
            ">
                <h3 style="display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: bold; margin-top: 1rem;">
                Experiences
                </h3>
                <p>
Based on your past observations, what improvements or features do you think would help make technology more accessible for seniors?
                </p>
            </div>
        </div>
    </div>
Since not all participants have witnessed seniors using everyday technology, a pre-screening question was included to determine whether they have observed such interactions. 1 participant, who answered “no”, was directed to the demographic section of the survey. Those who answered “yes” were guided to questions about their observations before proceeding to the demographic questions.




<br>
<br>

**What we learned from seniors**
- Most participants use a smartphone daily. While almost half of participants use tablets or laptop devices daily.
- A majority of participants (88%) report that technology makes life easier, yes 1/3 of participants felt that technology is too complicated for them to figure out on their own.
- Reported experiences underscore how technology enhances convenience, connectivity, learning, entertainment, and accessibility in daily life. Users reported enjoying a wide variety of sites, from online shopping to social media.

>From these results, our team narrowed down the scope of our mock site to focus on a travel website on a tablet device.

<br>

**What we learned from designers**

<div class="metrics-grid">
    <div class="metric">
        <div class="metric-value">70%</div>
        <div class="metric-label">of those surveyed strongly agreed or agreed that technology is currently senior-user friendly</div>
    </div>
    <div class="metric">
        <div class="metric-value">100%</div>
        <div class="metric-label">strongly agreed or agreed that it is important to adhere to accessibility standards</div>
    </div>
    <div class="metric">
        <div class="metric-value">30%</div>
        <div class="metric-label">reported having a good understanding of UI design principles for seniors</div>
    </div>
</div>


### Web Accessibility Evaluation
Based on findings from the Senior User Survey, the team chose to evaluate travel sites to gain insight for our design. Each member conducted a web accessibility evaluation on one of the following four travel sites, Kayak, Momondo, Southwest Airlines, and United Airlines. These websites were evaluated with the TAW and WCAG Contrast Checker methods at WCAG AAA standards. I documented and annotated findings in an inspiration board.
<img src="/images/silver-design-framework/accessibilityannotations.png" style="width:60%; display:flex; margin: 2rem auto;" alt="A sample of on annotated search component from a travel website" />

As a team, we identified several issues that were consistent among the four travel websites.
- Lack of a responsive layout if a user needs to zoom in, forcing users to scroll both vertically and horizontally.
- Text smaller than the WCAG AAA standards minimum of 12pt
- Interactive elements with Clickable target areas smaller than 44px and spacing between selectable areas smaller than 24px.
- Interactive elements with Missing heading labels and improper heading hierarchy.



### Component Design and Prototyping
Based on the research findings, we created a set of UI components to apply to a fictitious site, Indigo Airlines. As the most experiences Figma user, I created the initial setup for the components file and prototyped the first set of interactions, along with guiding my team.

<img src="/images/silver-design-framework/component-example.png" style="width:60%; display:flex; margin: 2rem auto;" alt="Example component for form fields" />


### Usability Study
We used task-based scenarios to apply the design framework and allow a small group of senior users to test a prototype. Each participant was given 2 tasks to complete, each with a scenario and three follow-up questions. By measuring success through metrics such as task completion rates, satisfaction, and error rates, along with qualitative feedback, the usability study enabled us to evaluate the effectiveness and usability of the proposed design framework. We received real-time feedback for iterating on the first version of the Silver Design framework.

Searching for a flight was a mostly straightforward process, but still had impact on cognitive load. Asking a question and navigating to the chat page was difficult. Many participants got lost along the way.

**Revisions**
To simplify task 1, we needed to reduce visual clutter and cognitive load by simplifying the search process further. To make getting help easier, we needed to add additional search bars and create a sitemap for users.



---
</section>

<section id="outcome">

## Building the Design Framework

I used the research findings to create a design framework. For evaluating existing designs, we built a Design Checklist using established heuristics. The Design Framework includes guidelines for:
- Text and Type
- Color and Contrast
- Interaction
- Content
- User Guidance

**Human Factors Considerations**
Each guideline was created to support at least one of three human factors impacting senior users.

- **Cognitive.** Supports simple design that favors recognition rather than recall and reduction in mental load
- **Sensory.** Supports the diminishing sensory responses, such as hearing, sight, and touch
- **Physical.** Supports physical abilities that may change with age, such as fine motor skills needed to operate touch screen devices


As you'll see in the live project, I added indicators on the guideline pages to help designers quickly see what kind of needs they are supporting.

<br>
<a href="https://silverux.design" target="_blank" style="padding: 1rem; background-color:#FF4444;border-radius:.5rem; color: white; text-decoration:none;">Visit the Silver Design site</a>



### Future Work and Reflections

It is crucial to continue refining the design framework by gathering insights from UX designers and engineers. Their perspectives can provide valuable feedback on the framework’s usability and accessbilty to ensure it meets the needs of senior users.

It is also important to explore the impact of this new design framework in real-world applications. Being able to apply this framework to more use case scenarios would help advance more components and help the framework evolve further.

Continued development both in research and implementation would have an even greater impact on addressing senior user needs, some of which we may have no idea of since there is such a great opportunity in continuing to develop this precedent.

</section>
