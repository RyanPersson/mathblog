---
title: "Riemann rearrangement theorem"
description: "A conditionally convergent real series can be rearranged to converge to any prescribed value or to diverge"
---

**Riemann rearrangement theorem**: Let $\sum_{n=1}^\infty a_n$ be a {{< knowl id="conditionally-convergent-series" text="conditionally convergent" >}} {{< knowl id="series" text="series" >}} of real numbers (i.e., it converges but not absolutely). Then for any $L\in\mathbb{R}$ there exists a {{< knowl id="rearrangement-of-a-series" text="rearrangement" >}} $\sum a_{\pi(n)}$ that converges to $L$. There also exist rearrangements that diverge to $+\infty$, to $-\infty$, and that oscillate.

This theorem highlights that conditional convergence is fragile: the "sum" depends on the order of terms.

**Proof sketch** *(optional)*:
Separate positive and negative terms: $\sum a_n^+$ diverges to $+\infty$ and $\sum a_n^-$ diverges to $-\infty$. Build a rearrangement by adding enough positive terms to exceed $L$, then enough negative terms to drop below $L$, and repeat with ever smaller overshoots since $a_n\to 0$.
