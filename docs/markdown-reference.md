# Case Study Markdown Reference

## Basic Markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`

## Headers
# H1 (use only in frontmatter)
## H2 (Section headers)
### H3 (Sub-sections)
#### H4 (Minor sections)

## Lists
- Unordered list
- With bullets
  - Indented item
  - Another indent

1. Ordered list
2. Numbered items
   1. Sub-numbered
   2. Items

## Callouts and Quotes
> Important insight or quote
> 
> Multiple lines work too

## Code Blocks
```
This is the description of what the code block changes:
<changeDescription>
I'll expand the markdown reference with more components specifically designed for case studies:
```

</changeDescription>

## Case Study Components

### Image Gallery

## Enhanced Image Components

### Basic Image Grid

<figure class="full-width">
    <img src="/images/hero.jpg" alt="Project overview" />
    <figcaption>Early wireframes and user flow diagrams</figcaption>
</figure>

<div class="compare-wrapper">
    <div class="compare-images">
        <div>
            <img src="/images/before.jpg" alt="Before redesign" />
            <span class="compare-label">Before</span>
        </div>
        <div>
            <img src="/images/after.jpg" alt="After redesign" />
            <span class="compare-label">After</span>
        </div>
    </div>
</div>

<div class="feature-highlight">
    <div class="feature-content">
        <h3>Key Feature Name</h3>
        <p>Description of the feature and its benefits...</p>
        <ul>
            <li>Key benefit one</li>
            <li>Key benefit two</li>
        </ul>
    </div>
    <img src="/images/feature.jpg" alt="Feature screenshot" />
</div>

<div class="metrics-grid">
    <div class="metric">
        <span class="metric-value">87%</span>
        <span class="metric-label">Task Success Rate</span>
    </div>
    <div class="metric">
        <span class="metric-value">2.3x</span>
        <span class="metric-label">Conversion Increase</span>
    </div>
</div>

<div class="research-process">
    <div class="process-timeline"></div>
    
    <div class="process-step">
        <div class="step-number">01</div>
        <div class="step-content">
            <h4 class="step-title">Discovery</h4>
            <ul>
                <li>Stakeholder interviews</li>
                <li>Competitive analysis</li>
                <li>Initial user research</li>
            </ul>
        </div>
    </div>

    <div class="process-step">
        <div class="step-number">02</div>
        <div class="step-content">
            <h4 class="step-title">Research & Analysis</h4>
            <ul>
                <li>User interviews (n=15)</li>
                <li>Usability testing</li>
                <li>Data analysis</li>
            </ul>
        </div>
    </div>

    <div class="process-step">
        <div class="step-number">03</div>
        <div class="step-content">
            <h4 class="step-title">Synthesis</h4>
            <ul>
                <li>Affinity mapping</li>
                <li>Journey mapping</li>
                <li>Key findings</li>
            </ul>
        </div>
    </div>
</div>
