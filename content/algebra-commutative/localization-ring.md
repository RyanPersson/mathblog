---
title: "Localization of a ring"
description: "Given a multiplicative set S ⊆ R, the localization S^{-1}R is the universal ring in which every s ∈ S becomes a unit."
---

Let $R$ be a commutative {{< knowl id="ring" section="algebra-rings" text="ring" >}} (with $1$) and let $S \subseteq R$ be a {{< knowl id="multiplicative-set" text="multiplicative set" >}}.

## Definition (construction by fractions)

Define an equivalence relation on $R\times S$ by
\[
(r,s)\sim(r',s') \quad \Longleftrightarrow \quad \exists\, t\in S \text{ such that } t(rs'-r's)=0.
\]
The **localization** of $R$ at $S$ is the set of equivalence classes
\[
S^{-1}R := (R\times S)/\sim,
\]
and the class of $(r,s)$ is written $\frac{r}{s}$.

Addition and multiplication are defined by
\[
\frac{r}{s}+\frac{r'}{s'}=\frac{rs'+r's}{ss'},\qquad
\frac{r}{s}\cdot\frac{r'}{s'}=\frac{rr'}{ss'}.
\]
This makes $S^{-1}R$ into a commutative ring, and the map
\[
\iota:R\to S^{-1}R,\qquad r\mapsto \frac{r}{1}
\]
is a ring homomorphism.

## Universal property

In $S^{-1}R$, every $\iota(s)$ (with $s\in S$) is a {{< knowl id="unit" section="algebra-rings" text="unit" >}}. Moreover, $(S^{-1}R,\iota)$ is **universal** with this property:

> For any commutative ring $T$ and any {{< knowl id="ring-homomorphism" section="algebra-rings" text="ring homomorphism" >}} $f:R\to T$ such that $f(s)$ is a unit in $T$ for all $s\in S$, there exists a unique ring homomorphism $\tilde f:S^{-1}R\to T$ with
> \[
> \tilde f\!\left(\frac{r}{s}\right)=f(r)\,f(s)^{-1}
> \quad\text{and}\quad
> \tilde f\circ\iota=f.
> \]

(See also {{< knowl id="localization-inverts-multiplicative-set" text="localization inverts a multiplicative set" >}}.)

## Examples

1. **Invert a prime (or any element) in $\mathbb Z$.**  
   Let $R=\mathbb Z$ and $S=\{1,2,2^2,2^3,\dots\}$. Then
   \[
   S^{-1}\mathbb Z \cong \mathbb Z\left[\tfrac12\right].
   \]

2. **Invert a polynomial.**  
   Let $R=k[x]$ and $S=\{1,x,x^2,\dots\}$. Then
   \[
   S^{-1}k[x] \cong k[x,x^{-1}],
   \]
   the {{< knowl id="laurent-polynomial-ring" section="algebra-rings" text="Laurent polynomial ring" >}} in one variable.

3. **Localization at a prime ideal.**  
   If $\mathfrak p$ is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} of $R$ and $S=R\setminus\mathfrak p$, then
   \[
   S^{-1}R = R_{\mathfrak p},
   \]
   the {{< knowl id="localization-at-prime" text="localization at a prime" >}}.
