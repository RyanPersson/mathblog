---
title: "Intermediate Value Theorem"
description: "A continuous real function on an interval takes all intermediate values"
---

**Intermediate Value Theorem**: Let $I\subseteq\mathbb{R}$ be an {{< knowl id="interval" text="interval" >}} and let $f:I\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. If $a,b\in I$ with $a<b$ and $y$ is any real number between $f(a)$ and $f(b)$, then there exists $c\in[a,b]$ such that
$f(c)=y.$

This theorem formalizes the idea that continuous functions on intervals cannot "jump over" values, and it is the basis for existence of roots, fixed points on intervals, and many approximation results.

**Proof sketch** *(optional)*:
Consider $S=\{x\in[a,b]: f(x)\le y\}$ (assuming $f(a)\le y\le f(b)$). Let $c=\sup S$. Continuity shows $f(c)=y$ by ruling out $f(c)<y$ and $f(c)>y$ via {{< knowl id="neighborhood" text="neighborhood" >}} arguments.
