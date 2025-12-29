---
title: "Existence of a Basis for Every Vector Space"
description: "Every vector space has a basis; in general this is equivalent to the axiom of choice"
---

**Existence of a Basis for Every Vector Space**: Let $V$ be a {{< knowl id="vector-space" text="vector space" >}} over a field $F$. Then there exists a subset $B\subseteq V$ such that:

- (**Spanning**) Every $v\in V$ can be written as a *finite linear combination* of elements of $B$, i.e. $v=\sum_{i=1}^n a_i b_i$ with $a_i\in F$ and $b_i\in B$.
- (**Linear independence**) If $\sum_{i=1}^n a_i b_i=0$ with $a_i\in F$ and *distinct* $b_i\in B$, then all $a_i=0$.

Such a set $B$ is called a **basis** of $V$.

In full generality, this theorem is equivalent to the {{< knowl id="axiom-of-choice" text="axiom of choice" >}} (and hence also to {{< knowl id="zorns-lemma" text="Zorn's lemma" >}}). The standard proof uses a maximality argument in a {{< knowl id="partial-order" text="partially ordered set" >}}.

**Proof sketch**:
Consider the collection $\mathcal{L}$ of all linearly independent subsets of $V$, ordered by inclusion. Every chain in $\mathcal{L}$ has an upper bound given by its union, so Zorn's lemma gives a maximal linearly independent set $B$. If $B$ did not span $V$, one could add a vector outside its span to get a larger linearly independent set, contradicting maximality. Hence $B$ is both independent and spanning, i.e. a basis.
