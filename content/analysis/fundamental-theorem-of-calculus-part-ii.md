---
title: "Fundamental Theorem of Calculus, Part II"
description: "If F' equals f, then the integral of f equals F(b)-F(a)"
---

**Fundamental Theorem of Calculus (Part II)**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Suppose $F:[a,b]\to\mathbb{R}$ is {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$, continuous on $[a,b]$, and satisfies
$
F'(x)=f(x)\quad\text{for all }x\in(a,b).
$
Then
$
\int_a^b f(x)\,dx = F(b)-F(a).
$

This is the evaluation rule behind essentially all "antiderivative computations" of definite integrals in calculus.

**Proof sketch**:
Let $G(x)=\int_a^x f(t)\,dt$. By {{< knowl id="fundamental-theorem-of-calculus-part-i" text="Part I" >}}, $G'(x)=f(x)$ for all $x\in(a,b)$. Then $(F-G)'=0$ on $(a,b)$, so $F-G$ is constant on $[a,b]$. Evaluating at $a$ gives $F(x)-G(x)=F(a)$, hence $G(b)=F(b)-F(a)$.
