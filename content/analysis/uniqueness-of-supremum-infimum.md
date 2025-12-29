---
title: "Uniqueness of supremum and infimum"
description: "A set has at most one least upper bound and at most one greatest lower bound"
---

Let $E\subseteq\mathbb{R}$.

A real number $s$ is the **{{< knowl id="supremum" text="supremum" >}}** of $E$ if:
- $x\le s$ for all $x\in E$ (so $s$ is an {{< knowl id="upper-bound" text="upper bound" >}}), and
- for every $u\in\mathbb{R}$, if $x\le u$ for all $x\in E$ then $s\le u$ (so $s$ is the least upper bound).

**Uniqueness of supremum**: If $s$ and $t$ are both $\sup E$, then $s=t$.

**Uniqueness of infimum**: If $s$ and $t$ are both $\inf E$, then $s=t$.

Uniqueness is needed to treat $\sup E$ and $\inf E$ as well-defined numbers rather than as "choices."

**Proof sketch**:
If $s$ and $t$ are both suprema, then since $t$ is an upper bound, the "least upper bound" property of $s$ gives $s\le t$. Symmetrically $t\le s$. Hence $s=t$. The {{< knowl id="infimum" text="infimum" >}} case is identical (or reduce to supremum via $\inf E=-\sup(-E)$).
