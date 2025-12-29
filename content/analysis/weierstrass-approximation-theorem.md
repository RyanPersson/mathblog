---
title: "Weierstrass Approximation Theorem"
description: "Polynomials are dense in the space of continuous functions on a closed interval"
---

**Weierstrass Approximation Theorem**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} and let $\varepsilon>0$. Then there exists a polynomial $p$ such that
$
\sup_{x\in[a,b]} |f(x)-p(x)|<\varepsilon.
$

This theorem is foundational in approximation theory: continuous functions can be {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="uniformly approximated" >}} by simple algebraic objects (polynomials). It is also a prototype of many "density" results in functional analysis.

**Proof sketch**:
One standard proof uses Bernstein polynomials on $[0,1]$:
$
B_n(f)(x)=\sum_{k=0}^n f\!\left(\frac{k}{n}\right)\binom{n}{k}x^k(1-x)^{n-k},
$
which are polynomials. {{< knowl id="uniform-continuity" text="Uniform continuity" >}} of $f$ and concentration properties of the binomial distribution imply $B_n(f)\to f$ uniformly. A linear change of variables transfers the result from $[0,1]$ to $[a,b]$.
