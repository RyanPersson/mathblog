---
title: "Triangle inequality"
description: "Distances and norms satisfy a subadditivity inequality"
---

**Triangle inequality (metric form)**: In a {{< knowl id="metric-space" text="metric space" >}} $(X,d)$, for all $x,y,z\in X$,
$
d(x,z)\le d(x,y)+d(y,z).
$

**Triangle inequality (norm form)**: In a normed vector space $(V,\|\cdot\|)$, for all $u,v\in V$,
$
\|u+v\|\le \|u\|+\|v\|.
$

The triangle inequality is the foundational estimate behind most $\varepsilon$–arguments in analysis, including limit uniqueness, {{< knowl id="cauchy-sequence" text="Cauchy criteria" >}}, and {{< knowl id="continuity-at-a-point" text="continuity" >}} estimates.

**Examples:**
- In $\mathbb{R}$ with $d(x,y)=|x-y|$, the metric triangle inequality is $|x-z|\le |x-y|+|y-z|$.
- In $\mathbb{R}^n$ with the {{< knowl id="euclidean-norm" text="Euclidean norm" >}}, $\|u+v\|\le \|u\|+\|v\|$ follows from {{< knowl id="cauchy-schwarz-inequality" text="Cauchy–Schwarz" >}}.
