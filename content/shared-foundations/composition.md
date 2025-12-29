---
title: "Composition of functions"
description: "Given f:A→B and g:B→C, the composite g∘f:A→C is defined by (g∘f)(a)=g(f(a))"
---

Let $f\colon A\to B$ and $g\colon B\to C$ be {{< knowl id="function" text="functions" >}} with matching {{< knowl id="codomain" text="codomain" >}}/$\,${{< knowl id="domain" text="domain" >}}. Their **composition** is the function
$$
g\circ f \colon A \to C,\qquad (g\circ f)(a)=g(f(a)).
$$

Composition is associative, and the {{< knowl id="identity-function" text="identity function" >}} acts as a two-sided identity for composition.

**Examples:**
- If $f(x)=x^2$ and $g(x)=x+1$ on $\mathbb{R}$, then $(g\circ f)(x)=x^2+1$ while $(f\circ g)(x)=(x+1)^2$.
- If $\iota\colon A\to B$ is an inclusion and $h\colon B\to C$, then $h\circ\iota$ is the restriction of $h$ to $A$.
