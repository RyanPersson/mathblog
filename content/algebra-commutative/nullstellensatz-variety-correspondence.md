---
title: "Nullstellensatz Variety–Ideal Correspondence"
description: "Over an algebraically closed field, radical ideals in k[x1,...,xn] correspond to affine algebraic sets in k^n."
---

## Statement

Let \(k\) be an algebraically closed {{< knowl id="field" section="algebra-rings" text="field" >}}, and let
\[
R = k[x_1,\dots,x_n]
\]
be the {{< knowl id="polynomial-ring" section="algebra-rings" text="polynomial ring" >}}.

- For an ideal \(I\subseteq R\), define the affine algebraic set
  \[
  V(I) = \{a\in k^n : f(a)=0 \ \text{for all } f\in I\}.
  \]
- For a subset \(X\subseteq k^n\), define the vanishing ideal
  \[
  I(X)=\{f\in R : f(a)=0 \ \text{for all } a\in X\}.
  \]

Then Hilbert’s Nullstellensatz implies:
\[
I(V(I)) = \sqrt{I},
\]
where \(\sqrt{I}\) is the {{< knowl id="radical-of-ideal" section="algebra-rings" text="radical of I" >}}.

Consequences:

- The assignments \(I \mapsto V(I)\) and \(X \mapsto I(X)\) are inclusion-reversing.
- \(I\) is radical iff \(I=I(V(I))\).
- There is a bijection between **radical ideals** of \(R\) and **affine algebraic sets** in \(k^n\).
- Under this correspondence, {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideals" >}} correspond to **irreducible** algebraic sets, and {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideals" >}} correspond to **points**.

This viewpoint is the algebra behind the {{< knowl id="zariski-topology" text="Zariski topology" >}} on \(k^n\).

## Cross-links

- Topology side: {{< knowl id="zariski-topology" text="Zariski topology" >}}
- Algebra side: {{< knowl id="radical-of-ideal" section="algebra-rings" text="radical ideal" >}}, {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}, {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideal" >}}
- Spectral viewpoint: {{< knowl id="prime-spectrum" text="prime spectrum" >}}
- Classical theorems: {{< knowl id="nullstellensatz-weak" section="algebra-rings" text="weak Nullstellensatz" >}}, {{< knowl id="nullstellensatz-strong" section="algebra-rings" text="strong Nullstellensatz" >}}

## Examples

1. **A point in the plane.**  
   In \(k[x,y]\), the ideal \((x-a,\,y-b)\) is maximal, and
   \[
   V(x-a,y-b)=\{(a,b)\}.
   \]

2. **A curve.**  
   In \(k[x,y]\), the ideal \((y-x^2)\) defines the parabola:
   \[
   V(y-x^2)=\{(t,t^2): t\in k\}.
   \]
   Since \((y-x^2)\) is prime, the parabola is irreducible.

3. **Radical matters: same variety, different ideal.**  
   In \(k[x,y]\),
   \[
   V(x^2)=V(x)=\{(0,y): y\in k\},
   \]
   and indeed \(I(V(x^2))=\sqrt{(x^2)}=(x)\).
