---
title: "Diffeomorphism"
description: "A C^1 bijection with a C^1 inverse between open subsets of Euclidean spaces"
---

A **diffeomorphism** between {{< knowl id="open-set" text="open sets" >}} $U,V \subseteq \mathbb{R}^n$ is a map $f:U\to V$ such that
- $f$ is {{< knowl id="bijective-function" text="bijective" >}},
- $f$ is {{< knowl id="class-ck-map" text="continuously differentiable" >}} on $U$ (i.e., $f\in C^1(U,V)$), and
- the inverse map $f^{-1}:V\to U$ is also continuously differentiable (i.e., $f^{-1}\in C^1(V,U)$).

Diffeomorphisms are the "smooth isomorphisms" of Euclidean spaces: they preserve the differentiable structure and are the natural maps appearing in the {{< knowl id="inverse-function-theorem-rk" text="inverse function theorem" >}} and {{< knowl id="change-of-variables-rk" text="change-of-variables formula" >}}.

**Examples:**
- The translation $f(x)=x+a$ on $\mathbb{R}^n$ is a diffeomorphism with $f^{-1}(y)=y-a$.
- Any invertible linear map $f(x)=Ax$ with $A\in GL(n,\mathbb{R})$ is a diffeomorphism with $f^{-1}(y)=A^{-1}y$.
- The map $f(x)=x^3$ is a $C^1$ bijection $\mathbb{R}\to\mathbb{R}$, but it is **not** a diffeomorphism since $(f^{-1})(y)=y^{1/3}$ is not $C^1$ at $0$.
