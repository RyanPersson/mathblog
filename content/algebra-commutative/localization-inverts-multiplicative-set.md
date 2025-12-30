---
title: "Localization Inverts a Multiplicative Set"
description: "The localization map sends a multiplicative set S to units, and is universal among such maps."
---

## Statement

Let \(R\) be a commutative ring and \(S\subseteq R\) a {{< knowl id="multiplicative-set" text="multiplicative set" >}}.
Let \(S^{-1}R\) be the {{< knowl id="localization-ring" text="localization" >}}, with canonical map
\[
\varphi: R \longrightarrow S^{-1}R,\quad r\mapsto \frac{r}{1}.
\]

1. (**Elements of \(S\) become units.**)  
   For every \(s\in S\), \(\varphi(s)\) is a {{< knowl id="unit" section="algebra-rings" text="unit" >}} in \(S^{-1}R\), with inverse \(\frac{1}{s}\).

2. (**Universal property of inverting \(S\).**)  
   If \(T\) is a ring and \(f:R\to T\) a {{< knowl id="ring-homomorphism" section="algebra-rings" text="ring homomorphism" >}} such that \(f(s)\in T^\times\) for all \(s\in S\), then there exists a unique homomorphism
   \[
   \widetilde f: S^{-1}R \to T
   \]
   satisfying \(\widetilde f\circ \varphi = f\).

In short: \(S^{-1}R\) is the **universal ring obtained from \(R\) by forcing every element of \(S\) to be invertible**.

## Cross-links

- Construction: {{< knowl id="localization-ring" text="localization of a ring" >}}, {{< knowl id="multiplicative-set" text="multiplicative set" >}}
- Units: {{< knowl id="unit" section="algebra-rings" text="unit" >}}
- Important special case: {{< knowl id="localization-at-prime" text="localization at a prime" >}} and {{< knowl id="local-ring" text="local rings" >}}

## Examples

1. **Inverting a prime power set in \(\mathbb Z\).**  
   Let \(R=\mathbb Z\) and \(S=\{1,2,2^2,2^3,\dots\}\). Then
   \[
   S^{-1}\mathbb Z \cong \mathbb Z\!\left[\frac12\right],
   \]
   and \(2\) becomes invertible.

2. **Turning a polynomial into a unit.**  
   Let \(R=k[x]\) and \(S=\{1,x,x^2,\dots\}\). Then
   \[
   S^{-1}k[x] \cong k[x,x^{-1}],
   \]
   so \(x\) is a unit with inverse \(x^{-1}\).

3. **Localizing at a prime ideal.**  
   If \(\mathfrak p\) is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} in \(R\), take \(S=R\setminus \mathfrak p\). Then \(S^{-1}R = R_{\mathfrak p}\) is a {{< knowl id="local-ring" text="local ring" >}} ({{< knowl id="localization-at-prime" text="localization at \u03c0" >}}), and every element outside \(\mathfrak p\) becomes a unit.
