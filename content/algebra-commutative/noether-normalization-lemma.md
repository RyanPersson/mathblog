---
title: "Noether Normalization Lemma"
description: "A finitely generated k-algebra is integral over a polynomial subalgebra in d variables."
---

## Statement

Let \(k\) be a {{< knowl id="field" section="algebra-rings" text="field" >}} and let \(A\) be a finitely generated commutative \(k\)-algebra. Then there exist elements
\[
y_1,\dots,y_d \in A
\]
that are algebraically independent over \(k\) such that the natural inclusion
\[
k[y_1,\dots,y_d] \hookrightarrow A
\]
makes \(A\) an {{< knowl id="integral-extension" text="integral extension" >}}, i.e. every element of \(A\) is {{< knowl id="integral-element" text="integral" >}} over \(k[y_1,\dots,y_d]\). Equivalently, \(A\) is a finite (module-finite) \(k[y_1,\dots,y_d]\)-module.

Consequences/interpretation:

- \(k[y_1,\dots,y_d]\) is a {{< knowl id="polynomial-ring" section="algebra-rings" text="polynomial ring" >}} in \(d\) variables.
- The integer \(d\) equals \(\dim(A)\), the {{< knowl id="krull-dimension" text="Krull dimension" >}} of \(A\) (in particular when \(A\) is a domain, \(d\) is the transcendence degree of \(\mathrm{Frac}(A)\) over \(k\)).
- Since \(A\) is finite over a Noetherian ring, \(A\) is {{< knowl id="noetherian-ring" text="Noetherian" >}} (compare {{< knowl id="hilbert-basis-theorem" section="algebra-rings" text="Hilbert basis theorem" >}}, {{< knowl id="hilbert-basis-corollary" text="Hilbert basis corollary" >}}).

## Examples

1. **Polynomial ring itself.**  
   If \(A=k[x_1,\dots,x_n]\), take \(y_i=x_i\). Then \(A=k[y_1,\dots,y_n]\), so \(A\) is (trivially) integral over the polynomial subalgebra, with \(d=n\).

2. **A parabola (finite map to \(\mathbb A^1\)).**  
   Let
   \[
   A = k[x,y]/(y-x^2).
   \]
   Set \(t=y\in A\). Then \(x\) satisfies the monic polynomial
   \[
   X^2 - t = 0 \quad\text{in } A,
   \]
   so \(x\) is integral over \(k[t]\). Hence \(A\) is integral (indeed finite) over \(k[t]\), and \(d=1\).

3. **Union of coordinate axes.**  
   Let
   \[
   A = k[x,y]/(xy).
   \]
   Set \(t=x+y\in A\). Then \(x\) satisfies
   \[
   X^2 - tX = 0
   \]
   because \(x^2 - (x+y)x = x^2 - x^2 - xy = 0\) in \(A\). This is monic in \(X\), so \(x\) is integral over \(k[t]\), and then \(y=t-x\) is also integral. Thus \(A\) is integral over \(k[t]\), again with \(d=1\).
