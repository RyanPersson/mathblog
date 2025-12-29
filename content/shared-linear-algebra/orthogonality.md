---
title: "Orthogonality"
description: "The relation <u,v> = 0 in an inner product space"
---

In a vector space equipped with an {{< knowl id="inner-product" text="inner product" >}} $\langle\cdot,\cdot\rangle$, two vectors $u$ and $v$ are **orthogonal** if
$$
\langle u,v\rangle=0.
$$
A set $\{v_i\}_{i\in I}$ is **orthogonal** if $\langle v_i,v_j\rangle=0$ for all $i\neq j$, and it is **orthonormal** if it is orthogonal and additionally $\|v_i\|=1$ for all $i$, where $\|v\|=\sqrt{\langle v,v\rangle}$ (compare the {{< knowl id="euclidean-norm" text="Euclidean norm" >}} in $\mathbb{R}^k$).

Orthogonality depends on the chosen inner product; changing the inner product can change which vectors are orthogonal.

**Examples:**
- In {{< knowl id="euclidean-space" text="Euclidean space" >}} $\mathbb{R}^k$ with the standard inner product, the standard basis vectors $e_1,\dots,e_k$ form an orthonormal set.
- In $\mathbb{R}^2$, the vectors $(1,1)$ and $(1,-1)$ are orthogonal for the standard dot product.
- In $\mathbb{C}^2$ with the standard Hermitian inner product, $(1,0)$ is orthogonal to $(0,1)$.
