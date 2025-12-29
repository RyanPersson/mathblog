---
title: "Inverse Function Theorem (one variable)"
description: "A differentiable strictly monotone function has a differentiable inverse with derivative 1/f'"
---

**Inverse Function Theorem (one variable)**: Let $I\subseteq\mathbb{R}$ be an {{< knowl id="interval" text="interval" >}} and let $f:I\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} and strictly {{< knowl id="monotone-sequence" text="monotone" >}}. Then $f$ is a {{< knowl id="bijective-function" text="bijection" >}} from $I$ onto $J=f(I)$, so the {{< knowl id="inverse-function" text="inverse" >}} $f^{-1}:J\to I$ exists and is continuous.

If moreover $x_0\in I^\circ$ and $f$ is {{< knowl id="differentiability-one-variable" text="differentiable" >}} at $x_0$ with $f'(x_0)\neq 0$, then $f^{-1}$ is differentiable at $y_0=f(x_0)$ and
$
(f^{-1})'(y_0)=\frac{1}{f'(x_0)}.
$
In particular, if $f\in C^1(I^\circ)$ and $f'(x)\neq 0$ for all $x\in I^\circ$, then $f^{-1}\in C^1(J^\circ)$ and
$
(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}\qquad (y\in J^\circ).
$

This result explains why nonvanishing {{< knowl id="derivative" text="derivative" >}} is the correct "local invertibility" condition in one dimension and provides the derivative formula for inverse functions used throughout calculus.

**Proof sketch**:
Strict monotonicity gives existence and continuity of the inverse. For the derivative, write for $y\neq y_0$
$
\frac{f^{-1}(y)-f^{-1}(y_0)}{y-y_0}=\frac{x-x_0}{f(x)-f(x_0)}
$
with $x=f^{-1}(y)$. As $y\to y_0$, we have $x\to x_0$, and the right-hand side tends to $1/f'(x_0)$ by the definition of the derivative of $f$ at $x_0$.
