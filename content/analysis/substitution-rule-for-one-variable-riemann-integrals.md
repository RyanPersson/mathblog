---
title: "Substitution rule (change of variables) for Riemann integrals"
description: "A one-dimensional change of variables formula for definite integrals"
---

**Substitution rule**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}, and let $\varphi:[\alpha,\beta]\to[a,b]$ be continuously {{< knowl id="differentiability-one-variable" text="differentiable" >}} and {{< knowl id="monotone-sequence" text="monotone" >}} on $[\alpha,\beta]$. Then
$
\int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt=\int_{\varphi(\alpha)}^{\varphi(\beta)} f(u)\,du.
$
(If $\varphi$ is decreasing, the right-hand side automatically changes sign because $\varphi(\alpha)>\varphi(\beta)$.)

This formula is the rigorous justification for substitution in calculus and is the one-dimensional prototype for higher-dimensional {{< knowl id="change-of-variables-formula-for-multiple-integrals" text="change of variables" >}}.

**Proof sketch**:
Let $F$ be an antiderivative of $f$ (possible since $f$ is continuous). Then $(F\circ\varphi)'(t)=f(\varphi(t))\varphi'(t)$. Apply the {{< knowl id="fundamental-theorem-of-calculus-part-ii" text="fundamental theorem of calculus" >}}:
$
\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,dt = (F\circ\varphi)(\beta)-(F\circ\varphi)(\alpha)=F(\varphi(\beta))-F(\varphi(\alpha)),
$
and rewrite the last expression as $\int_{\varphi(\alpha)}^{\varphi(\beta)} f(u)\,du$.
