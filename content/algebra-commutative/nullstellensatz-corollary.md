---
title: "Nullstellensatz corollary: maximal ideals are points"
description: "Over an algebraically closed field, maximal ideals in k[x1,...,xn] are exactly kernels of evaluation at points."
---

**Corollary (Nullstellensatz: maximal ideals correspond to points).**  
Let \(k\) be an algebraically closed {{< knowl id="field" section="algebra-rings" text="field" >}} and let \(R=k[x_1,\dots,x_n]\). Then every {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideal" >}} \(\mathfrak m\subset R\) is of the form
\[
\mathfrak m \;=\; (x_1-a_1,\dots,x_n-a_n)
\]
for a unique point \(a=(a_1,\dots,a_n)\in k^n\). Equivalently,
\[
R/\mathfrak m \;\cong\; k,
\quad\text{and}\quad
\mathfrak m = \ker(\mathrm{ev}_a),
\]
where \(\mathrm{ev}_a\) is evaluation at \(a\).

This is a standard corollary of the (weak) {{< knowl id="nullstellensatz-weak" section="algebra-rings" text="Hilbert Nullstellensatz" >}}, and it underlies the {{< knowl id="nullstellensatz-variety-correspondence" text="variety–ideal correspondence" >}}.

**Related knowls.**
- {{< knowl id="nullstellensatz-weak" section="algebra-rings" text="Weak Nullstellensatz" >}}
- {{< knowl id="maximal-ideal" section="algebra-rings" text="Maximal ideal" >}}
- {{< knowl id="residue-field" text="Residue field" >}}

## Examples

1. **One variable over \(\mathbb{C}\).**  
   In \(\mathbb{C}[x]\), the maximal ideals are exactly \((x-a)\) with \(a\in\mathbb{C}\). The quotient \(\mathbb{C}[x]/(x-a)\cong\mathbb{C}\).

2. **A point in \(\mathbb{C}^2\).**  
   In \(\mathbb{C}[x,y]\), the ideal
   \[
   (x-1,\;y-i)
   \]
   is maximal and corresponds to the point \((1,i)\in\mathbb{C}^2\). Indeed,
   \(\mathbb{C}[x,y]/(x-1,y-i)\cong\mathbb{C}\).

3. **Why “algebraically closed” matters.**  
   Over \(\mathbb{R}\), the ideal \((x^2+1)\subset\mathbb{R}[x]\) is maximal, but it is **not** of the form \((x-a)\) for any \(a\in\mathbb{R}\). (Its quotient is \(\mathbb{R}[x]/(x^2+1)\cong\mathbb{C}\).)
