---
title: "Completeness equivalences"
description: "Several standard statements are equivalent ways to express completeness of the real numbers"
---

The real numbers $\mathbb{R}$ are **{{< knowl id="complete-metric-space" text="complete" >}}**. In practice, completeness can be expressed in several equivalent ways.

**Completeness equivalences (standard list)**: The following statements are equivalent (each can be taken as a definition of completeness of $\mathbb{R}$):
- **Least upper bound property**: Every nonempty set $E\subseteq\mathbb{R}$ that is {{< knowl id="bounded-set" text="bounded" >}} above has a {{< knowl id="supremum" text="supremum" >}} in $\mathbb{R}$.
- **Cauchy completeness**: Every {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}} in $\mathbb{R}$ {{< knowl id="convergent-sequence" text="converges" >}} to a real number.
- **Nested interval property**: If $I_n=[a_n,b_n]$ are {{< knowl id="nested-interval-theorem" text="nested closed intervals" >}} with $I_{n+1}\subseteq I_n$ and $b_n-a_n\to 0$, then $\bigcap_{n=1}^\infty I_n$ consists of exactly one point.
- **Monotone convergence**: Every bounded {{< knowl id="monotone-sequence" text="monotone sequence" >}} in $\mathbb{R}$ converges.

These equivalences explain why different-looking arguments (suprema, Cauchy sequences, nested intervals, monotone sequences) are interchangeable in real analysis.

**Proof sketch** *(outline of implications)*:
- LUB $\Rightarrow$ monotone convergence: apply $\sup$ to $\{x_n\}$ for an increasing bounded sequence.
- Monotone convergence $\Rightarrow$ Cauchy completeness: given a Cauchy sequence $(x_n)$, define $a_n=\inf_{k\ge n} x_k$ and $b_n=\sup_{k\ge n} x_k$; then $(a_n)$ increases, $(b_n)$ decreases, and Cauchy-ness forces $b_n-a_n\to 0$, yielding a common limit trapped between them.
- Cauchy completeness $\Rightarrow$ nested interval property: choose $x_n\in I_n$; shrinking diameters force $(x_n)$ to be Cauchy, hence convergent; {{< knowl id="closed-set" text="closedness" >}} gives the limit lies in every $I_n$.
- Nested interval property $\Rightarrow$ LUB: for $E$ bounded above, build nested intervals $[a_n,b_n]$ with $a_n\in E$ and $b_n$ upper bounds, shrinking so that the unique intersection point is the least upper bound.
