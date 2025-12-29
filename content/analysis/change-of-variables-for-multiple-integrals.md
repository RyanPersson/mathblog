---
title: "Change of variables (coordinate transformation) for multiple integrals"
description: "Replacing variables x by a smooth coordinate map to simplify a multiple integral"
---

A **change of variables** for a multiple integral refers to using a coordinate map $\Phi$ to rewrite an integral over a region in $\mathbb{R}^n$.

Typically, one considers:
- open sets $U,V\subseteq \mathbb{R}^n$,
- a $C^1$ bijection $\Phi:U\to V$ with $C^1$ inverse (often a {{< knowl id="diffeomorphism" text="diffeomorphism" >}}), and
- a region $E\subseteq U$ whose image is $\Phi(E)\subseteq V$.

The associated {{< knowl id="jacobian-determinant" text="Jacobian determinant" >}} is $\det D\Phi(u)$, and the {{< knowl id="change-of-variables-formula-for-multiple-integrals" text="change-of-variables formula" >}} (a theorem stated separately) relates $\int_{\Phi(E)} f(x)\,dx$ to an integral over $E$ involving $f(\Phi(u))|\det D\Phi(u)|$.

Coordinate transformations are essential for computing integrals in polar/spherical coordinates and for proving invariance properties of integrals under smooth reparametrization.

**Examples:**
- Polar coordinates on $\mathbb{R}^2\setminus\{0\}$: $\Phi(r,\theta)=(r\cos\theta,r\sin\theta)$.
- In $\mathbb{R}^n$, linear changes of variables $x=Au$ with $A\in GL(n,\mathbb{R})$ are coordinate transformations with constant Jacobian determinant $\det A$.
