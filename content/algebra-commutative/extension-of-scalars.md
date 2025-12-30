---
title: "Extension of scalars"
description: "Given a ring map R→S and an R-module M, extension of scalars is the S-module S ⊗_R M."
---

Let $\varphi:R\to S$ be a {{< knowl id="ring-homomorphism" section="algebra-rings" text="ring homomorphism" >}} of commutative rings, and let $M$ be an {{< knowl id="module" section="algebra-modules" text="R-module" >}}.

## Definition

The **extension of scalars** of $M$ along $\varphi$ is the $S$-module
\[
S\otimes_R M,
\]
where $\otimes$ is the {{< knowl id="tensor-product" section="algebra-modules" text="tensor product" >}}. The $S$-module structure is given by multiplication on the first factor:
\[
s\cdot(s'\otimes m)=(ss')\otimes m.
\]

Extension of scalars is left adjoint to {{< knowl id="restriction-of-scalars" text="restriction of scalars" >}} (equivalently, it is a standard instance of the {{< knowl id="tensor-hom-adjunction" section="algebra-modules" text="tensor–Hom adjunction" >}}).

## Examples

1. **From integers to rationals.**  
   With $\varphi:\mathbb Z\to\mathbb Q$ and $M=\mathbb Z^n$,
   \[
   \mathbb Q\otimes_{\mathbb Z}\mathbb Z^n \cong \mathbb Q^n.
   \]

2. **Base change along a quotient.**  
   For the quotient map $R\to R/I$ (with $I$ an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}),
   \[
   (R/I)\otimes_R M \cong M/IM.
   \]

3. **Localization as extension of scalars.**  
   For $\varphi:R\to S^{-1}R$ (localization at a {{< knowl id="multiplicative-set" text="multiplicative set" >}} $S$),
   \[
   (S^{-1}R)\otimes_R M \cong S^{-1}M,
   \]
   i.e. {{< knowl id="localization-module" text="localization of modules" >}} is a special case of extension of scalars.
