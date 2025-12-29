---
title: "Differentiability implies continuity"
description: "A differentiable map between Euclidean spaces is continuous at that point"
---

**Differentiability implies continuity**: Let $U\subseteq\mathbb{R}^n$ be open and let $f:U\to\mathbb{R}^m$ be {{< knowl id="differentiable-map" text="differentiable" >}} at $a\in U$. Then $f$ is {{< knowl id="continuity-at-a-point" text="continuous" >}} at $a$.

This is a basic but essential fact: differentiability is a stronger local property than continuity, and many arguments implicitly use it.

**Proof sketch**:
Differentiability at $a$ means there is a {{< knowl id="linear-map" text="linear map" >}} $A:\mathbb{R}^n\to\mathbb{R}^m$ such that
$
\lim_{h\to 0}\frac{\|f(a+h)-f(a)-Ah\|}{\|h\|}=0.
$
Hence $f(a+h)-f(a)=Ah+o(\|h\|)$. Taking norms and letting $h\to 0$ gives $\|f(a+h)-f(a)\|\to 0$, which is continuity at $a$.
