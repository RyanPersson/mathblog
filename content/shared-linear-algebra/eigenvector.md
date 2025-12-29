---
title: "Eigenvector"
description: "A nonzero vector scaled by a linear operator"
---

Let $T$ be a {{< knowl id="linear-operator" text="linear operator" >}} $T:V\to V$ over a field $F$. A nonzero vector $v\in V$ is an **eigenvector** of $T$ if there exists a scalar $\lambda\in F$ such that
$$
T(v)=\lambda v;
$$
the corresponding scalar $\lambda$ is an {{< knowl id="eigenvalue" text="eigenvalue" >}} of $T$.

For a fixed $\lambda$, the collection of all eigenvectors with eigenvalue $\lambda$, together with the zero vector, forms the {{< knowl id="eigenspace" text="eigenspace" >}} for $\lambda$.

**Examples:**
- For $T=\lambda I$ on $F^n$, every nonzero vector is an eigenvector with eigenvalue $\lambda$.
- For $T(x,y)=(x,0)$ on $\mathbb{R}^2$, the vectors $(1,0)$ and $(2,0)$ are eigenvectors with eigenvalue $1$, while $(0,1)$ is an eigenvector with eigenvalue $0$.
- For $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ on $F^2$, the vector $(1,0)$ is an eigenvector with eigenvalue $1$, but $(0,1)$ is not an eigenvector.
