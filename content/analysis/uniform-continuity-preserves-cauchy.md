---
title: "Uniform continuity preserves Cauchy sequences"
description: "Uniformly continuous maps send Cauchy sequences to Cauchy sequences"
---

Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}} and let $f:X\to Y$ be {{< knowl id="uniform-continuity" text="uniformly continuous" >}}.

**Proposition**: If $(x_n)$ is a {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}} in $X$, then $(f(x_n))$ is a Cauchy sequence in $Y$.

This is an important structural feature: uniform continuity is exactly the hypothesis needed to transport {{< knowl id="complete-metric-space" text="completeness" >}} properties through a map.

**Proof sketch**:
Let $\varepsilon>0$. Uniform continuity gives $\delta>0$ such that $d_X(x,y)<\delta$ implies $d_Y(f(x),f(y))<\varepsilon$. Since $(x_n)$ is Cauchy, choose $N$ with $d_X(x_n,x_m)<\delta$ for all $m,n\ge N$. Then $d_Y(f(x_n),f(x_m))<\varepsilon$ for all $m,n\ge N$, so $(f(x_n))$ is Cauchy.
