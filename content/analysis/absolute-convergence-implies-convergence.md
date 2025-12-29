---
title: "Absolute convergence implies convergence"
description: "If the series of absolute values converges, then the original series converges"
---

**Absolute convergence implies convergence**: Let $(a_n)$ be a real or complex sequence. If the {{< knowl id="series" text="series" >}}
$\sum_{n=1}^\infty |a_n|$
converges, then the series $\sum_{n=1}^\infty a_n$ converges.

{{< knowl id="absolutely-convergent-series" text="Absolute convergence" >}} is stronger than convergence and guarantees many good properties (e.g., {{< knowl id="rearrangement-theorem-for-absolutely-convergent-series" text="rearrangements do not change the sum" >}}).

**Proof sketch** *(optional)*:
If $\sum |a_n|$ converges then its {{< knowl id="partial-sums" text="partial sums" >}} are {{< knowl id="cauchy-sequence" text="Cauchy" >}}, implying tails $\sum_{k=m}^n |a_k|$ are small; by the triangle inequality, tails of $\sum a_n$ are also small, so $\sum a_n$ is Cauchy and hence convergent in $\mathbb{R}$ or $\mathbb{C}$.
