---
title: "How I Write Software With Llms"
slug: how-i-write-software-with-llms
keyword: "how i write software with llms"
keyword_type: 教程词
created_at: 2026-03-25T13:06:06.732046+00:00
reference_links:
  - https://www.stavros.io/posts/how-i-write-software-with-llms/
---

If you want a concrete answer to how i write software with llms, the most useful starting point is not prompt trickery. It is workflow design.

That is what makes Stavros’ March 10, 2026 post interesting. He does not present LLMs as magical replacements for software judgment. He presents them as collaborators inside a structured process: one model helps shape architecture, another implements, and separate models review. The result, in his telling, is not less ownership over the codebase. It is a shift in where ownership matters most.

## Background

The post begins with a blunt premise: the author cares more about making things than about the act of programming itself. LLMs matter to him because they make building feel fast and open-ended again. That framing is important, because it changes the question from “Can an LLM code?” to “How do I organize software work so the model helps without taking the project off the rails?”

He argues that recent models changed the practical ceiling. Earlier generations required close inspection at the line level, then at the function level. In his view, newer models are good enough that the human role has moved upward, toward architecture, tradeoffs, and usability. That does not mean expertise is optional. In fact, the post says the opposite: when he knows the underlying technology well, the code stays maintainable for weeks and grows into large real projects. When he does not, the project degrades quickly because bad decisions compound.

That distinction gives the article its backbone. The workflow is not “tell the model to build everything.” It is “keep the human at the level where mistakes are most expensive.”

He also makes a point of listing real projects built this way rather than toy examples. They include Stavrobot, a security-focused personal assistant; Middle, a voice-note pendant that transcribes and forwards audio; Sleight of hand, an intentionally unsettling wall clock; and Pine Town, an infinite multiplayer drawing meadow. Whether or not a reader would build those exact things, the examples do useful work: they show that the workflow is meant for maintained software, not one-off demos.

## Why this matters

The most valuable idea in the article is that LLM-assisted development is not one skill. It is several skills, and they map to different stages of software work.

The author’s claim is not simply that models write code faster. It is that they reduce defects when used inside a system that separates planning, implementation, and review. He says he can still understand the whole system while letting models produce large amounts of code. That is a meaningful middle ground between two weak positions: writing everything manually out of principle, or delegating everything and hoping the result holds together.

This matters because many teams get stuck on the wrong debate. They argue about whether LLMs are “good” or “bad” at coding in the abstract. The post is more practical. It suggests that output quality depends heavily on how the work is partitioned. If one model plans and the same model reviews its own work, you are not really reviewing anything. If a cheaper model gets a precise plan with little room for architectural improvisation, it can still be effective at implementation. If different models critique the diff independently, you get more varied feedback.

There is also a quieter point here about cost and leverage. Stavros uses a strong model for reasoning-heavy planning and a cheaper model for code generation. That is not only a budget optimization. It reflects a belief that planning errors are more expensive than implementation errors. For software development, that is often true.

## What to pay attention to

The harness comes first. In the post, the tooling itself has to support two capabilities: multiple models from different companies, and agents that can call each other. Everything else is secondary. That is a sharp filter, and it explains why he prefers a harness like OpenCode rather than a single-vendor environment. The reason is straightforward: reviews are better when another model, with different biases and strengths, inspects the work.

From there, the workflow is split into three roles.

The architect is the only agent the author talks to directly. This model needs to be strong, because its job is not to autocomplete code but to reason through goals, constraints, and tradeoffs. He describes spending significant time in back-and-forth discussion, sometimes up to half an hour, until the plan is specific at the level of files and functions. He also imposes a simple but revealing control: the architect should not start implementation until he explicitly says “approved.” That tells you something about the failure mode he is guarding against. The danger is not only wrong code. It is premature confidence.

The developer can be weaker and cheaper because the plan has already narrowed the problem. Its job is to implement, not redesign. Then reviewers inspect the plan and diff independently. He says he always includes Codex as a reviewer, sometimes Gemini, and for important work also Opus. The architect then decides which review comments are worth acting on.

What I find most useful is the author’s definition of human ownership. He says he often redirects the model toward patterns already present in the codebase, because the model suggests ideas that might be reasonable elsewhere but are wrong for this project. That is exactly the kind of intervention that tends to keep a codebase coherent over time.

The real-session example at the end makes the workflow less abstract. When adding email support to Stavrobot, the initial exchange is not a code dump. It is design clarification: inbound path, outbound path, use case, architecture, HTML handling, thread tracking, and attachments. The proposed plan then gets concrete quickly: use a webhook, parse raw email server-side with `mailparser`, send outbound mail through SMTP with `nodemailer`, add webhook authentication, require a subject line, and explicitly skip features like email threading and bounce handling for now. That last part matters too. Good LLM use is not just expansion. It is controlled scope.

## FAQ

### Is this article saying I can stop understanding code if I use LLMs?

No. The source argues almost the reverse. The author says his software holds up when he understands the technology and can steer architecture. When he does not, bad choices pile up and the project becomes harder to recover. The practical lesson is that LLMs reduce some kinds of manual effort, but they increase the value of system-level judgment.

### Why not just use one strong model for everything?

Because the post treats review as a genuine second opinion. A model reviewing its own work tends to share the same assumptions. Using separate models for planning, implementation, and review creates useful disagreement. It also lets you reserve the most expensive model for the stage where reasoning quality matters most.

### What should I copy first from this workflow?

Start with the role split, not the exact tools. You do not need the same harness or model mix to learn from the pattern. One agent should help define the plan. Another should implement against that plan. At least one separate reviewer should inspect the diff. If you skip that structure, you lose much of what makes this approach reliable.

### What is the biggest risk in how i write software with llms?

The failure mode described in the source is architectural drift in technologies you do not understand well enough. If the model makes an early poor decision and you do not catch it, later changes stack on top of that weakness. Eventually the system gets tangled, and each attempted fix makes things worse. That is why planning and review carry so much weight in the article.

## What to watch next

The most interesting open question is not whether models will improve. They obviously will. The more interesting question is which parts of this workflow will remain human-led.

In the post, the author notes that the review burden has already moved upward over time, from lines to functions to architecture. If that trend continues, the boundary may shift again. But even inside his optimistic framing, one thing is stable: software still needs someone to decide what tradeoffs are acceptable, what fits the codebase, and when a suggestion is technically correct but strategically wrong.

That is also why the article feels more durable than a list of prompt tips. Specific models will change. Harnesses will change. The need for scoped plans, independent review, and active human steering probably will not.

## Final takeaway

The clearest lesson from this source is that how i write software with llms is really a question about operating model, not just model quality. Stavros’ workflow works because it separates architecture, implementation, and review, uses different models for different jobs, and keeps the human responsible for the decisions that shape the system. If you want more reliable LLM-assisted software development, that is the thread worth following.