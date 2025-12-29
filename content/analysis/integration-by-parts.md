---
title: "Integration by parts (Riemann integral)"
description: "A Riemann-integral identity derived from the product rule"
---

Let $f,g:[a,b]\to\mathbb{R}$ be {{< knowl id="class-ck-map" text="continuously differentiable" >}} (i.e., $f,g\in C^1([a,b])$). Then $f'$, $g'$, $fg$ are {{< knowl id="continuity-on-a-set" text="continuous" >}} and hence {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}}.

**Corollary (integration by parts)**:
$
\int_a^b f(x)\,g'(x)\,dx
=
f(b)g(b)-f(a)g(a)-\int_a^b f'(x)\,g(x)\,dx.
$

Integration by parts is a fundamental transformation tool in analysis, especially for estimating integrals and manipulating Fourier-type expressions.

**Connection to parent theorem**:
Apply the product rule $(fg)'=f'g+fg'$ and integrate both sides:
$
\int_a^b (fg)'(x)\,dx = \int_a^b f'(x)g(x)\,dx+\int_a^b f(x)g'(x)\,dx.
$
By the {{< knowl id="fundamental-theorem-of-calculus" text="fundamental theorem of calculus" >}}, $\int_a^b (fg)' = (fg)(b)-(fg)(a)$, giving the formula.
