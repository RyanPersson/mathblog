---
title: "Metric"
description: "A function measuring distance between points"
---

A **metric** (or distance function) on a set $X$ is a function $d: X \times X \to \mathbb{R}$ satisfying:

1. **Positive definiteness**: $d(x, y) \geq 0$, with $d(x, y) = 0$ iff $x = y$
2. **Symmetry**: $d(x, y) = d(y, x)$
3. **Triangle inequality**: $d(x, z) \leq d(x, y) + d(y, z)$

A set equipped with a metric is called a **metric space**. A sequence $(x_n)$ in a metric space is **Cauchy** if for every $\varepsilon > 0$, there exists $N$ such that $d(x_m, x_n) < \varepsilon$ for all $m, n > N$.

A metric space is **complete** if every Cauchy sequence converges.
