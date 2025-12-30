---
title: "Characteristic Polynomial"
description: "The determinant polynomial det(tI - T) attached to a finite-dimensional linear operator"
---

Let $T$ be a {{< knowl id="linear-operator" text="linear operator" >}} on a finite-dimensional vector space $V$ over a field $F$, and let $n=\dim(V)$. The **characteristic polynomial** of $T$ is
$$
\chi_T(t)=\det(tI-T)\in F[t],
$$
where $\det$ is the {{< knowl id="determinant" text="determinant" >}} and $F[t]$ is the {{< knowl id="polynomial-ring" section="algebra-rings" text="polynomial ring" >}} in one indeterminate $t$ over $F$. The polynomial $\chi_T(t)$ is monic of degree $n$.

Over a field in which $\chi_T$ splits, the roots of $\chi_T$ are precisely the {{< knowl id="eigenvalue" text="eigenvalues" >}} (with multiplicities). The {{< knowl id="cayley-hamilton-theorem" text="Cayley-Hamilton theorem" >}} says that $T$ satisfies its own characteristic polynomial.

**Examples:**
- For $A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}$, $\chi_A(t)=t^2-(a+d)t+(ad-bc)$.
- If $A$ is diagonal with diagonal entries $\lambda_1,\dots,\lambda_n$, then $\chi_A(t)=\prod_{i=1}^n (t-\lambda_i)$.
- For the nilpotent Jordan block $J=\begin{pmatrix}0&1&0&\cdots&0\\ 0&0&1&\cdots&0\\ \vdots& &\ddots&\ddots&\vdots\\ 0&\cdots&0&0&1\\ 0&\cdots&\cdots&0&0\end{pmatrix}$, one has $\chi_J(t)=t^n$.
