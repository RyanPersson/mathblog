---
title: "Continuous functions on compact sets are bounded"
description: "A continuous real-valued function on a compact set has finite sup norm"
---

Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $f:K\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}.

**Proposition**: The function $f$ is {{< knowl id="bounded-set" text="bounded" >}} on $K$: there exists $M<\infty$ such that $|f(x)|\le M$ for all $x\in K$.

This proposition is one of the core reasons compactness is the right hypothesis for global control from local continuity.

**Proof sketch**:
The {{< knowl id="image-range" text="image" >}} $f(K)$ is {{< knowl id="continuous-image-of-compact-set-is-compact" text="compact" >}} in $\mathbb{R}$ because $f$ is continuous and $K$ is compact. Compact subsets of $\mathbb{R}$ are bounded, so $f(K)$ is bounded. Equivalently, apply the {{< knowl id="extreme-value-theorem" text="extreme value theorem" >}} to $f$ and $-f$.
