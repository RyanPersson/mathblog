---
title: "Partial order (poset)"
description: "A relation that is reflexive, antisymmetric, and transitive"
---

Let $P$ be a {{< knowl id="set" text="set" >}} and let $\le$ be a {{< knowl id="relation" text="relation" >}} on $P$. Then $\le$ is a **partial order** if:
- (Reflexive) $\forall x\in P,\; x\le x$.
- (Antisymmetric) $\forall x,y\in P,\; (x\le y \text{ and } y\le x)\Rightarrow x=y$.
- (Transitive) $\forall x,y,z\in P,\; (x\le y \text{ and } y\le z)\Rightarrow x\le z$.

A set equipped with a partial order is called a **partially ordered set** (or **poset**). A {{< knowl id="total-order" text="total order" >}} is a partial order in which every pair of elements is comparable.

**Examples:**
- $(\mathbb{R},\le)$ with the usual order is a partial order (in fact a total order).
- On the power set of $X$, the subset relation $\subseteq$ is a partial order.
- Divisibility on $\mathbb{N}$, where $a\le b$ means $a$ divides $b$, is a partial order (not total).
