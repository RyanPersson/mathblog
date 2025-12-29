---
title: "Dirichlet Test (series)"
description: "A series with bounded partial sums and decreasing coefficients converging to 0 converges"
---

**Dirichlet Test**: Let $(a_n)$ and $(b_n)$ be real sequences such that:
- the {{< knowl id="partial-sums" text="partial sums" >}} $A_N=\sum_{n=1}^N a_n$ are bounded, and
- $b_n$ is monotone with $b_n\to 0$.
Then the {{< knowl id="series" text="series" >}} $\sum_{n=1}^\infty a_n b_n$ {{< knowl id="convergent-series" text="converges" >}}.

Dirichlet's test is a powerful tool for oscillatory series where cancellation occurs through bounded partial sums.

**Proof sketch** *(optional)*:
Use summation by parts:
$\sum_{n=1}^N a_n b_n = A_N b_{N+1} + \sum_{n=1}^N A_n (b_n-b_{n+1}),$
and show the right-hand side is {{< knowl id="cauchy-sequence" text="Cauchy" >}} using boundedness of $A_n$ and the telescoping nature of $b_n-b_{n+1}$.
