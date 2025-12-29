---
title: "Ratio Test"
description: "A series converges absolutely if successive term ratios are eventually less than 1"
---

**Ratio Test**: Let $\sum a_n$ be a real or complex {{< knowl id="series" text="series" >}} with $a_n\neq 0$ eventually. Define
$\rho=\limsup_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|.$
- If $\rho<1$, then $\sum a_n$ {{< knowl id="absolutely-convergent-series" text="converges absolutely" >}}.
- If $\rho>1$ (or $\rho=\infty$), then $\sum a_n$ {{< knowl id="divergent-series" text="diverges" >}}.
- If $\rho=1$, the test is inconclusive.

The ratio test is particularly effective for factorials and exponential-type terms.

**Proof sketch** *(optional)*:
If $\rho<1$, choose $r$ with $\rho<r<1$ so that eventually $|a_{n+1}|\le r|a_n|$, implying $|a_n|$ is bounded by a geometric sequence and hence summable.
