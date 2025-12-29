---
title: "Principle of mathematical induction"
description: "A proof principle for statements indexed by ℕ: base case plus inductive step implies all cases"
---

The **principle of mathematical induction** says:

Let $P(n)$ be a statement for each $n\in\mathbb{N}$. If
1. (Base case) $P(0)$ is true, and
2. (Inductive step) for every $n\in\mathbb{N}$, $P(n)\Rightarrow P(n+1)$,
then $P(n)$ is true for all $n\in\mathbb{N}$.

Induction is equivalent (over basic set theory) to the {{< knowl id="well-ordering-principle" text="well-ordering principle for ℕ" >}}: every nonempty {{< knowl id="subset" text="subset" >}} of $\mathbb{N}$ has a least element.
