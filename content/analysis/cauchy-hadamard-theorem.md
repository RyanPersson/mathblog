---
title: "Cauchy–Hadamard Theorem"
description: "Gives the radius of convergence of a power series via a limsup of nth roots"
---

**Cauchy–Hadamard Theorem**: Consider the power {{< knowl id="series" text="series" >}}
$
\sum_{n=0}^\infty a_n (x-x_0)^n
$
with $a_n\in\mathbb{R}$ or $\mathbb{C}$. Define
$
L=\limsup_{n\to\infty}\sqrt[n]{|a_n|}\in[0,\infty].
$
Then the radius of convergence $R$ is
$
R=\frac{1}{L},
$
with the conventions $1/0=\infty$ and $1/\infty=0$. The series {{< knowl id="absolutely-convergent-series" text="converges absolutely" >}} for $|x-x_0|<R$ and {{< knowl id="divergent-series" text="diverges" >}} for $|x-x_0|>R$.

This theorem is the standard quantitative description of where a power series defines a function.

**Proof sketch**:
Apply the {{< knowl id="root-test" text="root test" >}} to the term $a_n(x-x_0)^n$. The $n$th root of its magnitude is $\sqrt[n]{|a_n|}\,|x-x_0|$, whose {{< knowl id="limit-superior-lim-sup" text="limsup" >}} is $L|x-x_0|$. The root test yields convergence when $L|x-x_0|<1$ and divergence when $L|x-x_0|>1$.
