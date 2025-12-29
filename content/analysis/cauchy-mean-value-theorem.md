---
title: "Cauchy Mean Value Theorem"
description: "A two-function generalization of the mean value theorem"
---

**Cauchy Mean Value Theorem**: Let $f,g:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$. Then there exists $c\in(a,b)$ such that
$
\bigl(f(b)-f(a)\bigr)g'(c)=\bigl(g(b)-g(a)\bigr)f'(c).
$
If moreover $g(b)\neq g(a)$ and $g'(c)\neq 0$, then this can be rewritten as
$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.
$

This theorem is a standard tool for proving {{< knowl id="lhopitals-rule" text="L'Hôpital-type results" >}} and for comparing rates of change of two functions.

**Proof sketch**:
Consider
$h(x)=\bigl(f(b)-f(a)\bigr)g(x)-\bigl(g(b)-g(a)\bigr)f(x).$
Then $h$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $h(a)=h(b)$. Apply {{< knowl id="rolles-theorem" text="Rolle's theorem" >}} to $h$ to obtain $h'(c)=0$ and rearrange.
