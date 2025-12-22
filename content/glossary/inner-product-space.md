---
title: "Inner Product Space"
description: "A vector space equipped with an inner product"
---

An **inner product space** is a {{< knowl id="vector-space" text="vector space" >}} $V$ over $\mathbb{R}$ or $\mathbb{C}$ equipped with an {{< knowl id="inner-product" text="inner product" >}} $\langle \cdot, \cdot \rangle$.

The inner product induces a {{< knowl id="norm" text="norm" >}} $\|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$, making every inner product space a normed space.

**Key properties**:
- **Cauchy-Schwarz inequality**: $|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \|\mathbf{v}\|$
- **Parallelogram law**: $\|\mathbf{u} + \mathbf{v}\|^2 + \|\mathbf{u} - \mathbf{v}\|^2 = 2\|\mathbf{u}\|^2 + 2\|\mathbf{v}\|^2$

**Examples**: $\mathbb{R}^n$ with dot product, $L^2$ spaces, sequence spaces $\ell^2$.
