---
title: "Localization of a Noetherian Ring is Noetherian"
description: "Localizing a Noetherian ring at any multiplicative set remains Noetherian."
---

## Statement

Let \(R\) be a {{< knowl id="noetherian-ring" text="Noetherian ring" >}} and let \(S\subseteq R\) be a {{< knowl id="multiplicative-set" text="multiplicative set" >}}. Then the localized ring {{< knowl id="localization-ring" text="S^{-1}R" >}} is again Noetherian.

Equivalently: every {{< knowl id="ideal" section="algebra-rings" text="ideal" >}} of \(S^{-1}R\) is finitely generated.

A common strengthening: if \(M\) is a finitely generated \(R\)-module, then \(S^{-1}M\) is a finitely generated \(S^{-1}R\)-module (compare {{< knowl id="localization-module" text="localization of modules" >}}).

See also: {{< knowl id="localization-noetherian-corollary" text="localization Noetherian corollary" >}}.

## Examples

1. **Integers localized at a prime.**  
   \(\mathbb Z\) is Noetherian. For a prime \(p\), the localization \(\mathbb Z_{(p)}\) (invert all integers not divisible by \(p\)) is therefore Noetherian. In fact it is a PID, so every ideal is principal.

2. **Inverting one variable in a polynomial ring.**  
   \(R=k[x,y]\) is Noetherian. Localizing at \(S=\{1,x,x^2,\dots\}\) gives
   \[
   R_x \cong k[x,x^{-1},y],
   \]
   which is still Noetherian.

3. **Principal open subsets stay Noetherian (geometric intuition).**  
   If \(R\) is Noetherian and \(f\in R\), then \(R_f\) is Noetherian. Algebraically this is the special case \(S=\{1,f,f^2,\dots\}\); geometrically it corresponds to restricting to a principal open set in {{< knowl id="prime-spectrum" text="Spec(R)" >}} with the {{< knowl id="zariski-topology" text="Zariski topology" >}}.
