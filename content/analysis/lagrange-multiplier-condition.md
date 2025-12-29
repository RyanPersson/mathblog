---
title: "Lagrange multiplier condition"
description: "A first-order necessary condition for constrained extrema with equality constraints"
---

Let $f:U\subseteq \mathbb{R}^n\to\mathbb{R}$ and $g:U\to\mathbb{R}^m$ be differentiable, and consider maximizing/minimizing $f(x)$ subject to the constraint $g(x)=0$.

A point $x^\ast\in U$ satisfies the **Lagrange multiplier condition** if
- $g(x^\ast)=0$, and
- there exists $\lambda\in\mathbb{R}^m$ such that
  $\nabla f(x^\ast)=Dg(x^\ast)^{\mathsf T}\lambda.$

Geometrically, this says the {{< knowl id="gradient" text="gradient" >}} of $f$ at an extremum is orthogonal to the tangent space of the {{< knowl id="constraint-set" text="constraint set" >}} (when that tangent space is well-defined). Under regularity hypotheses (e.g., $Dg(x^\ast)$ has rank $m$), this condition is necessary for constrained extrema.

**Examples:**
- Maximize $f(x,y)=x$ subject to $g(x,y)=x^2+y^2-1=0$. At the maximizer $(1,0)$, $\nabla f=(1,0)$ and $\nabla g=(2,0)$, so $\nabla f=\lambda \nabla g$ with $\lambda=\tfrac12$.
- For a single constraint $g(x)=0$ (i.e., $m=1$), the condition becomes $\nabla f(x^\ast)=\lambda\,\nabla g(x^\ast)$.
