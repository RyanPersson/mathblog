---
title: "Term-by-term operations on series of functions"
description: "Uniform convergence hypotheses justify integrating or differentiating a function series term-by-term"
---

Let $\sum_{n=1}^\infty f_n$ be a series of functions on an {{< knowl id="interval" text="interval" >}} $[a,b]$.

**Proposition (term-by-term integration)**: Suppose each $f_n$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $[a,b]$ and $\sum f_n$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="converges uniformly" >}} on $[a,b]$ to a function $f$. Then $f$ is Riemann integrable and
$
\int_a^b f(x)\,dx=\sum_{n=1}^\infty \int_a^b f_n(x)\,dx.
$

**Proposition (term-by-term differentiation)**: Suppose each $f_n$ is {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $[a,b]$, and:
- the series of {{< knowl id="derivative" text="derivatives" >}} $\sum f_n'$ converges uniformly on $[a,b]$ to a function $g$, and
- the original series $\sum f_n(x_0)$ {{< knowl id="convergent-series" text="converges" >}} at some point $x_0\in[a,b]$.
Then $\sum f_n$ converges uniformly on $[a,b]$ to a differentiable function $f$, and
$
f'(x)=\sum_{n=1}^\infty f_n'(x)\quad\text{for all }x\in[a,b].
$

These statements formalize the usual calculus manipulations with function series; the uniform convergence hypotheses are the key analytic input.

**Proof sketch**:
Integration: apply the "{{< knowl id="uniform-limit-of-integrable-functions" text="uniform limit of integrable functions" >}}" theorem to partial sums $s_N=\sum_{n=1}^N f_n$.
Differentiation: apply the "{{< knowl id="uniform-convergence-and-differentiation" text="uniform convergence and differentiation" >}}" theorem to the sequence of partial sums $s_N$, noting $s_N'= \sum_{n=1}^N f_n'$ and using the convergence at $x_0$ to pin down constants of integration.
