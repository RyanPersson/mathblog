---
title: "Integral Test"
description: "A positive decreasing series converges iff the corresponding improper integral converges"
---

**Integral Test**: Let $f:[1,\infty)\to\mathbb{R}$ be positive, decreasing, and continuous, and set $a_n=f(n)$. Then
$\sum_{n=1}^\infty a_n \text{ converges } \Longleftrightarrow \int_1^\infty f(x)\,dx \text{ converges}.$

The integral test connects {{< knowl id="series" text="series" >}} to calculus and provides error estimates by comparing {{< knowl id="partial-sums" text="partial sums" >}} to areas under $f$.

**Proof sketch** *(optional)*:
Compare the area under $f$ on $[n,n+1]$ with rectangles of height $f(n)$ and $f(n+1)$ to trap the tail $\sum_{k=n}^\infty f(k)$ between integrals.
