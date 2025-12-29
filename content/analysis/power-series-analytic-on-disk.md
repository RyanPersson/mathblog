---
title: "Power series are analytic on their disk of convergence"
description: "Inside the radius of convergence, a power series can be differentiated term-by-term indefinitely"
---

Let
$
f(x)=\sum_{n=0}^\infty a_n (x-x_0)^n
$
be a {{< knowl id="power-series" text="power series" >}} with {{< knowl id="radius-of-convergence" text="radius of convergence" >}} $R>0$.

**Corollary**: For every $x$ with $|x-x_0|<R$, the function $f$ is $C^\infty$ (infinitely {{< knowl id="differentiability-one-variable" text="differentiable" >}}) and for each $k\ge 1$,
$
f^{(k)}(x)=\sum_{n=k}^\infty n(n-1)\cdots(n-k+1)\,a_n (x-x_0)^{n-k}.
$
In particular, the {{< knowl id="taylor-polynomial" text="Taylor series" >}} of $f$ at $x_0$ is exactly the original power series:
$
f(x)=\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n \quad (|x-x_0|<R).
$

**Connection to parent theorem**:
This follows by repeated application of the term-by-term differentiation theorem for power series, which preserves the radius of convergence and gives {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniform convergence" >}} of {{< knowl id="derivative" text="derivatives" >}} on closed balls $|x-x_0|\le r<R$.
