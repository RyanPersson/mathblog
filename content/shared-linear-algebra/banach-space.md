---
title: "Banach Space"
description: "A complete normed vector space"
---

A **Banach space** is a {{< knowl id="vector-space" text="vector space" >}} $V$ equipped with a {{< knowl id="norm" text="norm" >}} $\|\cdot\|$ such that $V$ is **complete** with respect to the induced {{< knowl id="metric" section="analysis" text="metric" >}} $d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\|$.

That is, every Cauchy sequence in $V$ converges to a limit in $V$.

**Examples**:
- $\mathbb{R}^n$ with any $p$-norm
- $L^p$ spaces for $1 \leq p \leq \infty$
- $C([a,b])$, continuous functions on $[a,b]$ with the sup norm

Every {{< knowl id="hilbert-space" text="Hilbert space" >}} is a Banach space, but not conversely.
