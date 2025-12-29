---
title: "Finite intersection property theorem"
description: "A space is compact iff every family of closed sets with the finite intersection property has nonempty intersection"
---

**Finite intersection property (FIP) theorem**: Let $X$ be a {{< knowl id="compact-set" text="compact" >}} topological space (in particular, a compact {{< knowl id="metric-space" text="metric space" >}}). If $\{F_\alpha\}_{\alpha\in A}$ is a family of {{< knowl id="closed-set" text="closed subsets" >}} of $X$ such that every finite subfamily has nonempty intersection, i.e.,
$\bigcap_{j=1}^n F_{\alpha_j}\neq \varnothing \quad \text{for all finite choices } \alpha_1,\dots,\alpha_n,$
then
$\bigcap_{\alpha\in A} F_\alpha\neq \varnothing.$
Conversely, a space $X$ is compact iff this property holds for all families of closed sets.

This theorem reformulates compactness in terms of closed sets and is often convenient in existence proofs.

**Proof sketch** *(optional)*:
If the total intersection were empty, then the complements $\{X\setminus F_\alpha\}$ would form an open cover of $X$. Compactness gives a finite subcover, meaning finitely many complements cover $X$, i.e., finitely many $F_\alpha$ have empty intersection, contradicting the FIP.
