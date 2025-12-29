---
title: "Union"
description: "The set of elements that belong to at least one of the given sets"
---

Let $A$ and $B$ be {{< knowl id="set" text="sets" >}}. Their **union** is
$$
A \cup B = \{x : x \in A \text{ or } x \in B\}.
$$
More generally, for an indexed family $(A_i)_{i\in I}$ of sets, the union is
$$
\bigcup_{i\in I} A_i = \{x : \exists i\in I \text{ with } x \in A_i\}.
$$

Union is dual to {{< knowl id="intersection" text="intersection" >}} and interacts with {{< knowl id="subset" text="subset" >}} via monotonicity: if $A \subseteq B$ then $A \cup C \subseteq B \cup C$.

**Examples:**
- $\{1,2\} \cup \{2,3\} = \{1,2,3\}$.
- $(0,1) \cup (1,2) = (0,2)\setminus\{1\}$.
- If $A_i = \{i\}$ for $i\in\{1,2,3\}$, then $\bigcup_{i} A_i = \{1,2,3\}$.
