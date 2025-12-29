---
title: "Constraint set (for optimization)"
description: "The subset of points satisfying the conditions of a constrained optimization problem"
---

A **constraint set** is a subset $C\subseteq \mathbb{R}^n$ describing the feasible points in an optimization problem. Commonly,
- **equality constraints** are given by $g(x)=0$ for a differentiable $g:\mathbb{R}^n\to\mathbb{R}^m$, yielding
  $C=\{x\in\mathbb{R}^n: g(x)=0\},$
- **inequality constraints** are given by $h(x)\le 0$ for a function $h$, yielding
  $C=\{x\in\mathbb{R}^n: h(x)\le 0\},$
or combinations of both.

Constraint sets appear in the method of {{< knowl id="lagrange-multiplier-condition" text="Lagrange multipliers" >}} and in geometric optimization, where one maximizes/minimizes $f$ on $C$ rather than on all of $\mathbb{R}^n$.

**Examples:**
- The unit sphere $S^{n-1}=\{x\in\mathbb{R}^n:\|x\|=1\}$ is the constraint set for maximizing $f(x)$ subject to $\|x\|=1$.
- The line $C=\{(x,y)\in\mathbb{R}^2: x+y=1\}$ is an equality-constraint set with $g(x,y)=x+y-1$.
- The closed disk $C=\{(x,y): x^2+y^2\le 1\}$ is an inequality-constraint set.
