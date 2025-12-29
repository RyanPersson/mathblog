---
title: "Intersection"
description: "The set of elements common to all of the given sets"
---

Let $A$ and $B$ be {{< knowl id="set" text="sets" >}}. Their **intersection** is
$$
A \cap B = \{x : x \in A \text{ and } x \in B\}.
$$
More generally, for an indexed family $(A_i)_{i\in I}$ of sets, the intersection is
$$
\bigcap_{i\in I} A_i = \{x : \forall i\in I,\; x \in A_i\}.
$$

Intersection is related to {{< knowl id="union" text="union" >}} by De Morgan-type dualities once a {{< knowl id="complement" text="complement" >}} is fixed.

**Examples:**
- $\{1,2\} \cap \{2,3\} = \{2\}$.
- $[0,2] \cap (1,3) = (1,2]$.
- If $A_i = \mathbb{R}\setminus\{i\}$ for $i\in\{1,2\}$, then $\bigcap_i A_i = \mathbb{R}\setminus\{1,2\}$.
