---
title: "Oscillation of a function"
description: "The quantity sup f − inf f on a set, measuring variation in values."
---

Let $f:E\to\mathbb{R}$ be a {{< knowl id="bounded-set" text="bounded" >}} function and let $A\subseteq E$ be nonempty. The **oscillation** of $f$ on $A$ is
$$\operatorname{osc}(f;A):={{< knowl id="supremum" text="sup" >}}\{f(x):x\in A\}-{{< knowl id="infimum" text="inf" >}}\{f(x):x\in A\}.$$

For {{< knowl id="riemann-integrable-function" text="Riemann integration" >}}, oscillation on subintervals controls the gap between {{< knowl id="upper-sum-riemann" text="upper" >}} and {{< knowl id="lower-sum-riemann" text="lower sums" >}}: on an {{< knowl id="interval" text="interval" >}} $I$, the contribution to $U(f,P)-L(f,P)$ is the oscillation on $I$ times the interval length.

**Examples:**
- If $f$ is constant on $A$, then $\operatorname{osc}(f;A)=0$.
- For $f(x)=x$ on $A=[0,1]$, $\operatorname{osc}(f;A)=1-0=1$.
- For $f=\mathbf{1}_{\mathbb{Q}}$ on any nontrivial interval $I\subset\mathbb{R}$, $\operatorname{osc}(f;I)=1-0=1$.
