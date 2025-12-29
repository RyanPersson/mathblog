---
title: "Uniform Cauchy implies uniform convergence"
description: "In a complete codomain, uniformly Cauchy function sequences converge uniformly"
---

**Uniform Cauchy implies uniform convergence**: Let $X$ be a set and let $(Y,d)$ be a {{< knowl id="complete-metric-space" text="complete metric space" >}}. If $(f_n)$ is a {{< knowl id="uniform-cauchy-sequence-of-functions" text="uniformly Cauchy" >}} sequence of functions $f_n:X\to Y$, then there exists a function $f:X\to Y$ such that $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $X$.

This lemma is the completeness principle for uniform convergence: the space of bounded functions with the sup metric is complete when the target is complete.

**Proof sketch**:
Fix $x\in X$. Since $(f_n)$ is uniformly Cauchy, the sequence $(f_n(x))$ is {{< knowl id="cauchy-sequence" text="Cauchy" >}} in $Y$, hence {{< knowl id="convergent-sequence" text="converges" >}} to some value $f(x)\in Y$. This defines $f:X\to Y$. To show uniform convergence, use the uniform Cauchy property: given $\varepsilon>0$, choose $N$ so that $d(f_n(x),f_m(x))<\varepsilon$ for all $x$ and $m,n\ge N$, then let $m\to\infty$ to obtain $d(f_n(x),f(x))\le \varepsilon$ uniformly in $x$.
