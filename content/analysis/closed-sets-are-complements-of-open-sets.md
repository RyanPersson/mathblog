---
title: "Closed sets are complements of open sets"
description: "A set is closed iff its complement is open; closed sets are stable under intersections"
---

**Closed sets are complements of open sets**: In a {{< knowl id="metric-space" text="metric space" >}} $(X,d)$, a set $F\subseteq X$ is {{< knowl id="closed-set" text="closed" >}} if and only if $X\setminus F$ is {{< knowl id="open-set" text="open" >}}.

Consequently:
- arbitrary intersections of closed sets are closed, and
- finite unions of closed sets are closed.

This duality between open and closed sets is a basic tool in topology and analysis, especially for {{< knowl id="closure" text="closure" >}}, {{< knowl id="limit-point-accumulation-point-cluster-point" text="limit points" >}}, and compactness arguments.

**Proof sketch** *(optional)*:
If $X\setminus F$ is open, then points outside $F$ have {{< knowl id="neighborhood" text="neighborhoods" >}} disjoint from $F$, so all limit points of $F$ must lie in $F$. Conversely, if $F$ contains all its limit points, then each point outside $F$ has positive distance to $F$, giving an {{< knowl id="open-ball" text="open ball" >}} contained in the complement.
