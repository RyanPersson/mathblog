---
title: "Absolute convergence implies the Cauchy criterion"
description: "If sum |a_n| converges then the series has arbitrarily small tails in absolute value"
---

**Corollary**: Let $(a_n)$ be a real or complex sequence. If $\sum_{n=1}^\infty |a_n|$ {{< knowl id="convergent-series" text="converges" >}}, then for every $\varepsilon>0$ there exists $N$ such that for all $m>n\ge N$,
$
\sum_{k=n+1}^{m} |a_k| < \varepsilon.
$
Consequently, the partial sums of $\sum a_n$ form a {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}}, so $\sum a_n$ converges.

**Connection to parent theorem**:
This is the Cauchy criterion applied to the convergent series of nonnegative terms $\sum |a_n|$, combined with the estimate
$
\left|\sum_{k=n+1}^m a_k\right|\le \sum_{k=n+1}^m |a_k|.
$
