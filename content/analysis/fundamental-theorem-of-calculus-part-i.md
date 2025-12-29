---
title: "Fundamental Theorem of Calculus, Part I"
description: "Integrating a function produces an antiderivative at points of continuity"
---

**Fundamental Theorem of Calculus (Part I)**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} and define
$
F(x)=\int_a^x f(t)\,dt \qquad (x\in[a,b]).
$
Then $F$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$. Moreover, if $f$ is continuous at a point $x_0\in(a,b)$, then $F$ is {{< knowl id="differentiability-one-variable" text="differentiable" >}} at $x_0$ and
$
F'(x_0)=f(x_0).
$

This theorem is the precise link "differentiation undoes integration" (at points where $f$ is continuous). It also provides a systematic way to construct antiderivatives.

**Proof sketch**:
Continuity of $F$ follows from boundedness of $f$ and the estimate
$
|F(x)-F(y)|=\left|\int_y^x f(t)\,dt\right|\le \|f\|_\infty |x-y|.
$
For differentiability at $x_0$, compute the {{< knowl id="difference-quotient" text="difference quotient" >}}:
$
\frac{F(x_0+h)-F(x_0)}{h}=\frac{1}{h}\int_{x_0}^{x_0+h} f(t)\,dt.
$
If $f$ is continuous at $x_0$, then on small intervals $f(t)$ is close to $f(x_0)$, and a {{< knowl id="squeeze-theorem" text="squeeze argument" >}} shows the quotient tends to $f(x_0)$.
