---
title: "Minimal Polynomial"
description: "The monic polynomial of least degree that annihilates a linear operator"
---

Let $T$ be a {{< knowl id="linear-operator" text="linear operator" >}} on a vector space $V$ over a field $F$. The **minimal polynomial** of $T$ is the unique monic polynomial $m_T(t)\in F[t]$ (in the {{< knowl id="polynomial-ring" section="algebra-rings" text="polynomial ring" >}} over $F$) of least degree such that
$$
m_T(T)=0,
$$
where polynomial evaluation is defined by: if $p(t)=a_0+a_1t+\cdots+a_dt^d$, then
$$
p(T)=a_0 I + a_1 T + \cdots + a_d T^d
$$
(with $T^d$ denoting $d$-fold composition and $I$ the identity operator on $V$).

In finite dimensions, $m_T$ always exists and divides the {{< knowl id="characteristic-polynomial" text="characteristic polynomial" >}} $\chi_T$. Existence is guaranteed, for instance, by the {{< knowl id="cayley-hamilton-theorem" text="Cayley-Hamilton theorem" >}} (which provides a nonzero polynomial that annihilates $T$).

**Examples:**
- If $T=I$ on $V$, then $m_T(t)=t-1$.
- If $T$ is nilpotent with $T^k=0$ and $k$ minimal, then $m_T(t)=t^k$.
- If $T$ is diagonalizable with distinct eigenvalues $\lambda_1,\dots,\lambda_r$ (over a splitting field), then $m_T(t)=\prod_{i=1}^r (t-\lambda_i)$.
