---
title: "Abel Test (series)"
description: "If a series converges and coefficients are bounded monotone, then the product series converges"
---

**Abel Test**: Let $\sum_{n=1}^\infty a_n$ be a {{< knowl id="convergent-series" text="convergent" >}} {{< knowl id="series" text="series" >}} of real numbers, and let $(b_n)$ be a bounded monotone sequence. Then the series $\sum_{n=1}^\infty a_n b_n$ converges.

Abel's test is closely related to {{< knowl id="dirichlet-test" text="Dirichlet's test" >}} and is often used for power series at boundary points or for series with slowly varying factors.

**Proof sketch** *(optional)*:
Since $(b_n)$ is bounded and monotone, the differences $b_n-b_{n+1}$ have a fixed sign and sum absolutely. Combine summation by parts with convergence (hence bounded {{< knowl id="partial-sums" text="partial sums" >}}) of $\sum a_n$.
