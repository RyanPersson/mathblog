---
title: "Determinant"
description: "A scalar invariant of a square matrix or linear operator measuring invertibility and volume scaling"
---

Let $F$ be a {{< knowl id="field" section="algebra-rings" text="field" >}} and let $A=(a_{ij})$ be an $n\times n$ matrix with entries in $F$. The **determinant** of $A$ is the scalar
$$
\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^n a_{i,\sigma(i)},
$$
where $S_n$ is the set of all permutations of $\{1,\dots,n\}$ and $\operatorname{sgn}(\sigma)\in\{+1,-1\}$ is the sign of $\sigma$ (for instance $\operatorname{sgn}(\sigma)=(-1)^{\#\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}}$).

If $T$ is a {{< knowl id="linear-operator" text="linear operator" >}} on a finite-dimensional vector space, $\det(T)$ is defined as the determinant of any matrix representing $T$ in a basis; this does not depend on the choice of basis.

Determinants control invertibility: $\det(A)\neq 0$ if and only if $A$ is invertible. They also define the {{< knowl id="characteristic-polynomial" text="characteristic polynomial" >}} via $\det(tI-A)$.

**Examples:**
- For $A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}$, $\det(A)=ad-bc$.
- If $A$ is upper triangular, then $\det(A)$ is the product of its diagonal entries.
- The rotation matrix $\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$ has determinant $1$.
