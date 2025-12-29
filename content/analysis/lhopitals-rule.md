---
title: "L'Hôpital's Rule"
description: "Evaluates certain indeterminate limits using the limit of a quotient of derivatives"
---

**L'Hôpital's Rule (0/0 form, one-sided)**: Let $a<b$, and let $f,g:[a,b)\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b)$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$. Assume:
- $f(a)=g(a)=0$,
- $g'(x)\neq 0$ for all $x\in(a,b)$,
- the limit $L=\lim_{x\to a^+}\frac{f'(x)}{g'(x)}$ exists in $\mathbb{R}\cup\{\pm\infty\}$.

Then the limit $\lim_{x\to a^+}\frac{f(x)}{g(x)}$ exists and equals $L$:
$
\lim_{x\to a^+}\frac{f(x)}{g(x)}=\lim_{x\to a^+}\frac{f'(x)}{g'(x)}=L.
$

This rule is a standard tool for evaluating difficult limits, but it must be used with all hypotheses in place (especially the differentiability and nonvanishing of $g'$ near the limit point).

**Proof sketch**:
For $x\in(a,b)$, apply the {{< knowl id="cauchy-mean-value-theorem" text="Cauchy mean value theorem" >}} to $f$ and $g$ on $[a,x]$. There exists $c\in(a,x)$ such that
$
\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(c)}{g'(c)}.
$
Since $f(a)=g(a)=0$, this becomes $\frac{f(x)}{g(x)}=\frac{f'(c)}{g'(c)}$. As $x\to a^+$ we have $c\to a^+$, and the right-hand side tends to $L$.
