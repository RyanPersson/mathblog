---
title: "Uniform convergence preserves boundedness"
description: "If functions converge uniformly and one is bounded, then all later ones and the limit are bounded"
---

**Uniform convergence preserves boundedness**: Let $X$ be a set and let $f_n,f:X\to\mathbb{R}$ (or into a normed space). If $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $X$ and some $f_N$ is {{< knowl id="bounded-set" text="bounded" >}} on $X$, then $f$ is bounded on $X$ (and hence $f_n$ is bounded for all sufficiently large $n$).

More explicitly, if $\|f_N\|_\infty<\infty$ and $\|f-f_N\|_\infty<\infty$, then
$
\|f\|_\infty \le \|f_N\|_\infty + \|f-f_N\|_\infty < \infty.
$

This lemma is often used to guarantee that uniform limits live in the same "bounded function space" and to justify taking sup norms.

**Examples:**
- If $f_n(x)=\frac{x}{n}$ on $\mathbb{R}$, then $f_n\to 0$ {{< knowl id="pointwise-convergence" text="pointwise" >}} but not uniformly on $\mathbb{R}$; indeed boundedness of the limit does not force boundedness of the approximants without uniform control.
- On a bounded domain, uniform convergence plus boundedness of some $f_N$ ensures boundedness of the limit.
