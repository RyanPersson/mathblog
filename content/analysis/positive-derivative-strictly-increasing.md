---
title: "Positive derivative implies strictly increasing"
description: "If f' is positive everywhere on an interval, f is strictly increasing"
---

Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$.

**Corollary**: If $f'(x)>0$ for all $x\in(a,b)$, then $f$ is strictly {{< knowl id="monotone-function" text="increasing" >}} on $[a,b]$.

**Connection to parent theorem**:
Apply the {{< knowl id="mean-value-theorem" text="mean value theorem" >}} to any $x<y$ in $[a,b]$ to get $f(y)-f(x)=f'(c)(y-x)$ for some $c\in(x,y)$. Since $f'(c)>0$ and $y-x>0$, one has $f(y)>f(x)$.
