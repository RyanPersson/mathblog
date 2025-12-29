---
title: "Uniform convergence implies uniform Cauchy"
description: "A uniformly convergent sequence of functions is uniformly Cauchy"
---

**Uniform convergence implies uniform Cauchy**: Let $X$ be a set and let $(f_n)$ be functions $f_n:X\to (Y,d)$ into a {{< knowl id="metric-space" text="metric space" >}}. If $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $X$, then $(f_n)$ is {{< knowl id="uniform-cauchy-sequence-of-functions" text="uniformly Cauchy" >}}:
$
\forall\varepsilon>0\;\exists N\;\forall m,n\ge N:\ \sup_{x\in X} d(f_n(x),f_m(x))<\varepsilon.
$

This is the Cauchy criterion direction for uniform convergence and is often the easiest way to prove uniform convergence: show uniform Cauchy in a {{< knowl id="complete-metric-space" text="complete" >}} codomain.

**Proof sketch**:
Fix $\varepsilon>0$. Choose $N$ so that $\sup_x d(f_n(x),f(x))<\varepsilon/2$ for all $n\ge N$. Then for $m,n\ge N$,
$
d(f_n(x),f_m(x))\le d(f_n(x),f(x))+d(f(x),f_m(x))<\varepsilon,
$
uniformly in $x$.
