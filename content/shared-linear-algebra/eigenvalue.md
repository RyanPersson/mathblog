---
title: "Eigenvalue"
description: "A scalar for which a linear operator has a nonzero fixed direction"
---

Let $T$ be a {{< knowl id="linear-operator" text="linear operator" >}} $T:V\to V$ over a field $F$. A scalar $\lambda\in F$ is an **eigenvalue** of $T$ if there exists a nonzero vector $v\in V$ such that
$$
T(v)=\lambda v.
$$
Any such $v\neq 0$ is an {{< knowl id="eigenvector" text="eigenvector" >}} of $T$ with eigenvalue $\lambda$.

Eigenvalues can be detected via the {{< knowl id="characteristic-polynomial" text="characteristic polynomial" >}} (over a field where that polynomial splits). The set of eigenvalues can depend on the base field; passing from $\mathbb{R}$ to the {{< knowl id="complex-numbers" text="complex numbers" >}} can create eigenvalues that were not previously available.

**Examples:**
- If $T=\lambda I$ (scalar multiplication) on $F^n$, then $\lambda$ is an eigenvalue and every nonzero vector is an eigenvector.
- The rotation of $\mathbb{R}^2$ by $90^\circ$ has no real eigenvalues; viewed over $\mathbb{C}^2$ it has eigenvalues $i$ and $-i$.
- The matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ (acting on $F^2$) has eigenvalue $1$.
