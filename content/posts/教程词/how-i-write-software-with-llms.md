---
title: "How I Write Software With Llms"
slug: how-i-write-software-with-llms
keyword: "how i write software with llms"
keyword_type: 教程词
created_at: 2026-03-19T15:11:22.855582+00:00
reference_links:
  - https://www.stavros.io/posts/how-i-write-software-with-llms/
---

# How I Write Software With Llms

When people search for *how i write software with llms*, they often expect a prompt library, a list of coding tools, or a claim that one model can replace an entire engineering workflow. The source that shaped this piece, Stavros's March 10, 2026 post ["How I write software with LLMs"](https://www.stavros.io/posts/how-i-write-software-with-llms/), points in a different direction. What stands out is not blind automation. It is a disciplined way of using LLMs to plan, implement, and review software while keeping human judgment firmly at the center.

That makes this a useful tutorial topic. If you want a practical llm software development guide, the most concrete lesson from the source is that results improve when you stop treating the model as a single all-purpose assistant and start treating it as part of a structured development process.

## Background

Stavros frames his workflow around a simple personal realization: he is motivated less by the act of programming itself and more by making useful things. In his telling, LLMs changed the shape of that work. He says recent models let him build software with a much lower defect rate than before, while still keeping him close to the architecture and the major decisions.

That claim is grounded in specific examples from the post. He is not talking only about throwaway scripts. He lists maintained projects he uses in real life, including Stavrobot, a personal assistant; Middle, a voice-note pendant; Sleight of Hand, an art-oriented clock project; and Pine Town, a multiplayer canvas. The important point is not that every reader should build those exact kinds of products. It is that his workflow is meant for ongoing software development, not just weekend demos.

He also makes a careful distinction that many discussions about AI coding miss. He does not argue that engineering skill has become irrelevant. Instead, he argues that the skill has moved up the stack. Writing every line by hand matters less. Understanding architecture, constraints, tradeoffs, and product behavior matters more.

## Why This Matters

That shift matters because it changes what "good" looks like in developer llm workflow 2026 discussions. A weak workflow asks the model to generate code and hopes for the best. A stronger workflow uses the model to accelerate implementation while the human guards system shape, interfaces, and product intent.

The source is especially clear on one uncomfortable truth: people get very different outcomes from the same class of tools. Stavros suspects the difference comes partly from how they talk to models and how they organize the work. That is a useful lens for anyone looking up how to use llms for coding. If your results feel random, the issue may not be the model alone. It may be the absence of a reliable process.

Another reason this matters is that the post rejects an all-or-nothing story. Stavros does not say LLMs always work. He describes a real failure mode: when he lacks enough understanding of the underlying technology, bad architectural choices can compound until the codebase becomes tangled and hard to recover. That warning gives the article its credibility. It is not a victory lap. It is a workflow shaped by repeated failure.

## What To Pay Attention To

The first thing to pay attention to is tool setup. Stavros says his preferred harness needs two capabilities: access to multiple models from different companies, and support for custom agents that can call each other. His reasoning is practical. A model reviewing its own work tends to agree with itself. A different model provides a second set of eyes. In his current preferences, different models serve different roles well, but he also notes those preferences can change over time.

The second thing is role separation. His workflow uses an architect, a developer, and one to three reviewers. This is one of the clearest llm programming workflow best practices in the source. The architect is the only agent he directly interacts with. That agent helps refine the task, challenge assumptions, and turn a vague request into a low-level plan. The developer then implements the plan with less freedom to improvise. Reviewers inspect the resulting diff and send feedback back into the loop.

The third thing is approval discipline. Stavros explicitly says he tells the architect not to start implementation until he says "approved." That sounds minor, but it reflects a broader rule: do not let the model sprint ahead before the goal, constraints, and tradeoffs are settled. In other words, speed comes after alignment, not before it.

## Llm Software Development Guide

If I turn the source into a straightforward workflow, it looks like this.

Start with one concrete feature or bugfix, not a vague ambition. In the example session from the post, Stavros begins with a high-level request to add email support to a bot. That is specific enough to design, but still open enough for the model to ask useful questions.

Next, use a strong model as the architect. The architect's job is to interrogate the request. In the source, the model asks about inbound email handling, outbound sending, the actual use case, architecture decisions, HTML email handling, threading, and attachments. This is the real core of how i write software with llms as a repeatable practice: the model is not just a code generator. It is a design partner that pressures the spec until hidden assumptions surface.

Then shape the plan with the model instead of passively accepting it. Stavros is explicit that he still corrects the LLM frequently, either because it is wrong or because it is choosing an approach he would not choose. That intervention is part of authorship. The software is still his because he is making the consequential decisions.

After approval, hand the work to a more efficient implementation model. The post describes using a cheaper model for coding once the high-level choices have already been made. This keeps token costs down and reduces the chance that the implementation agent will make unnecessary architectural moves.

Once the change is implemented, run independent review. Stavros uses at least one reviewer and sometimes several. They look at both the plan and the diff, critique the work, and send feedback back to the developer. When reviewers disagree, the decision escalates to the architect. This is one of the most useful parts of the source for anyone building an llm software development guide: review is not optional cleanup. It is a core quality mechanism.

Finally, keep your own understanding above the function level. Stavros says he has often not read most of the code line by line, yet remains familiar with the architecture and inner workings of his projects. That only works if you stay engaged with system structure, interfaces, and tradeoffs throughout the process.

## FAQ

## Is this article saying developers no longer need to know how to code?

No. The source argues almost the opposite. It suggests that human skill is still necessary, but that it shifts toward architecture, system design, and judgment. Stavros says that when he understands the underlying technology well, the workflow holds up much better. When he does not, bad choices accumulate.

## Why not just use one strong model for everything?

Because the source treats diversity of models as a quality tool. Stavros argues that one model reviewing its own code is likely to reinforce its own biases. Multiple models can catch different issues, and separate roles also help control cost by reserving expensive models for planning and harder reasoning.

## What is the biggest mistake when using LLMs for software development?

Based on the source, the biggest mistake is letting implementation run ahead of understanding. If the architecture is weak, the LLM can keep building on top of poor decisions until the system becomes harder to fix. Another mistake is assuming that if the code compiles, the development process was sound.

## Do I need the exact same tools and models mentioned in the source?

No. The article is more about workflow shape than brand loyalty. Stavros names his current harness and model preferences, but the durable lesson is the structure: strong planning, constrained implementation, independent review, and human approval at key points.

## What To Watch Next

The most interesting open question is how long this workflow remains stable. Stavros notes that his own review burden has already moved upward over time, from checking lines of code, to checking functions, to checking general architecture. He even suggests there may come a point when architecture-level oversight is reduced further.

Even so, the post does not support a careless reading. For now, the human role is still crucial, especially when choosing tradeoffs, interpreting reviewer feedback, and steering unfamiliar technologies. So if you are watching the space, the next thing to monitor is not just model capability. It is whether better models actually reduce the need for architectural supervision, or whether they simply make disciplined workflows even more valuable.

## Final takeaway

If you want a practical answer to *how i write software with llms*, the source points to a simple rule: do not outsource thinking, outsource well-scoped execution. Use a strong model to refine the problem, a cheaper model to implement the approved plan, and independent models to review the result. The more clearly you own the architecture, the more useful LLMs become for software development.