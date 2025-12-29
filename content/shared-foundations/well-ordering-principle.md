---
title: "Well-ordering principle for ℕ"
description: "Every nonempty subset of ℕ has a least element"
---

**Well-ordering principle for $\mathbb{N}$:** If $S\subseteq\mathbb{N}$ is a {{< knowl id="subset" text="subset" >}} and $S\neq\emptyset$ (see {{< knowl id="empty-set" text="empty set" >}}), then there exists $m\in S$ such that
$$
\forall s\in S,\; m\le s.
$$

This is exactly the statement that $(\mathbb{N},\le)$ is a {{< knowl id="well-ordered-set" text="well-ordered set" >}}. It is equivalent to the {{< knowl id="mathematical-induction" text="principle of mathematical induction" >}}.

**Proof sketch (idea):**
If a nonempty $S\subseteq\mathbb{N}$ had no least element, one can define "$n$ is not in $S$" inductively for all $n$, forcing $S$ to be empty; conversely, well-ordering yields induction by applying least-element arguments to the {{< knowl id="set" text="set" >}} of counterexamples.
