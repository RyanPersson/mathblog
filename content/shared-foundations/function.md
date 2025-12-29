---
title: "Function (map)"
description: "A relation that assigns to each input exactly one output"
---

Let $A$ and $B$ be {{< knowl id="set" text="sets" >}}. A **function** (or **map**) $f$ from $A$ to $B$, written $f\colon A\to B$, can be defined as a {{< knowl id="relation" text="relation" >}} $f \subseteq A\times B$ (with $A\times B$ the {{< knowl id="cartesian-product" text="Cartesian product" >}} of $A$ and $B$) such that
$$
\forall a\in A\;\exists!\,b\in B\text{ with }(a,b)\in f,
$$
where $(a,b)$ is an {{< knowl id="ordered-pair" text="ordered pair" >}} and "$\exists!$" means "there exists a unique."

The {{< knowl id="domain" text="domain" >}} of $f$ is the input set $A$ and the {{< knowl id="codomain" text="codomain" >}} is the target set $B$; the actual outputs form the {{< knowl id="image" text="image" >}} $f(A)\subseteq B$. Functions may be {{< knowl id="injective-function" text="injective" >}} or {{< knowl id="surjective-function" text="surjective" >}} depending on how they hit the codomain.

**Examples:**
- $f\colon\mathbb{Z}\to\mathbb{Z}$ given by $f(n)=2n$.
- The inclusion map $\iota\colon \{1,2\}\to\{1,2,3\}$ with $\iota(x)=x$.
- A constant function $c\colon A\to B$ defined by $c(a)=b_0$ for a fixed $b_0\in B$.
