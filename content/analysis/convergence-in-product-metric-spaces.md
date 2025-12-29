---
title: "Convergence in product metric spaces"
description: "A sequence in X×Y converges iff each coordinate sequence converges"
---

Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}. On the {{< knowl id="cartesian-product" text="product" >}} $X\times Y$, define the metric
$
d_\infty\bigl((x,y),(x',y')\bigr)=\max\{d_X(x,x'),\,d_Y(y,y')\}.
$
(Any equivalent product metric, such as $d_1=d_X+d_Y$, yields the same notion of {{< knowl id="convergent-sequence" text="convergence" >}}.)

**Proposition (coordinatewise convergence)**: A sequence $((x_n,y_n))$ in $X\times Y$ converges to $(x,y)$ (with respect to $d_\infty$) if and only if
$
x_n\to x \text{ in } X \quad\text{and}\quad y_n\to y \text{ in } Y.
$
Likewise, $((x_n,y_n))$ is {{< knowl id="cauchy-sequence" text="Cauchy" >}} in $X\times Y$ iff $(x_n)$ is Cauchy in $X$ and $(y_n)$ is Cauchy in $Y$.

This proposition justifies treating product convergence as "simultaneous convergence of components."

**Proof sketch**:
By definition,
$
d_\infty\bigl((x_n,y_n),(x,y)\bigr)\to 0
\quad\Longleftrightarrow\quad
\max\{d_X(x_n,x),d_Y(y_n,y)\}\to 0,
$
which holds iff both $d_X(x_n,x)\to 0$ and $d_Y(y_n,y)\to 0$. The Cauchy statement is identical with $(x,y)$ replaced by $(x_m,y_m)$.
