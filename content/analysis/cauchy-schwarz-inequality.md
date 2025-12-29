---
title: "Cauchy–Schwarz inequality"
description: "The absolute inner product of two vectors is at most the product of their norms"
---

**Cauchy–Schwarz inequality**: In an inner product space $(V,\langle\cdot,\cdot\rangle)$, for all $u,v\in V$,
$
|\langle u,v\rangle|\le \|u\|\,\|v\|,
\qquad \text{where } \|u\|=\sqrt{\langle u,u\rangle}.
$
Moreover, equality holds if and only if $u$ and $v$ are linearly dependent (i.e., one is a scalar multiple of the other).

Cauchy–Schwarz is a central inequality in analysis and linear algebra. It implies the {{< knowl id="triangle-inequality" text="triangle inequality" >}} for the norm induced by an {{< knowl id="inner-product-on-rk" text="inner product" >}} and controls projections and angles.

**Proof sketch**:
If $v=0$ the statement is trivial. Otherwise consider the nonnegative quadratic function in $t\in\mathbb{R}$:
$
0\le \|u-tv\|^2=\langle u-tv,u-tv\rangle=\|u\|^2-2t\langle u,v\rangle+t^2\|v\|^2.
$
Its discriminant must be nonpositive, giving $\langle u,v\rangle^2\le \|u\|^2\|v\|^2$.
