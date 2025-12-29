---
title: "Closed subset of a compact set is compact"
description: "A closed subset of a compact space is compact"
---

**Closed subset of compact is compact**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $F\subseteq K$ be {{< knowl id="closed-set" text="closed" >}} in $X$ (equivalently, closed in the subspace $K$). Then $F$ is compact.

This permanence property is used constantly: once compactness is established, it automatically applies to all closed substructures.

**Proof sketch**:
Let $\{U_\alpha\}$ be an {{< knowl id="open-set" text="open" >}} cover of $F$ in $X$. Then $\{U_\alpha\}\cup\{X\setminus F\}$ is an open cover of $K$. By compactness of $K$, there is a finite subcover. Removing $X\setminus F$ leaves a finite subcover of $F$.
