---
title: "Alternating Series Test (Leibniz Test)"
description: "An alternating series converges if term magnitudes decrease to 0"
---

**Alternating Series Test**: Let $(b_n)$ be a decreasing sequence of nonnegative real numbers with $b_n\to 0$. Then the alternating {{< knowl id="series" text="series" >}}
$\sum_{n=1}^\infty (-1)^{n-1} b_n$
{{< knowl id="convergent-series" text="converges" >}}.

This test explains convergence driven by cancellation even when $\sum b_n$ diverges, and it yields a standard remainder estimate: the truncation error is at most the next term magnitude.

**Proof sketch** *(optional)*:
The even and odd {{< knowl id="partial-sums" text="partial sums" >}} form monotone sequences that are bounded and squeeze to the same limit, using the monotonicity of $b_n$.
