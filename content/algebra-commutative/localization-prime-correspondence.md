---
title: "Prime correspondence under localization"
description: "Prime ideals of a localization correspond to primes in the original ring disjoint from the multiplicative set."
---

Let \(R\) be a commutative ring and \(S\subseteq R\) a {{< knowl id="multiplicative-set" text="multiplicative set" >}}. Write \(S^{-1}R\) for the {{< knowl id="localization-ring" text="localization" >}}.

## Theorem (prime correspondence)
There is an inclusion-preserving bijection
\[
\Big\{\text{prime ideals } \mathfrak P \subset S^{-1}R\Big\}
\;\longleftrightarrow\;
\Big\{\text{prime ideals } \mathfrak p \subset R \text{ with } \mathfrak p\cap S=\varnothing\Big\}
\]
given by:
- **contraction:** \(\mathfrak P \mapsto \mathfrak p = \{\,r\in R : r/1\in \mathfrak P\,\}\),
- **extension:** \(\mathfrak p \mapsto S^{-1}\mathfrak p = \{\,r/s : r\in\mathfrak p,\, s\in S\,\}\).

In particular, if \(\mathfrak p\subset R\) is {{< knowl id="prime-ideal" section="algebra-rings" text="prime" >}} and we localize at \(\mathfrak p\) (so \(R_{\mathfrak p}\) is {{< knowl id="localization-at-prime" text="the localization at \(\mathfrak p\)" >}}), then prime ideals of \(R_{\mathfrak p}\) correspond exactly to prime ideals \(\mathfrak q\subseteq \mathfrak p\) in \(R\).

Maximal ideals correspond similarly: maximal ideals of \(S^{-1}R\) correspond to {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideals" >}} of \(R\) disjoint from \(S\).

## Examples
1. **Invert 2 in \(\mathbb{Z}\).**  
   Let \(S=\{1,2,4,8,\dots\}\). Then \(S^{-1}\mathbb{Z}=\mathbb{Z}[1/2]\).  
   Prime ideals of \(\mathbb{Z}[1/2]\) correspond to primes \(\mathfrak p\subset \mathbb{Z}\) with \(\mathfrak p\cap S=\varnothing\), i.e. \((0)\) and \((p)\) for odd primes \(p\). The prime \((2)\) disappears because it meets \(S\).

2. **Localize \(\mathbb{Z}\) at \((p)\).**  
   In \(R=\mathbb{Z}\), take \(S=\mathbb{Z}\setminus (p)\), so \(S^{-1}R=\mathbb{Z}_{(p)}\).  
   Prime ideals of \(\mathbb{Z}_{(p)}\) correspond to primes of \(\mathbb{Z}\) contained in \((p)\), namely \((0)\) and \((p)\). Thus \(\mathrm{Spec}(\mathbb{Z}_{(p)})=\{(0),(p)\}\).

3. **Localize \(k[x,y]\) at powers of \(x\).**  
   Let \(R=k[x,y]\) and \(S=\{1,x,x^2,\dots\}\). Then \(S^{-1}R=R_x\).  
   Prime ideals in \(R_x\) correspond to prime ideals of \(R\) **not containing \(x\)**. For instance, \((y)\) survives (it does not contain \(x\)), while \((x,y)\) does not (it contains \(x\), hence meets \(S\)).
