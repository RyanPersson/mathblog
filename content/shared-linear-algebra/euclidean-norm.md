---
title: "Euclidean Norm"
description: "The length function ||x|| = sqrt(x1^2 + ... + xk^2) on R^k"
---

The **Euclidean norm** on {{< knowl id="euclidean-space" text="Euclidean space" >}} $\mathbb{R}^k$ is the function $\|\cdot\|:\mathbb{R}^k\to\mathbb{R}_{\ge 0}$ defined by
$$
\|x\|=\sqrt{x_1^2+\cdots+x_k^2}\quad\text{for }x=(x_1,\dots,x_k).
$$
It can also be expressed in terms of the standard {{< knowl id="inner-product" text="inner product" >}} by $\|x\|=\sqrt{\langle x,x\rangle}$.

The Euclidean norm is compatible with the {{< knowl id="absolute-value" text="absolute value" >}} on $\mathbb{R}$ in the sense that for $k=1$, $\|x\|=|x|$.

**Examples:**
- In $\mathbb{R}^2$, $\|(3,4)\|=5$.
- For the standard basis vector $e_i\in\mathbb{R}^k$ (with a $1$ in the $i$th coordinate and $0$ elsewhere), one has $\|e_i\|=1$.
- The distance between $x,y\in\mathbb{R}^k$ is $\|x-y\|$.
