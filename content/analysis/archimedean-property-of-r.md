---
title: "Archimedean property of R"
description: "There are no infinitely large or infinitely small positive reals relative to the integers"
---

**Archimedean property of $\mathbb{R}$**: For every $x\in\mathbb{R}$ there exists $n\in\mathbb{N}$ such that $n>x$. Equivalently, for every $\varepsilon>0$ there exists $n\in\mathbb{N}$ such that $1/n<\varepsilon$.

This property links the discrete structure of $\mathbb{N}$ to the continuum $\mathbb{R}$ and is used constantly in $\varepsilon$–$N$ arguments, especially to choose large integers making quantities small.

**Proof sketch** *(optional)*:
If the set $\mathbb{N}$ were {{< knowl id="bounded-above" text="bounded above" >}}, it would have a {{< knowl id="supremum" text="supremum" >}} $s$. Then $s-1$ would not be an upper bound, so some integer $n$ satisfies $n>s-1$, implying $n+1>s$, contradicting that $s$ is an upper bound.
