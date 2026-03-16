---
title: "How I Write Software With Llms"
slug: how-i-write-software-with-llms
keyword: "how i write software with llms"
keyword_type: 教程词
created_at: 2026-03-16T22:06:15.166680+00:00
reference_links:
  - https://www.stavros.io/posts/how-i-write-software-with-llms/
---

When people ask me about **how i write software with llms**, the most useful answer is not “I prompt better.” It is that I treat LLMs less like magic autocomplete and more like a structured software team. That framing comes through clearly in Stavros’s March 10, 2026 post, “[How I write software with LLMs](https://www.stavros.io/posts/how-i-write-software-with-llms/),” which is valuable because it stays close to actual delivery work: planning, implementation, review, and failure modes.

What makes the piece worth revisiting is that it does not argue that coding skill is obsolete. Instead, it argues that the center of gravity has moved. The human contribution is no longer “type every line by hand,” but “shape architecture, define constraints, and reject bad decisions before they harden into the codebase.” That is the most practical starting point for anyone looking for an **llm software development guide** instead of another abstract debate about whether LLMs are good or bad.

## Background

The source article opens with a blunt claim: the author does not care about the joy of programming for its own sake, but about making things. LLMs matter because they reduce the distance between an idea and working software. In that account, recent model quality made a real difference. Stavros says earlier generations of models still required line-by-line checking, then function-level checking, while the current generation has pushed his supervision upward toward architecture and planning.

That shift is important because it explains why some developers get good outcomes and others get chaos. If you use an LLM as a faster typist, you may get faster code but also faster mistakes. If you use it inside a disciplined workflow, the model becomes an amplifier for decisions you already understand. In the post, that distinction is tied directly to domain familiarity: projects in familiar stacks hold together, while projects in unfamiliar technologies can still turn into a mess of compounding bad choices.

The article also grounds this in real projects rather than toy scripts. Stavros describes building an assistant, a voice-note device, an art clock, and an infinite multiplayer canvas with LLM support. Whether or not a reader would build the same things, the point is concrete: this is not a workflow meant only for demo apps. It is a way to manage real software work while staying close to how the system is put together.

## Why this matters

The biggest lesson in **how to use llms for coding** is not speed. It is defect control. Stavros explicitly says the appeal is a low defect rate without losing understanding of the whole system. That matters more than raw output volume, because large codebases do not fail when a model writes too slowly. They fail when every new change drifts further away from coherent architecture.

This is also why the article is more useful than generic “AI coding tips.” It makes a falsifiable claim about where human skill still matters. The author argues that engineering skill has not disappeared; it has moved toward architecture, system boundaries, and product judgment. In other words, the human still owns the shape of the software, even when the model produces most of the text.

For a developer reading in 2026, that is a practical reframing. The best **developer llm workflow 2026** is probably not a single super-prompt or one favorite model. It is a repeatable system that separates planning from implementation and implementation from review. Once you see that, many day-to-day frustrations with LLM coding start to make sense. If the same model plans, writes, and approves its own work, you are effectively asking one mind to challenge itself. The source article argues that this is weak review, and the logic holds.

## What to pay attention to

The harness matters more than many people admit. In the source post, Stavros says his setup needs two things: access to multiple models from different companies, and custom agents that can call each other. That is not a minor tooling preference. It is the foundation of the workflow.

The multiple-model point is especially strong. He compares one model reviewing its own work to a person agreeing with themselves, which is a memorable way to explain why single-model workflows plateau. Different models have different strengths, and in his experience they catch different issues. The exact model rankings may change quickly, but the underlying pattern is stable: independent review improves quality.

The second point is separation of roles. The article describes three agent types: architect, developer, and reviewers. The architect is the only one the human talks to directly. That agent handles the long back-and-forth needed to clarify goals, tradeoffs, and architecture. The developer then implements a detailed plan with less freedom to improvise. Reviewers examine the plan and diff independently, and disagreements can be escalated back upward.

That role separation is one of the strongest **llm programming workflow best practices** in the article, because it narrows where mistakes are allowed to happen. High-level choices are made in a slow, human-guided phase. Low-level changes are delegated. Review is independent. The system is designed to reduce hidden drift.

## llm software development guide

If I were turning the source article into a compact workflow, I would describe it like this.

Start with a planning conversation, not a coding request. In the source, the architect phase can take up to half an hour of back-and-forth on one feature or bugfix. The goal is not to “prompt better.” The goal is to force clarity: what problem is being solved, what tradeoffs are acceptable, which parts of the codebase should change, and what should explicitly be left out.

Next, require a low-level plan before implementation begins. Stavros says the approved plan reaches the level of files and functions. That matters because it reduces the developer agent’s ability to make accidental architectural choices. A vague prompt invites the model to improvise. A detailed plan tells it where improvisation is not welcome.

Then separate implementation from review. In the post, the developer can be a weaker, cheaper model because the hard thinking happened earlier. Reviewers then inspect the result against both the diff and the plan. This is where multi-model diversity becomes useful: one model may be pedantic, another may surface alternatives, another may be better at judging which feedback is worth acting on.

Finally, watch for the main failure mode. Stavros describes a familiar pattern: when he is not strong enough in the underlying technology, the LLM makes bad choices early, then keeps building on them until the code becomes tangled and repeated fixes make things worse. That is a critical warning for anyone searching **how i write software with llms** and hoping for a universal recipe. LLMs do not remove the need to understand the stack. They can hide your blind spots until the cost is much higher.

The annotated email-support example in the source makes this concrete. The session starts with a broad idea, then the model asks focused design questions about inbound email, outbound transport, threading, HTML parsing, attachments, webhook authentication, and architecture. That exchange is useful because it shows the model contributing structure, while the human still chooses direction. That is the right balance.

## FAQ

### Do I need to be a strong programmer to use this workflow?

You still need technical judgment. The source article argues that the human role has moved upward, not disappeared. If you cannot recognize bad architecture, unfamiliar stack risks, or poor tradeoffs, the LLM can lead you into a mess faster.

### Is one model enough for serious LLM coding?

The source strongly suggests no. Stavros’s setup depends on multiple models because independent review catches issues a single model is likely to miss. Even if your exact toolchain differs, the review principle is sound.

### What is the biggest mistake in LLM software development?

Starting implementation before the plan is sharp enough. In the source workflow, the architect does not begin coding until the human explicitly approves the plan. That slows the front of the process down, but it protects the rest of the project.

### Can this work for unfamiliar technologies?

Only with caution. The article says unfamiliar stacks are where bad decisions pile up. You can still use LLMs there, but you should expect more planning, more verification, and less confidence in early architectural choices.

## What to watch next

The most interesting open question is not whether models will improve. They will. The real question is which parts of this workflow remain durable as model quality rises. The source article already traces a movement from line-level supervision to architecture-level supervision. If that trend continues, the human bottleneck may keep moving upward.

Still, some parts look durable even if models get much better. Independent review is likely to remain useful. Explicit planning is likely to remain useful. Human ownership of tradeoffs is likely to remain useful. Software fails in context-specific ways, and context is where humans still have the clearest advantage.

## Final takeaway

The best answer to **how i write software with llms** is not “I let the model code for me.” It is “I use LLMs inside a workflow that preserves architectural control.” Stavros’s article is useful because it shows that quality comes from structure: one agent plans with you, another implements, others review, and you stay responsible for the decisions that shape the system. If you want an **llm software development guide** that holds up in real projects, start there.