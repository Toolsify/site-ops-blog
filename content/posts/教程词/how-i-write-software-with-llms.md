---
title: "How I Write Software With Llms"
slug: how-i-write-software-with-llms
keyword: "how i write software with llms"
keyword_type: 教程词
created_at: 2026-03-19T15:43:33.409199+00:00
reference_links:
  - https://www.stavros.io/posts/how-i-write-software-with-llms/
---

The most useful way to answer how i write software with llms is not with slogans about productivity. It is with workflow. In his March 10, 2026 post, [“How I write software with LLMs”](https://www.stavros.io/posts/how-i-write-software-with-llms/), Stavros does exactly that: he explains the harness he uses, the agent roles he assigns, the places where human judgment still matters, and the failure mode he keeps seeing when architectural understanding is weak.

What makes the piece worth studying is its specificity. He is not arguing that LLMs magically replace software engineering. He is arguing that, for him, they have become good enough to help ship real projects with a low defect rate, as long as he stays responsible for architecture, constraints, and tradeoffs. That is a much narrower claim, but it is also much more actionable.

## Background

Stavros starts from a blunt premise: he cares more about making things than about programming for its own sake. LLMs changed his relationship to software because they lowered the cost of turning ideas into working systems. He says that earlier generations of models still required line-by-line or function-level checking, while newer ones have pushed his review effort upward toward architecture.

That shift is the backbone of the article. He is not describing a world where technical skill disappears. He is describing a world where technical skill moves. If you know the stack well, you can guide models toward maintainable choices. If you do not know the stack well, bad decisions compound and the codebase can collapse into a mess.

He grounds that claim in projects he says he built this way, including Stavrobot, the voice-note pendant called Middle, the clock art piece Sleight of Hand, and Pine Town. Whether a reader wants to copy those projects is less important than the point they support: he is talking about maintained, personally useful software, not one-off toy scripts.

The practical setup matters too. His preferred harness is OpenCode, though he notes that the exact tool is less important than two capabilities: access to multiple models from different companies, and support for custom agents that can call each other. That leads directly into the workflow that answers the question of how i write software with llms in a way a reader can actually test.

## Why this matters

The article matters because it rejects two weak extremes. One extreme is “LLMs are just autocomplete.” The other is “LLMs can handle the whole job if you prompt them hard enough.” Stavros lands in the middle. He delegates implementation and review steps aggressively, but he keeps the human in charge of system design.

His workflow uses an architect, a developer, and one to three reviewers. The architect is the only agent he talks to directly, and it is also the strongest model in the chain. That model helps him refine a feature or bugfix until goals, limitations, and tradeoffs are explicit. Only after he approves the plan does the architect write out lower-level tasks and pass the work to a more token-efficient developer model. Reviewers then examine the plan and diff independently.

That structure matters for two reasons. First, it separates planning from coding. He does not ask one model to improvise architecture and implementation in the same breath. Second, it treats review as a genuine second look, not as a model praising its own output. He is explicit that different models have different strengths, and that a different model is more useful for review than simply restarting the same one with an empty context.

For anyone trying to figure out how i write software with llms without losing control of quality, that is the main lesson. The LLM is not your replacement pair programmer in a single chat window. It is a coordinated set of roles, and each role should have a narrower mandate than “build the thing.”

## What to pay attention to

The most important part of the article is not the agent lineup by itself. It is the amount of time he spends shaping the plan. He says the architect phase can take up to half an hour of back-and-forth for a single feature. That is easy to skip when people talk about LLM speed, but it is probably the highest-leverage part of the whole process. He is not merely prompting. He is correcting, narrowing, rejecting, and steering.

That distinction shows up clearly in the real session he includes about adding email support to Stavrobot. He begins with a broad request. The model reads the code, lays out the current channel pattern, and asks focused design questions about inbound email, outbound email, threading, HTML handling, and architecture. He responds with decisions: webhook inbound, SMTP outbound, full bidirectional conversation, in-process handling, markdown conversion, attachments supported. The model then sharpens the plan by surfacing edge cases such as MIME parsing, webhook authentication, subject lines, HTML-only messages, and outbound identity. From there it proposes a design, dependencies, and affected files.

That example is useful because it shows what good LLM collaboration looks like in software development. The model is not valuable because it instantly writes code. It is valuable because it helps expose the decisions that would otherwise stay fuzzy until they become bugs.

There is also a warning embedded in the article. Stavros says his workflow breaks down when he is not familiar enough with the underlying technology to catch bad architectural choices. In that case, the model keeps building on bad foundations, and every attempted fix makes things worse. That is a harder truth than most AI productivity posts admit. LLMs can accelerate strong direction, but they can also accelerate confusion.

So if you want a practical answer to how i write software with llms, pay attention to three things: use different models for different roles, spend serious time on planning, and do not outsource architecture in areas you do not understand.

## FAQ

## Is this article saying I can stop learning software engineering?

No. The source argues almost the opposite. Stavros says his engineering skills did not become irrelevant; they shifted upward toward architecture, system choices, and usability. The more important the design decisions, the more valuable your judgment becomes.

## Why use multiple models instead of one favorite model?

Because review quality improves when the reviewer does not share the same biases as the writer. Stavros compares a model reviewing its own work to a person mostly agreeing with themselves. His workflow uses different models because different strengths and weaknesses produce better criticism.

## What is the real bottleneck in this workflow?

Planning. In the source article, the architect phase is where goals, constraints, and tradeoffs are negotiated until the implementation path is clear. That is slower than asking for code immediately, but it reduces the chance of compounding mistakes later.

## Does this only work for toy projects?

The source argues no. Stavros explicitly lists several real projects he says he built and maintains this way, and he says some have grown to tens of thousands of useful lines of code. The article is careful not to claim that this works equally well in every domain, especially when he lacks technical depth in the stack.

## What is the biggest failure mode?

Weak architectural oversight. When he is not familiar enough with the technology, he says the LLM can make bad decisions early, keep layering on top of them, and eventually create a tangled system that gets worse with each attempted fix.

## What to watch next

The source article is already detailed, but the next thing worth watching is not a new model release. It is whether more developers adopt role-based workflows instead of single-chat improvisation. Stavros suggests that results vary widely between users, which implies that process still matters a lot.

It is also worth watching how far review can move upward. He describes a progression from line-level checking to function-level checking to architecture-level checking. If models continue improving, that boundary may keep moving. But the article does not claim that we are already at the point where human architectural judgment is optional. Right now, his method still depends on it.

That makes the post useful as a tutorial-oriented blog reference rather than a hype piece. It offers a concrete thread a reader can follow, adapt, and test in their own practice.

## Final takeaway

If you want a grounded answer to how i write software with llms, the source points to a disciplined pattern: plan with a strong model, implement with a narrower model, review with different models, and keep human ownership over architecture. The real gain is not that the LLM writes everything. It is that the human can spend more energy on the decisions that matter most.