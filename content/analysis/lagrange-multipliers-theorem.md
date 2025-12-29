---
title: "Lagrange multipliers theorem"
description: "A necessary first-order condition for constrained extrema under a regularity hypothesis"
---

**Lagrange multipliers theorem**: Let $U\subseteq\mathbb{R}^n$ be open, let $f:U\to\mathbb{R}$ and $g:U\to\mathbb{R}^m$ be $C^1$, and define the {{< knowl id="constraint-set" text="constraint set" >}}
$
C=\{x\in U: g(x)=0\}.
$
Suppose $x^\ast\in C$ is a {{< knowl id="local-maximum-local-minimum" text="local maximizer or minimizer" >}} of $f$ restricted to $C$, and assume the constraint is {{< knowl id="regular-point-critical-point-multivariable" text="regular" >}} at $x^\ast$:
$
\operatorname{rank} Dg(x^\ast)=m.
$
Then there exists $\lambda\in\mathbb{R}^m$ such that
$
\nabla f(x^\ast)=Dg(x^\ast)^{\mathsf T}\lambda.
$

This theorem explains the "{{< knowl id="gradient" text="gradient" >}} is normal to the constraint" principle and is a core technique in constrained optimization and geometry. See also {{< knowl id="lagrange-multiplier-condition" text="Lagrange multiplier condition" >}}.

**Proof sketch**:
By the {{< knowl id="implicit-function-theorem" text="implicit function theorem" >}} and the rank hypothesis, the constraint set $C$ is locally a smooth $(n-m)$-dimensional graph. Restrict $f$ to that local parameterization to obtain an unconstrained function of $n-m$ variables; at an interior extremum its {{< knowl id="gradient" text="gradient" >}} vanishes. Translating that condition back to the original coordinates yields the existence of $\lambda$ with the stated relation.
