---
title: "Uniform continuity implies continuity"
description: "Uniform continuity gives a single delta that works at every point, hence pointwise continuity"
---

Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}} and let $f:X\to Y$.

**Proposition**: If $f$ is {{< knowl id="uniform-continuity" text="uniformly continuous" >}} on $X$, then $f$ is {{< knowl id="continuity-at-a-point" text="continuous" >}} at every point of $X$.

Uniform continuity is strictly stronger than continuity in general, but on {{< knowl id="compact-set" text="compact" >}} sets they coincide ({{< knowl id="heine-cantor-theorem" text="Heine–Cantor" >}}).

**Proof sketch**:
Fix $x_0\in X$ and $\varepsilon>0$. Uniform continuity gives $\delta>0$ such that $d_X(x,y)<\delta$ implies $d_Y(f(x),f(y))<\varepsilon$ for all $x,y\in X$. Apply this with $y=x_0$ to get continuity at $x_0$.
