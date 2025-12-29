---
title: "Continuous bijection from compact is a homeomorphism criterion"
description: "A continuous bijection from a compact space to a Hausdorff space has continuous inverse"
---

**Homeomorphism criterion (compact to metric)**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}. If $X$ is {{< knowl id="compact-set" text="compact" >}} and $f:X\to Y$ is a continuous {{< knowl id="bijective-function" text="bijection" >}}, then $f^{-1}:f(X)\to X$ is continuous. In particular, $f$ is a {{< knowl id="homeomorphism" text="homeomorphism" >}} from $X$ onto $f(X)$.

This result says that on compact domains, a continuous bijection automatically has a continuous inverse (when the target is Hausdorff, which metric spaces are).

**Proof sketch** *(optional)*:
Let $C\subseteq X$ be {{< knowl id="closed-set" text="closed" >}}. Since $X$ is compact, $C$ is compact, hence $f(C)$ is {{< knowl id="continuous-image-of-compact-set-is-compact" text="compact" >}} in $Y$, hence closed in $Y$. Therefore $f$ maps closed sets to closed sets, which implies $f^{-1}$ is continuous.
