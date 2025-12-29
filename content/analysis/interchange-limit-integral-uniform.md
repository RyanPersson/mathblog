---
title: "Interchange limit and integral under uniform convergence"
description: "Uniform convergence justifies swapping a limit with a Riemann integral"
---

Let $f_n:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} for each $n$, and suppose $f_n\to f$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly" >}} on $[a,b]$.

**Corollary**:
- The limit function $f$ is Riemann integrable, and
- one may interchange limit and integral:
  $
  \lim_{n\to\infty}\int_a^b f_n(x)\,dx=\int_a^b \lim_{n\to\infty} f_n(x)\,dx.
  $

**Connection to parent theorem**:
This is the "{{< knowl id="uniform-limit-of-integrable-functions" text="uniform convergence and integration" >}}" theorem (often stated in exactly this corollary form). Uniform boundedness is automatic under uniform convergence and {{< knowl id="bounded-set" text="boundedness" >}} of some $f_N$.
