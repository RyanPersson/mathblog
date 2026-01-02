---
title: "Norm"
description: "A function measuring the size of vectors"
---

A **norm** on a {{< knowl id="vector-space" text="vector space" >}} $V$ over $\mathbb{R}$ or $\mathbb{C}$ is a function $\|\cdot\|: V \to \mathbb{R}$ satisfying:

1. **Positive definiteness**: $\|\mathbf{v}\| \geq 0$, with $\|\mathbf{v}\| = 0$ iff $\mathbf{v} = \mathbf{0}$
2. **Absolute homogeneity**: $\|a\mathbf{v}\| = |a| \|\mathbf{v}\|$ for all scalars $a$
3. **Triangle inequality**: $\|\mathbf{u} + \mathbf{v}\| \leq \|\mathbf{u}\| + \|\mathbf{v}\|$

Every norm induces a {{< knowl id="metric" section="analysis" text="metric" >}} via $d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\|$.

**Examples**: The $p$-norms on $\mathbb{R}^n$: $\|\mathbf{x}\|_p = \left(\sum_i |x_i|^p\right)^{1/p}$
