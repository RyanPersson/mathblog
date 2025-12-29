---
title: "Iterated integral"
description: "A multiple integral computed by integrating one variable at a time"
---

Let $R=[a,b]\times[c,d]\subseteq \mathbb{R}^2$ and let $f:R\to\mathbb{R}$ be a function such that for each fixed $x\in[a,b]$ the function $y\mapsto f(x,y)$ is (Riemann) integrable on $[c,d]$, and similarly for each fixed $y$.

The **iterated integrals** are
$\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx
\quad\text{and}\quad
\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy,$
provided the inner integrals exist and the resulting outer integrals exist.

Iterated integrals are computationally convenient; {{< knowl id="fubini-theorem-for-riemann-integrals" text="Fubini-type theorems" >}} give hypotheses under which iterated integrals agree with the genuine {{< knowl id="multiple-riemann-integral-over-a-rectangle" text="multiple integral" >}}.

**Examples:**
- If $f(x,y)=x+y$ on $[0,1]^2$, then $\int_0^1\!\int_0^1 (x+y)\,dy\,dx=1$.
- For continuous $f$ on a rectangle, both iterated integrals exist and agree with the double integral.
