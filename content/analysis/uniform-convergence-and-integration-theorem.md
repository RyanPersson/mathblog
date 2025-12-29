---
title: "Uniform convergence and integration"
description: "Uniform limits of integrable functions are integrable and integrals commute with uniform limits"
---

**Uniform convergence and integration (Riemann)**: Let $f_n:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} for each $n$, and suppose $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $[a,b]$. Then:
- $f$ is Riemann integrable on $[a,b]$, and
- the integrals converge to the integral of the limit:
  $
  \lim_{n\to\infty}\int_a^b f_n(x)\,dx=\int_a^b f(x)\,dx.
  $

This theorem justifies passing limits through integrals when convergence is uniform, and it is a standard tool in approximation and {{< knowl id="series-of-functions" text="series-of-functions" >}} arguments.

**Proof sketch**:
Uniform convergence gives $\|f-f_n\|_\infty\to 0$. For the integral identity, use
$
\left|\int_a^b f-\int_a^b f_n\right|
\le \int_a^b |f-f_n|
\le (b-a)\|f-f_n\|_\infty \to 0.
$
To show $f$ is integrable, combine integrability of some $f_n$ (choose $n$ large) with the estimate that {{< knowl id="upper-sum-riemann" text="upper" >}}/{{< knowl id="lower-sum-riemann" text="lower sums" >}} for $f$ differ from those of $f_n$ by at most $(b-a)\|f-f_n\|_\infty$.
