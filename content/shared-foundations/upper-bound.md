---
title: "Upper bound"
description: "An element u with s≤u for every s in a subset S of a poset"
---

Let $(P,\le)$ be a {{< knowl id="partial-order" text="partially ordered set" >}} and let $S\subseteq P$ be a {{< knowl id="subset" text="subset" >}}. An element $u\in P$ is an **upper bound** of $S$ if
$$
\forall s\in S,\; s\le u.
$$

Upper bounds are used to formulate maximality principles such as {{< knowl id="zorns-lemma" text="Zorn's lemma" >}}. In ordered structures like $\mathbb{R}$, one often asks whether a *least* upper bound exists (the {{< knowl id="supremum" text="supremum" >}}).

**Examples:**
- In $(\mathbb{R},\le)$, the number $1$ is an upper bound of $(0,1)$.
- In $(\mathcal{P}(X),\subseteq)$, the union of a family of subsets is an upper bound of that family.
- In $(\mathbb{Z},\le)$, the set $\{n\in\mathbb{Z}: n\le 0\}$ has no upper bound.
