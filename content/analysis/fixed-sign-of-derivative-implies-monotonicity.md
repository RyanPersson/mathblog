---
title: "Derivative sign implies monotonicity"
description: "If a derivative is nonnegative, the function is nondecreasing (and similarly for other signs)"
---

**Derivative sign implies monotonicity**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$.
- If $f'(x)\ge 0$ for all $x\in(a,b)$, then $f$ is nondecreasing on $[a,b]$ (i.e., $x<y$ implies $f(x)\le f(y)$).
- If $f'(x)\le 0$ for all $x\in(a,b)$, then $f$ is nonincreasing on $[a,b]$.
- If $f'(x)>0$ for all $x\in(a,b)$, then $f$ is strictly increasing on $[a,b]$ (and similarly $f'<0$ implies strictly decreasing).

This is one of the most direct ways analysis turns differential information into global order information, and it is frequently used to prove {{< knowl id="injective-function" text="injectivity" >}} and existence of {{< knowl id="inverse-function" text="inverses" >}}.

**Proof sketch**:
Fix $x<y$ in $[a,b]$. By the {{< knowl id="mean-value-theorem" text="mean value theorem" >}} there exists $c\in(x,y)$ such that
$f(y)-f(x)=f'(c)(y-x).$
If $f'(c)\ge 0$ and $y-x>0$, then $f(y)-f(x)\ge 0$, so $f(x)\le f(y)$. The strict case is identical.
