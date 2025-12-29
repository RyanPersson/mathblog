---
title: "Uniform limit theorem for continuity"
description: "A uniform limit of continuous functions is continuous"
---

**Uniform limit theorem for continuity**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $(f_n)$ be a sequence of {{< knowl id="continuity-on-a-set" text="continuous" >}} functions $f_n:X\to\mathbb{R}$ (or into any metric space). If $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $X$, then $f$ is continuous on $X$.

{{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="Uniform convergence" >}} is strong enough to pass continuity through the limit. This is a fundamental reason uniform convergence is preferred over {{< knowl id="pointwise-convergence" text="pointwise convergence" >}} in analysis.

**Proof sketch**:
Fix $x_0\in X$ and $\varepsilon>0$. Choose $N$ such that $\sup_{x\in X} d(f_n(x),f(x))<\varepsilon/3$ for all $n\ge N$. By continuity of $f_N$ at $x_0$, choose $\delta>0$ so that $d(x,x_0)<\delta$ implies $d(f_N(x),f_N(x_0))<\varepsilon/3$. Then
$
d(f(x),f(x_0))\le d(f(x),f_N(x))+d(f_N(x),f_N(x_0))+d(f_N(x_0),f(x_0))<\varepsilon.
$
