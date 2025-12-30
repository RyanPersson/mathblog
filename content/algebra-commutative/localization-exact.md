---
title: "Localization is Exact"
description: "Localizing modules at a multiplicative set preserves exact sequences."
---

## Statement

Let \(R\) be a commutative ring and \(S\subseteq R\) a {{< knowl id="multiplicative-set" text="multiplicative set" >}}. For any \(R\)-module \(M\), its {{< knowl id="localization-module" text="localization" >}} is
\[
S^{-1}M.
\]

**Theorem (Exactness of localization).**  
If
\[
0 \to A \to B \to C \to 0
\]
is a short exact sequence of \(R\)-modules (see {{< knowl id="short-exact-sequence" section="algebra-modules" text="short exact sequence" >}}), then
\[
0 \to S^{-1}A \to S^{-1}B \to S^{-1}C \to 0
\]
is a short exact sequence of \(S^{-1}R\)-modules.

Equivalently,
\[
S^{-1}M \cong M \otimes_R S^{-1}R
\]
(using {{< knowl id="tensor-product" section="algebra-modules" text="tensor product" >}}), so localization is exact because \(S^{-1}R\) is a {{< knowl id="flat-module" section="algebra-modules" text="flat" >}} \(R\)-module.

See also: {{< knowl id="localization-ring" text="localization of rings" >}}.

## Examples

1. **Killing torsion away from a prime.**  
   The sequence
   \[
   0 \to \mathbb Z \xrightarrow{\cdot n} \mathbb Z \to \mathbb Z/n\mathbb Z \to 0
   \]
   is exact. Localize at the prime \(p\) (i.e. take \(S=\mathbb Z\setminus p\mathbb Z\), giving \(\mathbb Z_{(p)}\)).  
   If \(p\nmid n\), then \(n\) becomes a unit in \(\mathbb Z_{(p)}\), so multiplication by \(n\) is an isomorphism after localization. Exactness forces
   \[
   (\mathbb Z/n\mathbb Z)_{(p)} = 0.
   \]

2. **Localizing at an element makes it invertible.**  
   In \(R=k[x]\), the sequence
   \[
   0 \to R \xrightarrow{\cdot x} R \to R/(x) \to 0
   \]
   is exact. Localize at \(S=\{1,x,x^2,\dots\}\), obtaining \(R_x\).  
   Since \(x\) is a unit in \(R_x\), the map \(\cdot x: R_x\to R_x\) is an isomorphism, so exactness gives
   \[
   (R/(x))_x = 0.
   \]

3. **Injectivity can be checked after localization (common use).**  
   If \(f:M\to N\) is a map of \(R\)-modules and \(S^{-1}f\) is injective, then \(\ker(f)\) localizes to \(0\).  
   Exactness identifies \(\ker(S^{-1}f)=S^{-1}\ker(f)\), so injectivity after localization is equivalent to \(\ker(f)\) being “\(S\)-torsion” (every element killed by some \(s\in S\)).
