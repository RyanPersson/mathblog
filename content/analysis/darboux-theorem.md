---
title: "Darboux's Theorem"
description: "Derivatives satisfy the intermediate value property even when they are not continuous"
---

**Darboux's Theorem**: Let $f:(a,b)\to\mathbb{R}$ be {{< knowl id="differentiability-one-variable" text="differentiable" >}}. If $x_1,x_2\in(a,b)$ with $x_1<x_2$ and $\alpha$ lies between $f'(x_1)$ and $f'(x_2)$, then there exists $c\in(x_1,x_2)$ such that
$
f'(c)=\alpha.
$

This theorem says {{< knowl id="derivative" text="derivatives" >}} cannot have jump discontinuities: they may be very irregular, but they still take all {{< knowl id="intermediate-value-theorem" text="intermediate values" >}}. It is a key qualitative property of differentiation that does not rely on {{< knowl id="continuity-on-a-set" text="continuity" >}} of $f'$.

**Proof sketch**:
Define $h(x)=f(x)-\alpha x$ on $[x_1,x_2]$. Then $h$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[x_1,x_2]$ and differentiable on $(x_1,x_2)$, with $h'(x_1)=f'(x_1)-\alpha$ and $h'(x_2)=f'(x_2)-\alpha$ of opposite signs. The function $h$ attains a {{< knowl id="minimum" text="minimum" >}} on $[x_1,x_2]$ (by the {{< knowl id="extreme-value-theorem" text="extreme value theorem" >}}); that minimum occurs at some $c\in(x_1,x_2)$, and differentiability forces $h'(c)=0$, i.e. $f'(c)=\alpha$.
