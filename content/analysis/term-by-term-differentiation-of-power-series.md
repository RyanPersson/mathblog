---
title: "Term-by-term differentiation of power series"
description: "Inside the radius of convergence, a power series can be differentiated term-by-term"
---

**Term-by-term differentiation of power series**: Let
$
f(x)=\sum_{n=0}^\infty a_n (x-x_0)^n
$
have radius of convergence $R>0$. Define the derived {{< knowl id="series" text="series" >}}
$
\sum_{n=1}^\infty n a_n (x-x_0)^{n-1}.
$
Then:
- the derived series has the same radius of convergence $R$, and
- for every $|x-x_0|<R$, the function $f$ is {{< knowl id="differentiability-one-variable" text="differentiable" >}} and
  $
  f'(x)=\sum_{n=1}^\infty n a_n (x-x_0)^{n-1}.
  $

This theorem explains why power series define real-analytic (or complex-analytic) functions on their domain of convergence.

**Proof sketch**:
Fix $r<R$. On $|x-x_0|\le r$, both the original series and the derived series {{< knowl id="uniform-convergence-of-a-series-of-functions" text="converge uniformly" >}} (use {{< knowl id="weierstrass-m-test" text="M-test" >}}). Use the {{< knowl id="uniform-convergence-and-differentiation-theorem" text="uniform convergence of the derived series" >}} to control {{< knowl id="difference-quotient" text="difference quotients" >}} and justify exchanging limit and summation, yielding the {{< knowl id="derivative" text="derivative" >}} formula for $|x-x_0|<R$.
