---
title: "Operator Norm"
description: "The supremum of ||Tv|| over unit vectors, measuring the size of a linear map"
---

Let $T:V\to W$ be a {{< knowl id="linear-map" text="linear map" >}} between normed vector spaces. The **operator norm** of $T$ is
$$
\|T\|=\sup_{v\neq 0}\frac{\|T(v)\|}{\|v\|}=\sup_{\|v\|=1}\|T(v)\|.
$$
When $V$ is finite-dimensional (for example $V=\mathbb{R}^k$ with the {{< knowl id="euclidean-norm" text="Euclidean norm" >}}), this supremum is finite and is attained by some unit vector.

The operator norm is submultiplicative: $\|S\circ T\|\le \|S\|\,\|T\|$ whenever the composition makes sense.

**Examples:**
- If $T:\mathbb{R}^k\to\mathbb{R}^k$ is scalar multiplication by $c\in\mathbb{R}$, then $\|T\|=|c|$.
- The orthogonal projection $P:\mathbb{R}^2\to\mathbb{R}^2$, $P(x,y)=(x,0)$, has $\|P\|=1$.
- Any rotation of $\mathbb{R}^2$ has operator norm $1$ (it preserves Euclidean lengths).
