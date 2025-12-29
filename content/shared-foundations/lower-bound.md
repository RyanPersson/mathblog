---
title: "Lower bound"
description: "An element l with l≤s for every s in a subset S of a poset"
---

Let $(P,\le)$ be a {{< knowl id="partial-order" text="partially ordered set" >}} and let $S\subseteq P$ be a {{< knowl id="subset" text="subset" >}}. An element $l\in P$ is a **lower bound** of $S$ if
$$
\forall s\in S,\; l\le s.
$$

Lower bounds are dual to upper bounds. In ordered settings, one often asks whether a *greatest* lower bound exists (the {{< knowl id="infimum" text="infimum" >}}).

**Examples:**
- In $(\mathbb{R},\le)$, the number $0$ is a lower bound of $(0,1)$ but is not an element of $(0,1)$.
- In $(\mathcal{P}(X),\subseteq)$, the intersection of a family of subsets is a lower bound of that family.
- In $(\mathbb{Z},\le)$, the set $\{n\in\mathbb{Z}: n\ge 0\}$ has no lower bound.
