---
title: "Uniform convergence implies pointwise convergence"
description: "Uniform convergence is stronger than pointwise convergence"
---

**Corollary**: Let $X$ be a set and let $(f_n)$ be functions $f_n:X\to Y$ into a {{< knowl id="metric-space" text="metric space" >}} $(Y,d)$. If $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $X$, then $f_n\to f$ {{< knowl id="pointwise-convergence" text="pointwise" >}} on $X$; i.e., for every $x\in X$,
$
f_n(x)\to f(x).
$

**Connection to parent theorem**:
Uniform convergence means $\sup_{x\in X} d(f_n(x),f(x))\to 0$. In particular, for each fixed $x$, $d(f_n(x),f(x))\le \sup_X d(f_n,f)\to 0$.
