---
title: "Riemann–Stieltjes integrability theorem"
description: "A continuous integrand is Riemann–Stieltjes integrable against an increasing integrator"
---

**Riemann–Stieltjes integrability theorem**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}, and let $\alpha:[a,b]\to\mathbb{R}$ be increasing. Then the {{< knowl id="riemann-stieltjes-integral" text="Riemann–Stieltjes integral" >}}
$
\int_a^b f\,d\alpha
$
exists.

The Riemann–Stieltjes integral generalizes the {{< knowl id="riemann-integral" text="Riemann integral" >}} (take $\alpha(x)=x$) and also encodes weighted sums (step-function $\alpha$) and distribution-function-type {{< knowl id="integrator-function" text="integrators" >}}. It is a standard bridge toward measure-theoretic integration.

**Proof sketch**:
Continuity on $[a,b]$ implies {{< knowl id="uniform-continuity" text="uniform continuity" >}} of $f$. For a {{< knowl id="partition-of-an-interval" text="partition" >}} $P$, the difference between upper and lower Riemann–Stieltjes sums is bounded by a weighted {{< knowl id="oscillation-of-a-function" text="oscillation" >}}:
$
U(f,P,\alpha)-L(f,P,\alpha)\le \sum_{i} \omega_i \bigl(\alpha(x_i)-\alpha(x_{i-1})\bigr),
$
where $\omega_i=\sup_{[x_{i-1},x_i]} f-\inf_{[x_{i-1},x_i]} f$. With $\|P\|$ small, uniform continuity makes each $\omega_i$ small, and the total weight sums to $\alpha(b)-\alpha(a)$, forcing $U-L$ arbitrarily small.
