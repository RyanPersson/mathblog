---
title: "Injective function"
description: "A function f is injective if f(a1)=f(a2) implies a1=a2"
---

Let $f\colon A\to B$ be a {{< knowl id="function" text="function" >}}. Then $f$ is **injective** (or **one-to-one**) if
$$
\forall a_1,a_2\in A,\; f(a_1)=f(a_2)\Rightarrow a_1=a_2.
$$

Injectivity means distinct inputs never collide under $f$. Equivalently, each element of the {{< knowl id="image" text="image" >}} has at most one {{< knowl id="preimage" text="preimage" >}}.

**Examples:**
- The inclusion map $\iota\colon\{1,2\}\to\{1,2,3\}$ is injective.
- The function $f\colon\mathbb{Z}\to\mathbb{Z}$ given by $f(n)=2n$ is injective.
- The function $g\colon\mathbb{R}\to\mathbb{R}$ given by $g(x)=x^2$ is not injective since $g(1)=g(-1)$.
