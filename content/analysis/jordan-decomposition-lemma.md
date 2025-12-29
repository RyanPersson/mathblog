---
title: "Jordan decomposition lemma (bounded variation)"
description: "A function of bounded variation is the difference of two increasing functions"
---

Let $f:[a,b]\to\mathbb{R}$ be a function of {{< knowl id="bounded-variation" text="bounded variation" >}}. For $x\in[a,b]$, write
$
V_a^x(f)=\sup\left\{\sum_{j=1}^n |f(t_j)-f(t_{j-1})|:\ a=t_0<t_1<\cdots<t_n=x\right\}
$
for the **{{< knowl id="total-variation" text="total variation" >}} of $f$ on $[a,x]$**.

**Jordan decomposition lemma**: If $f$ has bounded variation on $[a,b]$, then there exist {{< knowl id="monotone-function" text="increasing" >}} functions $g,h:[a,b]\to\mathbb{R}$ such that
$
f=g-h.
$
One explicit choice is
$
h(x)=V_a^x(f),\qquad g(x)=f(x)+V_a^x(f).
$
Then $h$ is increasing, and $g$ is increasing as well.

This lemma is fundamental for the {{< knowl id="riemann-stieltjes-integral" text="Riemann–Stieltjes integral" >}}: bounded-variation integrators behave like differences of increasing (hence "measure-like") functions.

**Proof sketch**:
The map $x\mapsto V_a^x(f)$ is increasing by definition. For $a\le x<y\le b$, the variation estimate implies
$
V_a^y(f)-V_a^x(f)\ge |f(y)-f(x)|\ge -(f(y)-f(x)),
$
so
$
g(y)-g(x)=(f(y)-f(x))+\bigl(V_a^y(f)-V_a^x(f)\bigr)\ge 0,
$
hence $g$ is increasing. Finally, $f=g-h$ holds by construction.
