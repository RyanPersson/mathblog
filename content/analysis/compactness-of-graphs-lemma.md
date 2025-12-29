---
title: "Compactness of graphs lemma"
description: "The graph of a continuous function over a compact domain is compact"
---

**Compactness of graphs lemma**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $f:K\to Y$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. The **graph** of $f$ is
$
\Gamma_f=\{(x,f(x))\in X\times Y: x\in K\}.
$
Then $\Gamma_f$ is compact in the product metric space $X\times Y$.

This lemma is useful when turning statements about functions into statements about sets, for example in limiting arguments and compactness proofs.

**Proof sketch**:
Define $F:K\to X\times Y$ by $F(x)=(x,f(x))$. The map $F$ is continuous, and $\Gamma_f=F(K)$ is the {{< knowl id="continuous-image-of-compact-set-is-compact" text="continuous image of a compact set" >}}, hence compact.
