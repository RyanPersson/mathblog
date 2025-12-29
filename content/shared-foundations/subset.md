---
title: "Subset"
description: "A set A is a subset of B if every element of A is an element of B"
---

Let $A$ and $B$ be {{< knowl id="set" text="sets" >}}. We say that **$A$ is a subset of $B$**, written $A \subseteq B$, if
$$
\forall x\,(x \in A \Rightarrow x \in B).
$$

The subset relation is a basic way to compare sets; it also underlies the {{< knowl id="partial-order" text="partial order" >}}
$\subseteq$ on collections of subsets.

**Examples:**
- $\{1,2\} \subseteq \{1,2,3\}$.
- $\emptyset \subseteq A$ for every set $A$.
- $A \subseteq A$ for every set $A$.
- $\{1,2,3\} \nsubseteq \{1,2\}$ since $3 \in \{1,2,3\}$ but $3 \notin \{1,2\}$.
