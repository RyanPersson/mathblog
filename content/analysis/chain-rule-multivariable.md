---
title: "Chain rule (multivariable)"
description: "The derivative of a composition is the composition (product) of derivatives"
---

**Chain rule (multivariable)**: Let $U\subseteq\mathbb{R}^n$ and $V\subseteq\mathbb{R}^m$ be open. Suppose $f:U\to V$ is {{< knowl id="differentiable-map" text="differentiable" >}} at $a\in U$ and $g:V\to\mathbb{R}^p$ is differentiable at $f(a)$. Then $g\circ f:U\to\mathbb{R}^p$ is differentiable at $a$ and
$
D(g\circ f)(a)=Dg(f(a))\circ Df(a).
$
In matrix form (with {{< knowl id="jacobian-matrix" text="Jacobians" >}}),
$
J_{g\circ f}(a)=J_g(f(a))\,J_f(a).
$

The chain rule is the main computational law of multivariable differentiation and underlies coordinate changes, implicit differentiation, and optimization.

**Proof sketch**:
Write linear approximations with remainders:
$
f(a+h)=f(a)+Df(a)h+r_f(h),\quad \frac{\|r_f(h)\|}{\|h\|}\to 0,
$
and similarly for $g$ at $f(a)$. Substitute the first into the second and control the remainder terms using {{< knowl id="differentiability-implies-continuity" text="continuity" >}} of $Dg$ at $f(a)$ (or directly from differentiability), yielding the stated {{< knowl id="total-derivative-frechet-derivative" text="derivative" >}}.
