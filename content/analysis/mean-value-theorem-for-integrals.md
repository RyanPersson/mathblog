---
title: "Mean Value Theorem for integrals"
description: "A continuous function attains its average value over an interval"
---

**Mean Value Theorem for integrals**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Then there exists $c\in[a,b]$ such that
$
\int_a^b f(x)\,dx = f(c)\,(b-a).
$
Equivalently,
$
f(c)=\frac{1}{b-a}\int_a^b f(x)\,dx.
$

This result formalizes the idea that a continuous function takes its average value somewhere. It is frequently used to prove existence statements and to estimate integrals.

**Proof sketch**:
By continuity on $[a,b]$, $f$ attains a {{< knowl id="minimum" text="minimum" >}} $m$ and {{< knowl id="maximum" text="maximum" >}} $M$. Then
$
m(b-a)\le \int_a^b f(x)\,dx \le M(b-a).
$
Divide by $b-a$ to place the average value between $m$ and $M$, and apply the {{< knowl id="intermediate-value-theorem" text="intermediate value theorem" >}} to $f$.
