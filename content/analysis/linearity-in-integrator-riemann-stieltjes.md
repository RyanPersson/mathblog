---
title: "Linearity in the integrator (Riemann–Stieltjes)"
description: "Integrability and the integral are linear with respect to linear combinations of integrators"
---

Let $f:[a,b]\to\mathbb{R}$ and let $\alpha,\beta:[a,b]\to\mathbb{R}$ be functions of {{< knowl id="bounded-variation" text="bounded variation" >}}. Suppose the {{< knowl id="riemann-stieltjes-integral" text="Riemann–Stieltjes integrals" >}} $\int_a^b f\,d\alpha$ and $\int_a^b f\,d\beta$ exist. Let $c,d\in\mathbb{R}$ and define a new integrator
$
\gamma=c\alpha+d\beta.
$

**Proposition**: The integral $\int_a^b f\,d\gamma$ exists and
$
\int_a^b f\,d(c\alpha+d\beta)=c\int_a^b f\,d\alpha+d\int_a^b f\,d\beta.
$

This is the "integrator-side" linearity of the Riemann–Stieltjes integral. Together with integrand-side linearity, it makes $\int f\,d\alpha$ bilinear in $(f,\alpha)$ (within the class where the integral exists).

**Proof sketch**:
For a tagged {{< knowl id="partition-of-interval" text="partition" >}}, the Riemann–Stieltjes sums satisfy
$
\sum f(t_i)\bigl(\gamma(x_i)-\gamma(x_{i-1})\bigr)
=
c\sum f(t_i)\bigl(\alpha(x_i)-\alpha(x_{i-1})\bigr)
+d\sum f(t_i)\bigl(\beta(x_i)-\beta(x_{i-1})\bigr).
$
If the right-hand sums {{< knowl id="convergent-sequence" text="converge" >}} as the mesh tends to $0$, then so does the left-hand sum, with the stated limit. A careful argument uses the definition of Riemann–Stieltjes integrability via control of upper/lower sums or via the {{< knowl id="cauchy-sequence" text="Cauchy criterion" >}} for these sums.
