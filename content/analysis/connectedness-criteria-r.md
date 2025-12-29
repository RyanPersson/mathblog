---
title: "Connectedness criteria in R"
description: "A subset of the real line is connected iff it contains all points between any two of its points"
---

Let $E\subseteq \mathbb{R}$ with the usual metric.

**Proposition (interval criterion)**: The following are equivalent:
- $E$ is {{< knowl id="connected-set" text="connected" >}}.
- For all $a,b\in E$ with $a<b$, one has $[a,b]\subseteq E$ (equivalently $(a,b)\subseteq E$).
- $E$ is an {{< knowl id="interval" text="interval" >}} in the order-theoretic sense (possibly degenerate: a point, empty set, open/closed/half-open intervals, rays, or all of $\mathbb{R}$).

This is the special feature of $\mathbb{R}$ that makes connectedness extremely concrete and powers the {{< knowl id="intermediate-value-theorem" text="intermediate value theorem" >}}.

**Proof sketch**:
If $E$ fails the "between points" property, pick $a<b$ in $E$ and $c\in(a,b)\setminus E$; then $E\cap(-\infty,c)$ and $E\cap(c,\infty)$ separate $E$. Conversely, if $E$ is an interval, any alleged separation would force a gap, contradicting that the interval contains all intermediate points.
