---
title: "Uniqueness of limits"
description: "A convergent sequence in a metric space has only one limit"
---

**Uniqueness of limits**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $(x_n)$ be a sequence in $X$. If $x_n\to x$ and $x_n\to y$, then $x=y$.

This lemma is a basic structural fact about metric convergence and is used everywhere (for example, to identify a limit by proving two different candidate limits).

**Proof sketch**:
Assume $x\neq y$, so $d(x,y)>0$. Let $\varepsilon=d(x,y)/3$. For large $n$, we have $d(x_n,x)<\varepsilon$ and $d(x_n,y)<\varepsilon$. Then by the {{< knowl id="triangle-inequality" text="triangle inequality" >}},
$
d(x,y)\le d(x,x_n)+d(x_n,y)<2\varepsilon=\frac{2}{3}d(x,y),
$
a contradiction.
