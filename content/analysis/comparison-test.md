---
title: "Comparison Test (series)"
description: "Compare a series to a known convergent or divergent nonnegative series"
---

**Comparison Test**: Let $0\le a_n\le b_n$ for all sufficiently large $n$.
- If $\sum_{n=1}^\infty b_n$ {{< knowl id="convergent-series" text="converges" >}}, then $\sum_{n=1}^\infty a_n$ converges.
- If $\sum_{n=1}^\infty a_n$ {{< knowl id="divergent-series" text="diverges" >}}, then $\sum_{n=1}^\infty b_n$ diverges.

This test reduces convergence questions to bounding terms by simpler expressions.

**Proof sketch** *(optional)*:
Use monotonicity of {{< knowl id="partial-sums" text="partial sums" >}} for nonnegative series: $\sum_{k=1}^N a_k \le \sum_{k=1}^N b_k$. Boundedness of the larger partial sums forces boundedness (hence convergence) of the smaller ones.
