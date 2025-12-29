---
title: "Mean value estimate lemma (differentiable maps)"
description: "Near a point where Df is continuous, f is uniformly close to its linearization"
---

Let $U\subseteq\mathbb{R}^n$ be {{< knowl id="open-set" text="open" >}} and let $f:U\to\mathbb{R}^m$ be of {{< knowl id="class-ck-map" text="class $C^1$" >}}. Fix $a\in U$.

**Mean value estimate lemma**: For every $\varepsilon>0$ there exists $\delta>0$ such that if $x,y\in U$ satisfy $\|x-a\|<\delta$, $\|y-a\|<\delta$, and the line segment $[x,y]\subseteq U$, then
$
\|f(x)-f(y)-Df(a)(x-y)\|\le \varepsilon\,\|x-y\|.
$
In particular,
$
\|f(x)-f(y)\|\le \bigl(\|Df(a)\|+\varepsilon\bigr)\,\|x-y\|.
$

This estimate is a standard quantitative form of {{< knowl id="differentiable-map" text="differentiability" >}} used in proofs of the {{< knowl id="inverse-function-theorem-rk" text="inverse" >}} and {{< knowl id="implicit-function-theorem" text="implicit function theorems" >}}: it says that on sufficiently small scales, $f$ behaves like the {{< knowl id="linear-map" text="linear map" >}} $Df(a)$ with a uniformly small relative error.

**Proof sketch**:
Using the {{< knowl id="fundamental-theorem-of-calculus" text="fundamental theorem of calculus" >}} along the segment $\gamma(t)=x+t(y-x)$,
$
f(y)-f(x)=\int_0^1 Df(\gamma(t))(y-x)\,dt.
$
Subtract $Df(a)(y-x)$ and take norms:
$
\|f(y)-f(x)-Df(a)(y-x)\|
\le \int_0^1 \|Df(\gamma(t))-Df(a)\|\,dt\;\|y-x\|.
$
{{< knowl id="continuity-on-a-set" text="Continuity" >}} of $Df$ at $a$ gives $\delta$ such that $\|Df(z)-Df(a)\|<\varepsilon$ whenever $\|z-a\|<\delta$, and $\gamma(t)$ stays within that ball when $x,y$ do.
