---
title: "Multiple (Riemann) integral over a rectangle"
description: "The Riemann integral of a function on a rectangle in R^n, defined via partitions and Riemann sums"
---

Let $R=\prod_{j=1}^n [a_j,b_j]\subseteq \mathbb{R}^n$ be a rectangle and let $f:R\to\mathbb{R}$ be bounded.

A **partition** $P$ of $R$ is a finite collection of subrectangles whose union is $R$ and whose interiors are pairwise disjoint (typically produced by partitioning each coordinate interval). For each subrectangle $Q\subseteq R$, let
$M_Q=\sup_{x\in Q} f(x), \qquad m_Q=\inf_{x\in Q} f(x), \qquad \operatorname{vol}(Q)=\prod_{j=1}^n (\text{side length in coordinate }j).$
Define the **upper sum** and **lower sum**
$U(f,P)=\sum_{Q\in P} M_Q\,\operatorname{vol}(Q), \qquad L(f,P)=\sum_{Q\in P} m_Q\,\operatorname{vol}(Q).$

The function $f$ is **Riemann integrable over $R$** if
$\sup_P L(f,P)=\inf_P U(f,P),$
and in that case the common value is the **multiple (Riemann) integral** of $f$ over $R$, denoted
$\int_R f(x)\,dx.$

Multiple Riemann integrals generalize the usual one-dimensional integral to higher dimensions and are the starting point for {{< knowl id="fubini-theorem-for-riemann-integrals" text="Fubini's theorem" >}} and {{< knowl id="change-of-variables-formula-for-multiple-integrals" text="change-of-variables" >}}.

**Examples:**
- If $f(x)=1$ on $R$, then $\int_R 1\,dx=\operatorname{vol}(R)=\prod_{j=1}^n (b_j-a_j)$.
- If $R=[0,1]\times[0,1]$ and $f(x,y)=x+y$, then $\int_R (x+y)\,d(x,y)=\frac{1}{2}+\frac{1}{2}=1$.
- The indicator function of a rectangle is Riemann integrable; more generally, indicators of sets with sufficiently "small" boundary are integrable.
