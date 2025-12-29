---
title: "Extreme Value Theorem"
description: "A continuous real-valued function on a compact set attains its maximum and minimum"
---

**Extreme Value Theorem**: Let $(X,d)$ be a {{< knowl id="compact-set" text="compact" >}} {{< knowl id="metric-space" text="metric space" >}} and let $f:X\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Then there exist $x_{\min},x_{\max}\in X$ such that
$f(x_{\min})=\min_{x\in X} f(x), \qquad f(x_{\max})=\max_{x\in X} f(x).$

This theorem is a cornerstone of analysis and optimization: compactness is exactly the hypothesis ensuring that {{< knowl id="supremum" text="suprema" >}}/{{< knowl id="infimum" text="infima" >}} are achieved.

**Proof sketch** *(optional)*:
The {{< knowl id="image-range" text="image" >}} $f(X)$ is {{< knowl id="continuous-image-of-compact-set-is-compact" text="compact in" >}} $\mathbb{R}$ because $f$ is continuous and $X$ is compact. Compact subsets of $\mathbb{R}$ are {{< knowl id="closed-set" text="closed" >}} and {{< knowl id="bounded-set" text="bounded" >}}, so $f(X)$ has a maximum and minimum; pull back the points in $X$ realizing those values.
