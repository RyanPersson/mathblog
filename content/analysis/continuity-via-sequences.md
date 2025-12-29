---
title: "Continuity via sequences"
description: "In metric spaces, f is continuous at x iff it preserves limits of sequences converging to x"
---

**Continuity via sequences**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}} and let $f:X\to Y$. Then $f$ is {{< knowl id="continuity-at-a-point" text="continuous at" >}} $x\in X$ if and only if for every sequence $(x_n)$ in $X$,
$x_n\to x \quad\Longrightarrow\quad f(x_n)\to f(x).$

This is one of the most-used characterizations of continuity in analysis: it converts an $\varepsilon$–$\delta$ condition into a limit-preservation property.

**Proof sketch** *(optional)*:
If $f$ is continuous, apply the $\varepsilon$–$\delta$ definition to the tail of the sequence. Conversely, if $f$ is not continuous at $x$, build a sequence $x_n\to x$ with $f(x_n)$ staying a fixed distance away from $f(x)$ by choosing $x_n$ in shrinking {{< knowl id="neighborhood" text="neighborhoods" >}} where the $\varepsilon$–$\delta$ condition fails.
