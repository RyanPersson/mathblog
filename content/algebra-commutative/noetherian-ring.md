---
title: "Noetherian ring"
description: "A ring in which every ideal is finitely generated (equivalently, ideals satisfy ACC)."
---

Let \(R\) be a commutative ring.

## Definition
\(R\) is **Noetherian** if it satisfies the **ascending chain condition** (ACC) on {{< knowl id="ideal" section="algebra-rings" text="ideals" >}}: every chain
\[
I_1 \subseteq I_2 \subseteq I_3 \subseteq \cdots
\]
stabilizes (i.e., \(I_n=I_{n+1}=\cdots\) for \(n\gg 0\)).

Equivalently (and very useful in practice): **every ideal of \(R\) is finitely generated.**

## Standard permanence properties
- If \(R\) is Noetherian and \(I\subseteq R\) is an ideal, then \(R/I\) is Noetherian.
- If \(R\) is Noetherian, then \(R[x]\) is Noetherian ({{< knowl id="hilbert-basis-theorem" section="algebra-rings" text="Hilbert basis theorem" >}}); hence so is \(R[x_1,\dots,x_n]\).
- If \(R\) is Noetherian and \(S\) is a {{< knowl id="multiplicative-set" text="multiplicative set" >}}, then the {{< knowl id="localization-ring" text="localization" >}} \(S^{-1}R\) is Noetherian ({{< knowl id="localization-noetherian" text="localization is Noetherian" >}}).

## Examples
1. **Basic examples.**  
   Any field is Noetherian, and \(\mathbb{Z}\) is Noetherian (in fact a {{< knowl id="pid" section="algebra-rings" text="PID" >}}).

2. **Polynomial rings in finitely many variables.**  
   If \(k\) is a field, then \(k[x_1,\dots,x_n]\) is Noetherian by the Hilbert basis theorem.

3. **A non-example (infinitely many variables).**  
   The ring \(k[x_1,x_2,x_3,\dots]\) is not Noetherian: the chain
   \[
   (x_1)\subset (x_1,x_2)\subset (x_1,x_2,x_3)\subset \cdots
   \]
   never stabilizes.
