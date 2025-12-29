---
title: "Heine–Borel Theorem"
description: "In R^k, a set is compact iff it is closed and bounded"
---

**Heine–Borel Theorem**: A subset $K\subseteq \mathbb{R}^k$ is {{< knowl id="compact-set" text="compact" >}} (in the Euclidean metric) if and only if it is {{< knowl id="closed-set" text="closed" >}} and {{< knowl id="bounded-set" text="bounded" >}}.

This theorem is the fundamental compactness criterion in {{< knowl id="euclidean-space-rk" text="Euclidean spaces" >}} and is used constantly to verify hypotheses of the {{< knowl id="extreme-value-theorem" text="extreme value theorem" >}}, {{< knowl id="uniform-continuity" text="uniform continuity" >}}, and convergence results.

**Proof sketch** *(optional)*:
If $K$ is compact, it is bounded (cover by balls of radius 1 and extract a finite subcover) and closed (limits of sequences in $K$ stay in $K$). Conversely, if $K$ is closed and bounded, any sequence in $K$ is bounded, hence has a convergent {{< knowl id="subsequence" text="subsequence" >}} by {{< knowl id="bolzano-weierstrass-theorem" text="Bolzano–Weierstrass" >}}; closedness ensures the limit lies in $K$, giving {{< knowl id="sequential-compactness-equals-compactness" text="sequential compactness" >}} and hence compactness.
