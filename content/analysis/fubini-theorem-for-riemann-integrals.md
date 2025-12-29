---
title: "Fubini's Theorem (Riemann, continuous case)"
description: "A continuous function on a rectangle can be integrated by iterated one-dimensional integrals"
---

**Fubini's Theorem (Riemann, continuous case)**: Let $f:[a,b]\times[c,d]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Define
$
g(x)=\int_c^d f(x,y)\,dy \quad (x\in[a,b]),
\qquad
h(y)=\int_a^b f(x,y)\,dx \quad (y\in[c,d]).
$
Then $g$ and $h$ are continuous, and the {{< knowl id="multiple-riemann-integral-over-a-rectangle" text="double integral" >}} exists and satisfies
$
\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx
=
\int_{[a,b]\times[c,d]} f(x,y)\,d(x,y)
=
\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy.
$

This theorem justifies computing multiple integrals by integrating one variable at a time via {{< knowl id="iterated-integral" text="iterated integrals" >}}, a core technique in analysis and applications.

**Proof sketch**:
Continuity on the {{< knowl id="compact-set" text="compact" >}} rectangle implies {{< knowl id="uniform-continuity" text="uniform continuity" >}} and boundedness. Approximate $f$ uniformly by {{< knowl id="step-function" text="step functions" >}} on rectangles (or compare {{< knowl id="upper-sum-riemann" text="upper" >}}/{{< knowl id="lower-sum-riemann" text="lower sums" >}}). For step functions the statement is immediate by finite additivity. Uniform approximation plus the {{< knowl id="uniform-convergence-and-integration-theorem" text="uniform convergence-and-integration principle" >}} yields the equality for $f$.
