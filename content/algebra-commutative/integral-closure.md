---
title: "Integral closure"
description: "The subring of an extension consisting of all elements integral over a given ring."
---

Let \(R \subseteq A\) be commutative rings.

## Definition
An element \(a \in A\) is **integral over** \(R\) if there exists a monic polynomial
\[
a^n + r_{n-1}a^{n-1} + \cdots + r_1 a + r_0 = 0
\quad\text{with } r_i \in R.
\]
(See {{< knowl id="integral-element" text="integral element" >}}.)

The **integral closure of \(R\) in \(A\)** is
\[
\overline{R}^{\,A} \;=\; \{\,a \in A : a \text{ is integral over } R\,\}.
\]
Equivalently, \(\overline{R}^{\,A}\) is the largest subring \(B\) with \(R \subseteq B \subseteq A\) such that \(B\) is an {{< knowl id="integral-extension" text="integral extension" >}} of \(R\).

When \(R\) is an {{< knowl id="integral-domain" section="algebra-rings" text="integral domain" >}} with {{< knowl id="fraction-field" section="algebra-rings" text="fraction field" >}} \(K\), the phrase “integral closure of \(R\)” often means the integral closure of \(R\) in \(K\). In that case, \(R\) is {{< knowl id="integrally-closed-domain" text="integrally closed" >}} iff \(\overline{R}^{\,K}=R\).

## Examples
1. **\(\mathbb{Z}\subset \mathbb{Q}\).**  
   The integral closure of \(\mathbb{Z}\) in \(\mathbb{Q}\) is \(\mathbb{Z}\): the only rationals integral over \(\mathbb{Z}\) are the integers.

2. **\(\mathbb{Z}\subset \mathbb{Q}(\sqrt{5})\).**  
   The integral closure of \(\mathbb{Z}\) in \(\mathbb{Q}(\sqrt{5})\) is
   \[
   \mathbb{Z}\Big[\tfrac{1+\sqrt{5}}{2}\Big],
   \]
   since \(\frac{1+\sqrt{5}}{2}\) satisfies the monic equation \(x^2-x-1=0\).

3. **A cusp subring.**  
   Let \(k\) be a field and \(R=k[t^2,t^3]\subset k[t]\subset k(t)\).  
   Then \(t\) is integral over \(R\) because it satisfies \(x^2-t^2=0\) with \(t^2\in R\). One checks that the integral closure of \(R\) in \(k(t)\) is \(k[t]\).
