---
title: "Taylor's Theorem in several variables"
description: "Approximates a smooth multivariable function by a polynomial in a neighborhood of a point"
---

**Taylor's Theorem (several variables, one standard form)**: Let $U\subseteq\mathbb{R}^n$ be open and let $f:U\to\mathbb{R}$ be of {{< knowl id="class-ck-map" text="class" >}} $C^{k+1}$ on a {{< knowl id="neighborhood" text="neighborhood" >}} of $a\in U$. Using multi-index notation, there exists a remainder $R_k(h)$ such that for $h$ sufficiently small (with $a+h\in U$),
$
f(a+h)=\sum_{|\alpha|\le k}\frac{D^\alpha f(a)}{\alpha!}\,h^\alpha + R_k(h),
$
and
$
\frac{R_k(h)}{\|h\|^k}\to 0 \quad \text{as } h\to 0.
$
Here $\alpha=(\alpha_1,\dots,\alpha_n)$, $|\alpha|=\alpha_1+\cdots+\alpha_n$, $\alpha!=\alpha_1!\cdots \alpha_n!$, and $h^\alpha=h_1^{\alpha_1}\cdots h_n^{\alpha_n}$.

Taylor's theorem is the basis for local approximation, classification of {{< knowl id="critical-point" text="critical points" >}}, and higher-order error bounds in multivariable calculus.

**Proof sketch**:
Fix $h$ and consider the one-variable function $\phi(t)=f(a+th)$ for $t$ near $0$. Apply the one-dimensional {{< knowl id="taylors-theorem-with-remainder" text="Taylor theorem" >}} to $\phi$ at $t=0$ and translate the derivatives $\phi^{(j)}(0)$ into {{< knowl id="directional-derivative" text="directional derivatives" >}} expressed in terms of {{< knowl id="partial-derivative" text="partial derivatives" >}} of $f$ at $a$. The remainder estimate follows from the one-dimensional remainder estimate and smoothness of $f$.
