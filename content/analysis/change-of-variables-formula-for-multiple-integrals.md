---
title: "Change of variables formula for multiple integrals"
description: "Transforms an integral under a C^1 diffeomorphism via the absolute Jacobian determinant"
---

**Change of variables formula (one standard Riemann form)**: Let $U,V\subseteq\mathbb{R}^n$ be open and let $\Phi:U\to V$ be a $C^1$ {{< knowl id="diffeomorphism" text="diffeomorphism" >}}. Let $E\subseteq U$ be a set such that $E$ and $\Phi(E)$ are "nice" for Riemann integration (e.g., bounded with {{< knowl id="boundary" text="boundary" >}} of {{< knowl id="set-of-measure-zero-in-rk" text="measure zero" >}}). If $f$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $\Phi(E)$, then $f\circ \Phi\cdot |\det D\Phi|$ is Riemann integrable on $E$ and
$
\int_{\Phi(E)} f(x)\,dx = \int_E f(\Phi(u))\,\bigl|\det D\Phi(u)\bigr|\,du.
$

This theorem is the rigorous basis for {{< knowl id="change-of-variables-for-multiple-integrals" text="coordinate changes" >}} such as polar, cylindrical, and spherical coordinates, and it explains why the {{< knowl id="jacobian-determinant" text="Jacobian determinant" >}} appears in such transformations.

**Proof sketch**:
First prove the linear case: if $\Phi(u)=Au$ with $A\in GL(n)$, then volumes scale by $|\det A|$. For smooth $\Phi$, on small boxes $\Phi$ is well-approximated by its {{< knowl id="total-derivative-frechet-derivative" text="derivative" >}} $D\Phi$; the Jacobian determinant controls local volume distortion. One then partitions $E$ into small pieces, applies near-linearity on each piece, and passes to the limit using {{< knowl id="uniform-continuity" text="uniform continuity" >}} and additivity.
