---
title: "Second derivative tests"
description: "Using second derivatives (or the Hessian) to classify critical points as local minima or maxima"
---

### One-variable second derivative test

Let $f:I\to\mathbb{R}$ be twice {{< knowl id="differentiability-one-variable" text="differentiable" >}} and let $a\in I^\circ$ satisfy $f'(a)=0$.

**Proposition (one variable)**:
- If $f''(a)>0$, then $a$ is a strict {{< knowl id="local-maximum-local-minimum" text="local minimum" >}} of $f$.
- If $f''(a)<0$, then $a$ is a strict local maximum of $f$.
- If $f''(a)=0$, no conclusion follows in general.

### Multivariable Hessian test

Let $U\subseteq\mathbb{R}^n$ be {{< knowl id="open-set" text="open" >}} and let $f:U\to\mathbb{R}$ be {{< knowl id="class-ck-map" text="$C^2$" >}}. Let $a\in U$ be a {{< knowl id="critical-point" text="critical point" >}}, i.e. $\nabla f(a)=0$, and let $H={{< knowl id="hessian-matrix" text="$\\nabla^2 f(a)$" >}}$ be the Hessian matrix at $a$.

**Proposition (multivariable)**:
- If $H$ is **positive definite** (i.e., $v^{\mathsf T}Hv>0$ for all $v\neq 0$), then $a$ is a strict local minimum.
- If $H$ is **negative definite** (i.e., $v^{\mathsf T}Hv<0$ for all $v\neq 0$), then $a$ is a strict local maximum.
- If $H$ is **indefinite** (i.e., takes both positive and negative values on nonzero $v$), then $a$ is a saddle point (neither local min nor local max).
- If $H$ is only semidefinite, the test is inconclusive.

These tests are consequences of {{< knowl id="taylor-polynomial" text="Taylor's theorem" >}}: near a critical point, the quadratic term $\frac12 h^{\mathsf T}Hh$ controls the leading behavior of $f(a+h)-f(a)$.

**Proof sketch**:
One-variable: Taylor's theorem gives $f(a+h)=f(a)+\tfrac12 f''(\xi)h^2$ for some $\xi$ between $a$ and $a+h$; the sign of $f''(a)$ controls the sign for $h$ small.
Multivariable: Taylor's theorem yields
$
f(a+h)=f(a)+\frac12 h^{\mathsf T}Hh+o(\|h\|^2).
$
If $H$ is positive definite, then $h^{\mathsf T}Hh\ge c\|h\|^2$ for some $c>0$, which dominates the $o(\|h\|^2)$ remainder for small $h$, giving $f(a+h)>f(a)$ for $h\neq 0$ small.
