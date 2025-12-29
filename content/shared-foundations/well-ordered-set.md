---
title: "Well-ordered set"
description: "A totally ordered set in which every nonempty subset has a least element"
---

A **well-ordered set** is a pair $(X,\le)$ where $\le$ is a {{< knowl id="total-order" text="total order" >}} on $X$ such that every nonempty {{< knowl id="subset" text="subset" >}} $S\subseteq X$ has a least element: there exists $m\in S$ with
$$
\forall s\in S,\; m\le s.
$$
Equivalently, every nonempty subset has a minimum (a {{< knowl id="lower-bound" text="lower bound" >}} that belongs to the set).

Well-ordering is the key hypothesis in transfinite recursion and is central in the {{< knowl id="well-ordering-theorem" text="well-ordering theorem" >}}; for $\mathbb{N}$ it is expressed by the {{< knowl id="well-ordering-principle" text="well-ordering principle" >}}.

**Examples:**
- $(\mathbb{N},\le)$ with the usual order is well-ordered.
- $(\mathbb{Z},\le)$ with the usual order is not well-ordered (the subset of negative integers has no least element).
- Any finite totally ordered set is well-ordered.
