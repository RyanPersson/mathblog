---
title: "Uniform convergence of power series on compact subsets"
description: "A power series converges uniformly on closed balls strictly inside its radius of convergence"
---

**Uniform convergence of power series on compact subsets**: Let
$
\sum_{n=0}^\infty a_n (x-x_0)^n
$
be a power {{< knowl id="series" text="series" >}} with radius of convergence $R>0$. Then for every $r$ with $0<r<R$, the series {{< knowl id="uniform-convergence-of-a-series-of-functions" text="converges uniformly" >}} on the {{< knowl id="closed-set" text="closed" >}} set
$
\{x:|x-x_0|\le r\}.
$

Uniform convergence on {{< knowl id="compact-set" text="compact subsets" >}} is the mechanism behind the "good behavior" of power series: {{< knowl id="continuity-on-a-set" text="continuity" >}}, {{< knowl id="term-by-term-differentiation-of-power-series" text="term-by-term differentiation" >}}, and {{< knowl id="term-by-term-integration-of-power-series" text="term-by-term integration" >}} hold inside the disk/interval of convergence.

**Proof sketch**:
For $|x-x_0|\le r$,
$
|a_n(x-x_0)^n|\le |a_n|\,r^n.
$
Since $r<R$, the numerical series $\sum |a_n|r^n$ {{< knowl id="convergent-series" text="converges" >}} ({{< knowl id="absolutely-convergent-series" text="absolute convergence" >}} inside the radius). Apply the {{< knowl id="weierstrass-m-test" text="Weierstrass M-test" >}} to obtain uniform convergence.
