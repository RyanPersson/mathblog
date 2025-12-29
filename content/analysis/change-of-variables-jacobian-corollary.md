---
title: "Change of variables Jacobian corollary"
description: "A smooth bijective coordinate change preserves integrability and transforms the integral by the Jacobian"
---

Let $U,V\subseteq\mathbb{R}^n$ be {{< knowl id="open-set" text="open" >}} and let $\Phi:U\to V$ be a $C^1$ {{< knowl id="diffeomorphism" text="diffeomorphism" >}}. Let $E\subseteq U$ be a region for which the Riemann integral behaves well (e.g., {{< knowl id="bounded-set" text="bounded" >}} with boundary of measure zero), and let $f$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $\Phi(E)$.

**Corollary**:
- The function $u\mapsto f(\Phi(u))\,|\det D\Phi(u)|$ is Riemann integrable on $E$, and
- the integrals are related by
  $
  \int_{\Phi(E)} f(x)\,dx = \int_E f(\Phi(u))\,\bigl|\det D\Phi(u)\bigr|\,du.
  $

**Connection to parent theorem**:
This is the {{< knowl id="change-of-variables-rk" text="change of variables theorem" >}} for multiple integrals, often packaged as the practical rule "insert the absolute {{< knowl id="jacobian-matrix" text="Jacobian" >}} determinant when changing coordinates."
