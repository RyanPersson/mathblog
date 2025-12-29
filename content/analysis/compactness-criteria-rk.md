---
title: "Compactness criteria in R^k"
description: "In Euclidean space, compactness is equivalent to closed-and-bounded and to sequential compactness"
---

Let $K\subseteq \mathbb{R}^k$ with the {{< knowl id="euclidean-norm" text="Euclidean metric" >}}.

**Proposition (equivalent characterizations)**: The following are equivalent:
- $K$ is {{< knowl id="compact-set" text="compact" >}} (every open cover has a finite subcover).
- $K$ is {{< knowl id="sequentially-compact-set" text="sequentially compact" >}} (every sequence in $K$ has a {{< knowl id="convergent-sequence" text="convergent" >}} {{< knowl id="subsequence" text="subsequence" >}} with limit in $K$).
- $K$ is {{< knowl id="closed-set" text="closed" >}} and {{< knowl id="bounded-set" text="bounded" >}}.

This packages together the key compactness theorems specialized to Euclidean spaces ({{< knowl id="bolzano-weierstrass-theorem" text="Bolzano–Weierstrass" >}} + {{< knowl id="heine-borel-theorem" text="Heine–Borel" >}} + compactness–sequential compactness equivalence).

**Proof sketch**:
Compact $\Leftrightarrow$ sequentially compact holds in all metric spaces. Closed and bounded $\Rightarrow$ sequentially compact follows from Bolzano–Weierstrass plus closedness. Sequentially compact $\Rightarrow$ bounded and closed follows by applying sequential compactness to sequences escaping to infinity (for boundedness) and to convergent sequences (for closedness).
