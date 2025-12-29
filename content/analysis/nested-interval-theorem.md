---
title: "Nested Interval Theorem"
description: "A decreasing sequence of closed intervals with lengths going to 0 has a unique common point"
---

**Nested Interval Theorem**: Let $I_n=[a_n,b_n]$ be closed intervals in $\mathbb{R}$ such that
$I_{n+1}\subseteq I_n \quad \text{for all } n,$
and $\lim_{n\to\infty}(b_n-a_n)=0$. Then
$\bigcap_{n=1}^\infty I_n = \{x\}$
for a unique $x\in\mathbb{R}$.

This is a concrete expression of {{< knowl id="completeness-axiom-of-r" text="completeness" >}} and is frequently used to construct real numbers by successive approximation.

**Proof sketch** *(optional)*:
The sequence $(a_n)$ is increasing and bounded above by $b_1$, so it {{< knowl id="convergent-sequence" text="converges" >}} to $x=\sup\{a_n\}$. Similarly, $(b_n)$ decreases and has the same limit because $b_n-a_n\to 0$. Then $x\in I_n$ for all $n$, and uniqueness follows from the shrinking lengths.
