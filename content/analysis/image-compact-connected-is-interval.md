---
title: "Image of a compact connected set is a compact interval"
description: "A continuous real-valued map sends compact connected sets to closed intervals"
---

Let $(X,d)$ be a {{< knowl id="compact-set" text="compact" >}}, {{< knowl id="connected-set" text="connected" >}} {{< knowl id="metric-space" text="metric space" >}} and let $f:X\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}.

**Corollary**: The set $f(X)\subseteq\mathbb{R}$ is a compact {{< knowl id="interval" text="interval" >}}. In particular, there exist $m,M\in\mathbb{R}$ with $m\le M$ such that
$
f(X)=[m,M],
$
where $m={{< knowl id="minimum" text="min" >}}_X f$ and $M={{< knowl id="maximum" text="max" >}}_X f$.

**Connection to parent theorems**:
- $f(X)$ is compact because {{< knowl id="continuous-image-of-compact-set-is-compact" text="continuous images of compact sets are compact" >}}.
- $f(X)$ is connected because {{< knowl id="continuous-image-of-connected-set-is-connected" text="continuous images of connected sets are connected" >}}.
- Connected subsets of $\mathbb{R}$ are intervals.
A compact interval in $\mathbb{R}$ must be {{< knowl id="closed-set" text="closed" >}} and {{< knowl id="bounded-set" text="bounded" >}}, hence of the form $[m,M]$.
