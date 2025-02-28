---
layout: ../../../layouts/GardenNote.astro
title: "SocraticAI for agent-agent interaction"
description: "Thoughts on an interesting article about using the socratic method for agent-agent interaction"
growth: "evergreen"
lastModified: "2025-02-27"
topics: ["human-computer interaction", "AI agents", "Ethics"]
connections:
  # - { title: "Design System Components", url: "/garden/ux/design-system-components" }
  # - { title: "Color Contrast Guide", url: "/garden/design/color-contrast" }
  # - { title: "Inclusive Design Principles", url: "/garden/design/inclusive-design-principles" }
featured: true


---
A few moths ago, a connection shared this article on BlueSky: [AI as Extraherics: Fostering Higher-order Thinking Skills in Human-AI Interaction](https://arxiv.org/html/2409.09218v2). Which is an interesting read in itself, but it paralleled with the Socratic AI concept which employs a similar method to help AI agents work toward the best solution. Essentially, taking the "extraheric" concept, and applying it  between AI agents. Adding the human context and cognitive growth was interesting to read, and I'll write more on what I've learned in a future note.


Article link: [The Socratic Method for Self-Discovery in Large Language Models](https://princeton-nlp.github.io/SocraticAI/)

Here are my thoughts on AI-AI decision making using the Socratic Method.

## Summary
Large language models (LLMs) can be enhanced by having multiple AI agents work together on a task, rather than relying on a single model prompt. In the article, different agents take on distinct roles (like “analyst” or “proofreader”) to leverage their unique strengths as a team​.

In particular, the authors draw inspiration from the Socratic method. Which intro to philosophy fails to warn could be seen as combative by close-minded people (am I funny yet?). The goal, however, is to elicit deeper analytical thinking in LLMs. Traditional prompting strategies such as Chain-of-Thought (CoT) or ReAct have improved LLM reasoning by making them explain step-by-step, but these methods rely on fixed, 

By contrast, a Socratic approach encourages free-form inquiry: multiple LLMs ask each other questions, challenge answers, and build on ideas in an open dialogue​.

 This shift represents a rethinking of “prompting” and moving away from rigid prompts toward autonomous multi-agent conversations. The authors’ preliminary experiments show that LLMs can engage in such self-driven dialogue, effectively “self-discovering” knowledge and broadening their perspective on a problem through back-and-forth questioning​.




## Limitations and challenges
Assessing limitations is the best way to make progress, so here's what I captured from the article...

There is the danger of reinforcing errors or biases: if one agent shares a mistaken assumption, the others might agree or build on it, leading the group astray. The authors note that multi-agent dialogue may amplify misinformation or bias if not carefully managed​!!

A concrete example was seen when the SocraticAI agents all agreed on an incorrect fact (treating 71 as a prime when it isn’t); without external intervention, the collaboration can confidently proceed down a wrong path​. 

Another challenge is the overhead and complexity of coordination. It requires a system to track the dialogue state, possibly moderate turn-taking, and integrate any external tool use (like executing code or querying an API). This adds layers where something could go wrong (e.g., the agents might get confused or the conversation might stagnate if none have new ideas). There is also a computational cost to running multiple large models in tandem or in sequence, which can make the approach slower or more expensive compared to a single model solution.

As seen in the fly brain demo, long dialogues can hit the context length limits of current models, causing the session to end prematurely​. 

Maintaining coherence over many turns or handing off information between agents may demand advanced memory management or summarization techniques. In summary, the 

While powerful, the SocraticAI method must contend with issues of error propagation, resource usage, and architectural complexity.

## Other applications
Looking back at the original article, I've come across several studies suggesting that excessive reliance on AI may contribute to a decline in critical thinking skills. Could alternative prompting methods, or even the introduction of reverse prompting, help foster and strengthen cognitive and critical thinking abilities? I'm sure there's something out there...