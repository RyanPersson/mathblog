---
title: "Root Test"
description: "A series converges absolutely if the nth roots of term magnitudes have limsup less than 1"
---

**Root Test**: For a {{< knowl id="series" text="series" >}} $\sum a_n$ (real or complex), define
$\alpha=\limsup_{n\to\infty}\sqrt[n]{|a_n|}.$
- If $\alpha<1$, then $\sum a_n$ {{< knowl id="absolutely-convergent-series" text="converges absolutely" >}}.
- If $\alpha>1$ (or $\alpha=\infty$), then $\sum a_n$ {{< knowl id="divergent-series" text="diverges" >}}.
- If $\alpha=1$, the test is inconclusive.

The root test is well-suited for expressions like $|a_n|=(\text{something})^n$.

**Proof sketch** *(optional)*:
If $\alpha<1$, choose $r$ with $\alpha<r<1$. Then for large $n$, $|a_n|\le r^n$, and $\sum r^n$ converges.
