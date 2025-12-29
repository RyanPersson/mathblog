---
title: "Continuity via open sets"
description: "A function is continuous iff the preimage of every open set is open"
---

**Continuity via open sets**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}} and $f:X\to Y$. Then $f$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} (at every point) if and only if for every {{< knowl id="open-set" text="open set" >}} $V\subseteq Y$, the {{< knowl id="preimage-inverse-image" text="preimage" >}}
$f^{-1}(V)=\{x\in X: f(x)\in V\}$
is open in $X$.

This formulation is fundamental in topology and makes continuity compatible with {{< knowl id="composition-of-functions" text="compositions" >}} and other structural operations.

**Proof sketch** *(optional)*:
If $f$ is continuous and $x\in f^{-1}(V)$, then $f(x)\in V$ and some {{< knowl id="open-ball" text="ball" >}} around $f(x)$ lies in $V$; continuity gives a ball around $x$ mapped into that ball, hence into $V$. Conversely, take $V$ to be an open ball around $f(x)$ to recover the $\varepsilon$–$\delta$ definition.
