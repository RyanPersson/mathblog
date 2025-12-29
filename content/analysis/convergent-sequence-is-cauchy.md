---
title: "Convergent implies Cauchy"
description: "Every convergent sequence is Cauchy in any metric space"
---

**Convergent implies Cauchy**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $(x_n)$ be a sequence in $X$. If $x_n\to x$ for some $x\in X$, then $(x_n)$ is a {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}}:
$
\forall\varepsilon>0\;\exists N\;\forall m,n\ge N:\ d(x_n,x_m)<\varepsilon.
$

This lemma is a standard one-way implication in {{< knowl id="complete-metric-space" text="completeness" >}} arguments.

**Proof sketch**:
Given $\varepsilon>0$, choose $N$ such that $d(x_n,x)<\varepsilon/2$ for all $n\ge N$. Then for $m,n\ge N$,
$
d(x_n,x_m)\le d(x_n,x)+d(x,x_m)<\varepsilon.
$
