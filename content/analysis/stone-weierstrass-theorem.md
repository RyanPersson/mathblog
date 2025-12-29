---
title: "Stone–Weierstrass Theorem"
description: "A subalgebra of continuous functions that separates points is dense in C(K)"
---

**Stone–Weierstrass Theorem (real version)**: Let $K$ be a {{< knowl id="compact-set" text="compact" >}} {{< knowl id="metric-space" text="metric space" >}} and let $A\subseteq C(K,\mathbb{R})$ be a subalgebra (closed under addition, multiplication, and scalar multiplication). Assume:
- $A$ contains the constant functions, and
- $A$ separates points: for any distinct $x,y\in K$ there exists $f\in A$ such that $f(x)\neq f(y)$.

Then $A$ is {{< knowl id="dense-subset" text="dense" >}} in $C(K,\mathbb{R})$ with respect to the sup norm $\|\cdot\|_\infty$; i.e., for every $g\in C(K,\mathbb{R})$ and $\varepsilon>0$ there exists $f\in A$ with
$
\|g-f\|_\infty<\varepsilon.
$
(For the complex version, one typically also assumes $A$ is closed under complex conjugation.)

Stone–Weierstrass generalizes the classical {{< knowl id="weierstrass-approximation-theorem" text="Weierstrass approximation theorem" >}} (polynomials) to many other function families and is a central density theorem in analysis.

**Proof sketch**:
Using point separation, one shows $A$ can approximate continuous functions that interpolate prescribed values at finitely many points. One then builds "local bump-like" approximations and uses compactness to patch them into a uniform approximation. A key ingredient is showing the uniform {{< knowl id="closure" text="closure" >}} of $A$ is stable under taking max/min (in the real case), which allows approximation of general continuous functions.
