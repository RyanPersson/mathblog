---
title: "Inverse function"
description: "For a bijection f:A→B, the unique function f^{-1}:B→A with f^{-1}(f(a))=a"
---

Let $f\colon A\to B$ be a {{< knowl id="bijective-function" text="bijective function" >}}. The **inverse function** of $f$ is the {{< knowl id="function" text="function" >}} $f^{-1}\colon B\to A$ defined by
$$
f^{-1}(b)=\text{ the unique }a\in A\text{ such that }f(a)=b.
$$
It is characterized by the identities
$$
f^{-1}\circ f=\mathrm{id}_A \quad\text{and}\quad f\circ f^{-1}=\mathrm{id}_B,
$$
where $\circ$ is {{< knowl id="composition" text="composition" >}} and $\mathrm{id}$ is the {{< knowl id="identity-function" text="identity function" >}}.

**Examples:**
- If $f\colon\mathbb{Z}\to\mathbb{Z}$ is $f(n)=n+1$, then $f^{-1}(m)=m-1$.
- If $g\colon\mathbb{R}\to(0,\infty)$ is $g(x)=e^x$, then $g^{-1}(y)=\ln y$.
