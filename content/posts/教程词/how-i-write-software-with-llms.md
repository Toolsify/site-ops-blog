---
title: "How I Write Software With Llms"
slug: how-i-write-software-with-llms
keyword: "how i write software with llms"
keyword_type: 教程词
created_at: 2026-03-25T13:07:25.522436+00:00
reference_links:
  - https://www.stavros.io/posts/how-i-write-software-with-llms/
---

# How I Write Software With Llms

The clearest recent write-up I have seen on **how i write software with llms** comes from Stavros's March 10, 2026 post, "How I write software with LLMs." What makes it useful is not hype, but operating detail. He is not arguing that coding skill no longer matters. He is describing a practical way to use LLMs so he can ship real projects while still staying in control of architecture, tradeoffs, and quality.

That distinction matters. A lot of discussion around LLMs for coding stays abstract: productivity, vibe coding, replacement anxiety, and tool comparisons. Stavros instead explains a concrete workflow. He says he has used LLMs to build maintained projects he actually uses, including an assistant called Stavrobot, a voice-note device, an art-clock project, and Pine Town. His claim is not that models magically solve software development. His claim is that, with the right process, they can produce low-defect code while leaving the human responsible for system design and judgment.

## Background

The starting point of Stavros's article is personal, and that matters to understanding the rest. He writes that he does not care much about the joy of programming for its own sake. What he enjoys is making things. LLMs changed the equation because they made programming feel more like direct construction and less like typing every implementation detail by hand.

That framing is useful for a **llm software development guide** because it shifts the goal away from "use AI everywhere" and toward "remove friction from shipping." In his telling, the important change is not that LLMs eliminate engineering. It is that engineering effort moves upward. He says he now spends less energy on writing code correctly line by line and more energy on architecture, system boundaries, usability, and choosing the right approach.

He also makes a grounded limitation clear: this works much better when he already understands the technology involved. In areas where he lacks that understanding, bad decisions accumulate and the codebase can still turn into a mess. That is one of the most useful realities in the whole post. It keeps the article from drifting into fantasy.

## Why This Matters

The strongest idea in the source is that good results do not come from one magic prompt. They come from a workflow that treats models as different contributors with different strengths. Stavros says different people get wildly different outcomes from LLMs, and he suspects a lot of that comes from how they work with them.

That is believable because his setup avoids one of the most common traps in **how to use llms for coding**: asking one model to invent, implement, and approve its own work. He argues that a model reviewing code it just wrote is not very useful, because it tends to agree with itself. Instead, he prefers multiple models from different vendors so the review step really becomes a second set of eyes.

He also cares about the harness, not just the base model. In his workflow, the tool needs to support multiple models and custom agents that can call each other. That is not a small detail. It means the operating environment shapes quality just as much as the prompt does. If your tool keeps you inside one provider and one conversational thread, you lose most of the separation that makes his process work.

## What To Pay Attention To

The article is strongest when it explains where human control still belongs. Stavros says he only directly interacts with the architect agent. That agent is the strongest model he has available. He spends time clarifying the goal, discussing tradeoffs, correcting the model, and refining the plan until he is satisfied. In his description, this can take up to half an hour for a single feature or bugfix.

That is the opposite of casual prompting. It is deliberate planning. He even says he tells the architect not to begin until he explicitly says "approved," because some models are overeager and jump into implementation too early. If you want **llm programming workflow best practices**, this is one of the best ones in the post: slow down before code generation starts.

Another point worth noticing is that he writes the agent instructions by hand. He does not think asking an LLM to write its own skill file improves much. The reasoning is simple: process quality comes from human standards and constraints, not from recursively asking the model to define excellence for itself.

Finally, he is explicit about failure modes. When he is not familiar enough with a technology, he may fail to spot weak architectural choices early. Then the LLM keeps building on top of those choices, and the whole thing gets harder to untangle. That is a better warning than generic "AI can hallucinate" advice because it points to the real operational risk: compounding design mistakes.

## Llm Software Development Guide

If I reduce Stavros's article into a practical tutorial thread, the workflow looks like this.

Start with one strong planning model acting as architect. Give it a narrow, concrete goal, such as a bugfix or a specific feature. Then stay in discussion mode long enough to settle scope, constraints, and design choices. The goal is a plan that names likely files, functions, code paths, and tradeoffs, not a vague intention.

Next, hand implementation to a cheaper, more token-efficient developer model. Stavros says this model should have limited leeway. It is there to execute the plan, not to redesign the system. That separation is important because it preserves architectural intent.

After that, send the resulting diff to one or more reviewer models. Stavros says he always uses at least Codex as a reviewer, sometimes adds Gemini, and may add Opus on more important work. The point is diversity. Different models catch different issues, and the architect then decides which review comments actually matter.

His real-session example makes this concrete. In the email-support session for Stavrobot, he begins at a high level. The LLM inspects the codebase, identifies the current message flow pattern, and asks targeted questions: how inbound email should arrive, how outbound mail should be sent, whether the use case is bidirectional conversation or notifications, whether to run in-process or as a separate container, and what to do about HTML, threading, and attachments. Stavros answers those questions, and the plan gets sharper: use a Cloudflare Email worker webhook for inbound mail, SMTP for outbound, process messages in-process, convert email content to markdown, and support attachments. The model then surfaces edge cases like MIME parsing, webhook authentication, subject handling, and which files would likely need changes.

That is a strong example of a **developer llm workflow 2026** because the LLM is not just generating code. It is interrogating the shape of the problem. The human is not writing every line, but is clearly steering policy and architecture.

## FAQ

## Is this just letting AI code everything for you?

No. In the source, the human still owns the important decisions above the function level. Stavros says he often corrects the LLM during planning, rejects suggestions that do not fit the codebase, and chooses which review feedback is worth acting on. The implementation work may be delegated, but responsibility is not.

## Do I need multiple models to copy this workflow?

According to the article, multiple models are a major quality lever, especially for review. Stavros argues that one model reviewing its own work tends to be less useful because it agrees with itself. His setup depends on using different models for planning, implementation, and critique.

## Can this work if I do not know the stack well?

The article says that is where things break down fastest. Stavros reports that unfamiliar technologies make it harder to catch bad architectural choices early, and those choices can snowball. So yes, you can use LLMs in unfamiliar areas, but the source strongly suggests that ignorance at the architecture layer is still expensive.

## What is the most practical lesson for everyday coding?

Treat planning as a real engineering activity. The most transferable lesson in the post is not a tool recommendation. It is the habit of forcing the model to clarify assumptions, options, and edge cases before code is written. That is the part most likely to improve outcomes even if your exact toolchain differs from his.

## What To Watch Next

The most interesting open question after reading the article is not whether LLMs can write code. They clearly can, within the bounds Stavros describes. The bigger question is how much farther the review and architecture boundary will move. He notes that earlier generations required line-by-line checking, later ones shifted review to the function level, and now much of his oversight happens at the architecture level.

Even so, his workflow suggests that the human role is not disappearing so much as being pushed toward design, taste, prioritization, and system coherence. If that trend continues, the best developers may not be the people who type fastest, but the ones who can define clean constraints, recognize weak abstractions early, and run a disciplined multi-model process.

## Final takeaway

If you want a grounded answer to **how i write software with llms**, Stavros's post offers one of the better templates available: use a strong model for architecture, a cheaper model for implementation, different models for review, and keep the human firmly responsible for scope and design. That is what turns LLM coding from a novelty into a usable software development workflow.
