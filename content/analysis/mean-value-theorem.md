---
title: "Mean Value Theorem"
description: "A theorem relating a derivative at an interior point to the average slope on an interval"
---

**Mean Value Theorem**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$. Then there exists $c\in(a,b)$ such that
$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$

This theorem links global change (the secant slope) to local change (a {{< knowl id="derivative" text="derivative" >}}). It is the main engine behind monotonicity results, error estimates, and many uniqueness arguments.

**Proof sketch**:
Define
$g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).$
Then $g$ is continuous on $[a,b]$, differentiable on $(a,b)$, and satisfies $g(a)=g(b)$. By {{< knowl id="rolles-theorem" text="Rolle's theorem" >}}, there is $c\in(a,b)$ with $g'(c)=0$, which rearranges to the desired formula.
