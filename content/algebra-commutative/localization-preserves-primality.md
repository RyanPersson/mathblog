---
title: "Localization Preserves Primality"
description: "A prime ideal disjoint from S extends to a prime ideal after localization."
---

## Statement

Let \(R\) be a commutative ring and \(S\subseteq R\) a {{< knowl id="multiplicative-set" text="multiplicative set" >}}. Let \(\mathfrak p\) be a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} of \(R\).

- If \(\mathfrak p\cap S=\varnothing\), then the extended ideal
  \[
  S^{-1}\mathfrak p \subseteq S^{-1}R
  \]
  is a prime ideal of \(S^{-1}R\).

- If \(\mathfrak p\cap S\neq\varnothing\), then \(S^{-1}\mathfrak p = S^{-1}R\) (the whole ring), so it is not a proper prime ideal.

This is one direction of the full {{< knowl id="localization-prime-correspondence" text="prime correspondence for localization" >}} (primes of \(S^{-1}R\) correspond to primes of \(R\) disjoint from \(S\)). Special case: {{< knowl id="localization-at-prime" text="localization at a prime" >}}.

## Examples

1. **Localizing \(\mathbb Z\) at a prime \(p\).**  
   Take \(R=\mathbb Z\) and \(S=\mathbb Z\setminus p\mathbb Z\), so \(S^{-1}R=\mathbb Z_{(p)}\).  
   The primes of \(\mathbb Z\) disjoint from \(S\) are \((0)\) and \((p)\). Their extensions are
   \[
   S^{-1}(0)=(0)\subset \mathbb Z_{(p)},\qquad S^{-1}(p)=p\mathbb Z_{(p)},
   \]
   both prime in \(\mathbb Z_{(p)}\).

2. **Inverting \(x\) in \(k[x,y]\).**  
   Let \(R=k[x,y]\) and \(S=\{1,x,x^2,\dots\}\). Then \(S^{-1}R\cong k[x,x^{-1},y]\).
   - The prime \((y)\) satisfies \((y)\cap S=\varnothing\), so its extension \((y)S^{-1}R\) is prime.
   - The prime \((x)\) satisfies \((x)\cap S\neq\varnothing\) (since \(x\in S\)), so \((x)S^{-1}R = S^{-1}R\).

3. **Prime becomes maximal in a local ring.**  
   If \(S=R\setminus \mathfrak p\), then \(S^{-1}R = R_{\mathfrak p}\) is {{< knowl id="local-ring" text="local" >}} and the extension \(\mathfrak pR_{\mathfrak p}\) is the unique maximal ideal, hence prime.
