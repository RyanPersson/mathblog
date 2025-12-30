---
title: "Lying-Over Theorem"
description: "In an integral extension, every prime ideal has at least one prime lying above it."
---

## Statement

Let \(A \subseteq B\) be an {{< knowl id="integral-extension" text="integral extension" >}}.

For every {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} \(\mathfrak p \subseteq A\), there exists a prime ideal \(\mathfrak P \subseteq B\) such that
\[
\mathfrak P \cap A = \mathfrak p.
\]
Equivalently, the induced map on prime spectra
\[
{{< knowl id="prime-spectrum" text="Spec" >}}(B)\longrightarrow {{< knowl id="prime-spectrum" text="Spec" >}}(A)
\]
is **surjective**.

## Cross-links

- Integrality: {{< knowl id="integral-extension" text="integral extension" >}}
- Lifting chains after choosing a prime above: {{< knowl id="going-up-theorem" text="going-up theorem" >}}
- Prime spectra viewpoint: {{< knowl id="prime-spectrum" text="prime spectrum" >}}

## Examples

1. **Gaussian integers again.**  
   \( \mathbb Z \subseteq \mathbb Z[i]\) is integral.  
   For the prime \((5)\subset \mathbb Z\), there are primes in \(\mathbb Z[i]\) lying over it, e.g. \((2+i)\) and \((2-i)\), each contracting to \((5)\).

2. **Square map subring.**  
   With \(A=k[t^2]\subseteq B=k[t]\), every prime of \(A\) has a prime above it in \(B\).  
   For instance, \((t^2)\subset A\) has the lying-over prime \((t)\subset B\), since \((t)\cap k[t^2]=(t^2)\).

3. **Adjoining an integral element.**  
   Let \(B=A[\alpha]\) where \(\alpha\) is {{< knowl id="integral-element" text="integral" >}} over \(A\) (so \(A\subseteq B\) is integral).  
   Then every \(\mathfrak p\in {{< knowl id="prime-spectrum" text="Spec" >}}(A)\) arises as the contraction of some \(\mathfrak P\in {{< knowl id="prime-spectrum" text="Spec" >}}(B)\).
