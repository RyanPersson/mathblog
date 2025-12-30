---
title: "Localization of a module"
description: "For an R-module M and multiplicative set S, the localization S^{-1}M is obtained by inverting S, equivalently M ⊗_R S^{-1}R."
---

Let $R$ be a commutative {{< knowl id="ring" section="algebra-rings" text="ring" >}}, let $S\subseteq R$ be a {{< knowl id="multiplicative-set" text="multiplicative set" >}}, and let $M$ be an {{< knowl id="module" section="algebra-modules" text="R-module" >}}.

## Definition

The **localization of $M$ at $S$**, written $S^{-1}M$, can be defined in either of two equivalent ways:

1. **Fractions:** elements are symbols $\frac{m}{s}$ with $m\in M$, $s\in S$, modulo the relation
   \[
   \frac{m}{s}=\frac{m'}{s'} \iff \exists\, t\in S\text{ such that } t(s'm-sm')=0 \text{ in } M.
   \]
   Operations are
   \[
   \frac{m}{s}+\frac{m'}{s'}=\frac{s'm+sm'}{ss'},\qquad
   \frac{r}{u}\cdot \frac{m}{s}=\frac{rm}{us}.
   \]
   (Here $\frac{r}{u}\in S^{-1}R$ acts on $\frac{m}{s}$.)

2. **Tensor product:** there is a canonical isomorphism
   \[
   S^{-1}M \;\cong\; M\otimes_R S^{-1}R,
   \]
   where $\otimes$ is the {{< knowl id="tensor-product" section="algebra-modules" text="tensor product" >}} and $S^{-1}R$ is the {{< knowl id="localization-ring" text="localized ring" >}}.

This makes $S^{-1}M$ naturally into an $S^{-1}R$-module.

## Examples

1. **Localizing the ring itself.**  
   Taking $M=R$, one recovers the ring localization:
   \[
   S^{-1}R \cong S^{-1}M.
   \]

2. **Invert 2 on an abelian group.**  
   With $R=\mathbb Z$, $M=\mathbb Z$, and $S=\{1,2,2^2,\dots\}$,
   \[
   S^{-1}M \cong \mathbb Z\left[\tfrac12\right]
   \]
   as a module over $S^{-1}\mathbb Z$.

3. **A localization that kills a module.**  
   Let $R=k[x]$, $M=R/(x)$, and $S=\{1,x,x^2,\dots\}$. Since $x$ acts as $0$ on $M$ but becomes invertible after localization, one gets
   \[
   S^{-1}M = 0.
   \]
