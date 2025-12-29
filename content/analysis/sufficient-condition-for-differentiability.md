---
title: "C^1 implies differentiable"
description: "If partial derivatives exist and are continuous, the map is differentiable"
---

**$C^1$ implies differentiable**: Let $U\subseteq\mathbb{R}^n$ be open and let $f:U\to\mathbb{R}^m$. Suppose all first-order {{< knowl id="partial-derivative" text="partial derivatives" >}} of $f$ exist on a {{< knowl id="neighborhood" text="neighborhood" >}} of $a\in U$ and are {{< knowl id="continuity-at-a-point" text="continuous" >}} at $a$ (equivalently, $f\in {{< knowl id="class-ck-map" text="C^1" >}}$ near $a$). Then $f$ is {{< knowl id="differentiable-map" text="differentiable" >}} at $a$.

This theorem provides a practical sufficient condition for differentiability: checking continuity of partial derivatives is often much easier than verifying the definition of differentiability directly.

**Proof sketch**:
For $m=1$, write the increment $f(a+h)-f(a)$ as a telescoping sum along coordinate directions and apply the one-dimensional {{< knowl id="mean-value-theorem" text="mean value theorem" >}} to each coordinate slice. Continuity of partial derivatives at $a$ shows the error between this increment and the linear map $\nabla f(a)\cdot h$ is $o(\|h\|)$. The vector-valued case follows componentwise.
