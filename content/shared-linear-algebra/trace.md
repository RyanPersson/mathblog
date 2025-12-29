---
title: "Trace"
description: "The sum of diagonal entries of a square matrix, invariant under change of basis"
---

Let $F$ be a field and let $A=(a_{ij})$ be an $n\times n$ matrix over $F$. The **trace** of $A$ is
$$
\operatorname{tr}(A)=\sum_{i=1}^n a_{ii}.
$$
If $T$ is a {{< knowl id="linear-operator" text="linear operator" >}} on a finite-dimensional vector space, $\operatorname{tr}(T)$ is defined as the trace of any matrix representing $T$ in a basis; this is independent of the basis.

The trace is encoded in the {{< knowl id="characteristic-polynomial" text="characteristic polynomial" >}}: for an $n\times n$ matrix $A$, the coefficient of $t^{n-1}$ in $\chi_A(t)$ is $-\operatorname{tr}(A)$. Over an algebraic closure, the trace is also the sum of the {{< knowl id="eigenvalue" text="eigenvalues" >}} counted with algebraic multiplicity.

**Examples:**
- $\operatorname{tr}(I_n)=n$ and $\operatorname{tr}(0)=0$.
- For $A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}$, $\operatorname{tr}(A)=a+d$.
- If $P$ is an idempotent projection ($P^2=P$), then $\operatorname{tr}(P)$ equals the dimension of its image (in finite dimensions).
