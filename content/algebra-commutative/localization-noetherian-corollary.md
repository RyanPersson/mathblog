---
title: "Localization of a Noetherian ring is Noetherian"
description: "If R is Noetherian, then every localization S^{-1}R (in particular R_p) is Noetherian."
---

**Corollary (Noetherian rings localize to Noetherian rings).**  
Let \(R\) be a {{< knowl id="noetherian-ring" text="Noetherian ring" >}} and let \(S\subseteq R\) be a {{< knowl id="multiplicative-set" text="multiplicative set" >}}. Then the localized ring
\[
S^{-1}R
\]
is Noetherian.

In particular, for any prime ideal \(\mathfrak p\subset R\), the localization
\[
R_{\mathfrak p}
\]
(from {{< knowl id="localization-at-prime" text="localization at a prime" >}}) is a Noetherian {{< knowl id="local-ring" text="local ring" >}}.

This is an immediate consequence of {{< knowl id="localization-noetherian" text="localization preserves Noetherianity" >}}.

**Related knowls.**
- {{< knowl id="localization-ring" text="Localization of a ring" >}}
- {{< knowl id="localization-at-prime" text="Localization at a prime" >}}
- {{< knowl id="local-ring" text="Local ring" >}}
- {{< knowl id="noetherian-ring" text="Noetherian ring" >}}

## Examples

1. **Localizing \(\mathbb{Z}\) at a prime.**  
   Take \(R=\mathbb{Z}\) and \(S=\mathbb{Z}\setminus(p)\). Then \(S^{-1}\mathbb{Z}=\mathbb{Z}_{(p)}\) is Noetherian (in fact a PID).

2. **Inverting an element in a polynomial ring.**  
   Let \(R=k[x,y]\) (Noetherian) and \(S=\{1,x,x^2,\dots\}\). Then
   \[
   S^{-1}R \cong k[x,y]_x \cong k[x,y,1/x]
   \]
   is Noetherian.

3. **Localizing at a prime ideal.**  
   In \(R=k[x,y]\), let \(\mathfrak p=(x)\). Then \(R_{\mathfrak p}\) is Noetherian, and elements outside \((x)\) become units in \(R_{\mathfrak p}\).
