---
title: "Integration by parts (Riemann–Stieltjes)"
description: "A product rule for Riemann–Stieltjes integrals involving bounded-variation functions"
---

**Integration by parts (Riemann–Stieltjes)**: Let $f,g:[a,b]\to\mathbb{R}$ be functions of bounded variation, and assume at least one of $f$ or $g$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$. Then both {{< knowl id="riemann-stieltjes-integral" text="Riemann–Stieltjes integrals" >}} $\int_a^b f\,dg$ and $\int_a^b g\,df$ exist and
$
\int_a^b f\,dg + \int_a^b g\,df = f(b)g(b)-f(a)g(a).
$

This identity generalizes the usual integration by parts formula for {{< knowl id="riemann-integral" text="Riemann integrals" >}} and is essential in applications of the Riemann–Stieltjes integral (e.g., summation by parts and Fourier analysis).

**Proof sketch**:
For a {{< knowl id="tagged-partition" text="tagged partition" >}}, the discrete sums satisfy a finite "summation by parts" identity. One shows that as the {{< knowl id="mesh-of-a-partition" text="mesh" >}} of the partition goes to zero, these sums converge to the Riemann–Stieltjes integrals, and the discrete identity passes to the limit under the bounded-variation/continuity hypotheses.
