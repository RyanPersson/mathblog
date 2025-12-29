---
title: "Cauchy criterion for convergence in R^k"
description: "A sequence in Euclidean space converges iff it is Cauchy"
---

**Cauchy criterion for convergence in $\mathbb{R}^k$**: A sequence $(x_n)$ in $\mathbb{R}^k$ {{< knowl id="convergent-sequence" text="converges" >}} (with respect to the {{< knowl id="euclidean-norm" text="Euclidean norm" >}}) if and only if it is a {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}}; i.e.,
$x_n\to x \text{ for some } x\in\mathbb{R}^k
\quad\Longleftrightarrow\quad
\forall \varepsilon>0\;\exists N\;\forall m,n\ge N:\ \|x_n-x_m\|<\varepsilon.$

This is the {{< knowl id="complete-metric-space" text="completeness" >}} of Euclidean space and is central to analysis: it allows one to prove convergence by controlling pairwise distances rather than guessing the limit.

**Proof sketch** *(optional)*:
If $x_n\to x$ then $\|x_n-x_m\|\le \|x_n-x\|+\|x_m-x\|$ shows Cauchy. Conversely, if $(x_n)$ is Cauchy, each coordinate sequence is Cauchy in $\mathbb{R}$ and hence convergent; the vector of coordinate limits is the limit in $\mathbb{R}^k$.
