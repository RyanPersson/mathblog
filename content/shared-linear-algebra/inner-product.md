---
title: "Inner Product"
description: "A positive-definite sesquilinear form defining lengths and angles in a vector space"
---

Let $V$ be a {{< knowl id="vector-space" text="vector space" >}} over $\mathbb{R}$ or over the {{< knowl id="complex-numbers" text="complex numbers" >}} $\mathbb{C}$. An **inner product** on $V$ is a function $\langle\cdot,\cdot\rangle:V\times V\to \mathbb{R}$ (real case) or $\langle\cdot,\cdot\rangle:V\times V\to \mathbb{C}$ (complex case) such that for all $u,v,w\in V$ and all scalars $a,b$:

1. **Linearity in the first argument:** $\langle au+bv,w\rangle=a\langle u,w\rangle+b\langle v,w\rangle$.
2. **Conjugate symmetry:** $\langle v,u\rangle=\overline{\langle u,v\rangle}$, where the bar denotes {{< knowl id="complex-conjugate" text="complex conjugation" >}} (in the real case this reduces to symmetry).
3. **Positive-definiteness:** $\langle v,v\rangle\ge 0$ and $\langle v,v\rangle=0$ if and only if $v=0$.

An inner product induces a norm by $\|v\|=\sqrt{\langle v,v\rangle}$ (compare the {{< knowl id="euclidean-norm" text="Euclidean norm" >}} as the standard example), and it defines {{< knowl id="orthogonality" text="orthogonality" >}} via the condition $\langle u,v\rangle=0$.

**Examples:**
- On {{< knowl id="euclidean-space" text="Euclidean space" >}} $\mathbb{R}^k$, the standard inner product is $\langle x,y\rangle=\sum_{i=1}^k x_i y_i$.
- On $\mathbb{C}^k$, the standard (Hermitian) inner product is $\langle x,y\rangle=\sum_{i=1}^k x_i\,\overline{y_i}$.
- If $A$ is a symmetric positive definite $k\times k$ real matrix, then $\langle x,y\rangle=x^\top A y$ defines an inner product on $\mathbb{R}^k$.
