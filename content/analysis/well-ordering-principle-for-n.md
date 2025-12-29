---
title: "Well-ordering principle for N"
description: "Every nonempty subset of the natural numbers has a least element"
---

**Well-ordering principle for $\mathbb{N}$**: If $S\subseteq \mathbb{N}$ is nonempty, then there exists $m\in S$ such that $m\le n$ for all $n\in S$.

This principle is equivalent (in standard foundations) to {{< knowl id="principle-of-mathematical-induction" text="mathematical induction" >}} and is often used to justify "choose the smallest counterexample" arguments.

**Proof sketch** *(optional)*:
One shows that if a nonempty set $S\subseteq\mathbb{N}$ had no least element, then by induction no natural number could belong to $S$, contradicting nonemptiness.
