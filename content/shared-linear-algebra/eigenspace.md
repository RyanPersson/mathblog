---
title: "Eigenspace"
description: "The subspace of vectors scaled by a linear operator with a fixed eigenvalue"
---

Let $T$ be a {{< knowl id="linear-operator" text="linear operator" >}} $T:V\to V$ over a field $F$, and let $\lambda\in F$. The **$\lambda$-eigenspace** of $T$ is the subset
$$
E_\lambda(T)=\{v\in V : T(v)=\lambda v\}.
$$
This is a **subspace** of $V$: it contains $0$, and it is closed under addition and scalar multiplication (because $T$ is linear).

The scalar $\lambda$ is an {{< knowl id="eigenvalue" text="eigenvalue" >}} of $T$ if and only if $E_\lambda(T)$ contains a nonzero vector. Equivalently,
$$
E_\lambda(T)=\ker(T-\lambda I),
$$
where $I$ is the {{< knowl id="identity-function" text="identity map" >}} on $V$ and $\ker(S)=\{v:S(v)=0\}$ denotes the kernel (null space) of a linear map $S$.

**Examples:**
- If $T=\lambda I$ on $V$, then $E_\lambda(T)=V$ and $E_\mu(T)=\{0\}$ for $\mu\neq\lambda$.
- For $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ on $F^2$, $E_1(A)=\{(x,0):x\in F\}$.
- For the rotation of $\mathbb{R}^2$ by $90^\circ$, $E_\lambda(T)=\{0\}$ for every real $\lambda$ (no real eigenvalues).
