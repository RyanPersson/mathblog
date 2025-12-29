---
title: "Continuous image of compact set is compact"
description: "Continuous maps send compact sets to compact sets"
---

**Continuous image of compact set is compact**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $f:X\to Y$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Then $f(K)\subseteq Y$ is compact.

This is one of the most important permanence properties of compactness and is used to prove the {{< knowl id="extreme-value-theorem" text="extreme value theorem" >}} and many existence statements.

**Proof sketch** *(optional)*:
If $\{V_\alpha\}$ is an open cover of $f(K)$, then $\{f^{-1}(V_\alpha)\}$ is an open cover of $K$. Compactness of $K$ gives a finite subcover, whose images cover $f(K)$.
