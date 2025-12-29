---
title: "Cantor Intersection Theorem"
description: "In a complete metric space, nested nonempty closed sets with diameters tending to 0 intersect in exactly one point"
---

**Cantor Intersection Theorem**: Let $(X,d)$ be a {{< knowl id="complete-metric-space" text="complete metric space" >}} and let $(F_n)$ be a sequence of nonempty {{< knowl id="closed-set" text="closed sets" >}} such that
$F_{n+1}\subseteq F_n \quad \text{for all } n,$
and
$\operatorname{diam}(F_n)\to 0 \quad \text{as } n\to\infty.$
Then
$\bigcap_{n=1}^\infty F_n$
consists of exactly one point.

This theorem generalizes the {{< knowl id="nested-interval-theorem" text="nested interval theorem" >}} from $\mathbb{R}$ to complete metric spaces and is a key completeness tool used in fixed point and approximation arguments.

**Proof sketch** *(optional)*:
Pick $x_n\in F_n$. Nestedness implies $(x_n)$ is {{< knowl id="cauchy-sequence" text="Cauchy" >}} because $d(x_m,x_n)\le \operatorname{diam}(F_n)$ for $m\ge n$. Completeness gives $x_n\to x$. Closedness gives $x\in F_n$ for all $n$. {{< knowl id="diameter" text="Diameter" >}} $\to 0$ gives uniqueness.
