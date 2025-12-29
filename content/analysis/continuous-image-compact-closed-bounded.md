---
title: "Continuous functions map compact sets to closed and bounded sets in R^k"
description: "If K is compact and f is continuous into R^k, then f(K) is closed and bounded"
---

Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $f:K\to\mathbb{R}^k$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}.

**Proposition**: The {{< knowl id="image-range" text="image" >}} $f(K)\subseteq\mathbb{R}^k$ is {{< knowl id="closed-set" text="closed" >}} and {{< knowl id="bounded-set" text="bounded" >}}.

This is the Euclidean specialization of "{{< knowl id="continuous-image-of-compact-set-is-compact" text="continuous image of compact is compact" >}}" plus the {{< knowl id="heine-borel-theorem" text="Heine–Borel" >}} characterization of compact sets in $\mathbb{R}^k$.

**Proof sketch**:
Since $f$ is continuous and $K$ is compact, $f(K)$ is compact in $\mathbb{R}^k$. By Heine–Borel, compact subsets of $\mathbb{R}^k$ are closed and bounded. Therefore $f(K)$ is closed and bounded.
