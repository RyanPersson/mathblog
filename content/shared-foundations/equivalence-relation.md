---
title: "Equivalence relation"
description: "A relation that is reflexive, symmetric, and transitive"
---

Let $A$ be a {{< knowl id="set" text="set" >}} and let $\sim$ be a {{< knowl id="relation" text="relation" >}} on $A$ (so $\sim \subseteq A\times A$, the {{< knowl id="cartesian-product" text="Cartesian product" >}}). Then $\sim$ is an **equivalence relation** if it satisfies:
- (Reflexive) $\forall a\in A,\; a\sim a$.
- (Symmetric) $\forall a,b\in A,\; a\sim b \Rightarrow b\sim a$.
- (Transitive) $\forall a,b,c\in A,\; (a\sim b \text{ and } b\sim c)\Rightarrow a\sim c$.

Equivalence relations are exactly the relations that partition $A$ into {{< knowl id="equivalence-class" text="equivalence classes" >}}; the set of classes is the {{< knowl id="quotient-set" text="quotient set" >}}.

**Examples:**
- Equality $=$ on any set $A$ is an equivalence relation.
- On $\mathbb{Z}$, define $a\sim b$ iff $a-b$ is divisible by $n$ (congruence modulo $n$).
- On $\mathbb{R}$, define $x\sim y$ iff $x-y\in\mathbb{Z}$.
