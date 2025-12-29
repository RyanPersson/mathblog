---
title: "Absolute value preserves Riemann integrability"
description: "If f is Riemann integrable then |f| is Riemann integrable, and |∫f| ≤ ∫|f|"
---

Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}}.

**Proposition**: The function $|f|$ is Riemann integrable on $[a,b]$. Moreover,
$
\left|\int_a^b f(x)\,dx\right|\le \int_a^b |f(x)|\,dx.
$

This is a basic stability property: composing with the {{< knowl id="continuity-on-a-set" text="continuous" >}} map $x\mapsto |x|$ preserves Riemann integrability.

**Proof sketch**:
Since $x\mapsto |x|$ is continuous, the discontinuity set of $|f|$ is contained in the discontinuity set of $f$ ({{< knowl id="continuity-at-a-point" text="continuity points" >}} of $f$ remain continuity points of $|f|$). By the {{< knowl id="lebesgue-criterion-riemann-integrability" text="Lebesgue criterion" >}}, $f$ has measure-zero discontinuity set, hence so does $|f|$, so $|f|$ is integrable. The inequality follows from $-\lvert f\rvert\le f\le \lvert f\rvert$ and monotonicity of the integral.
