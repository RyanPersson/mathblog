---
title: "Algebra of Riemann integrable functions"
description: "Riemann integrable functions are closed under linear combinations and products"
---

Let $f,g:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}}.

**Proposition**:
- For any $\alpha,\beta\in\mathbb{R}$, the function $\alpha f+\beta g$ is Riemann integrable.
- The product $fg$ is Riemann integrable.
- Consequently, $f^2$ is Riemann integrable.

These closure properties are essential: they guarantee the Riemann integral behaves well under the usual algebraic operations on functions.

**Proof sketch**:
Linearity is standard from linearity of sums and the integrability definition via {{< knowl id="upper-sum-riemann" text="upper" >}}/{{< knowl id="lower-sum-riemann" text="lower sums" >}}. For products, note that Riemann integrable functions are {{< knowl id="bounded-set" text="bounded" >}}, so $|f|\le M$ and $|g|\le N$. Use the identity
$
fg=\frac{1}{4}\bigl((f+g)^2-(f-g)^2\bigr)
$
to reduce product integrability to integrability of squares, and show that if $h$ is integrable then $h^2$ is integrable (e.g., by {{< knowl id="continuity-on-a-set" text="continuity" >}} of $x\mapsto x^2$ and the {{< knowl id="lebesgue-criterion-riemann-integrability" text="Lebesgue criterion" >}}, or by oscillation estimates).
