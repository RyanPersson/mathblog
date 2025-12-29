---
title: "Domain"
description: "The input set of a function, or the set of first components appearing in a relation"
---

If $f\colon A\to B$ is a {{< knowl id="function" text="function" >}}, then the **domain** of $f$ is the input set $A$.

More generally, if $R\subseteq A\times B$ is a {{< knowl id="relation" text="relation" >}}, its domain is the {{< knowl id="subset" text="subset" >}}
$$
\mathrm{dom}(R)=\{a\in A:\exists b\in B\text{ with }(a,b)\in R\},
$$
where $A\times B$ is the {{< knowl id="cartesian-product" text="Cartesian product" >}}.

**Examples:**
- For $f\colon\mathbb{R}\to\mathbb{R}$ defined by $f(x)=x^2$, the domain is $\mathbb{R}$.
- If $R=\{(1,a),(2,a)\}\subseteq\{1,2,3\}\times\{a,b\}$, then $\mathrm{dom}(R)=\{1,2\}$.
