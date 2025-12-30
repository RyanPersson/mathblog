---
title: "Going-Up Theorem"
description: "In an integral extension, chains of prime ideals lift upward."
---

## Statement

Let \(A \subseteq B\) be an {{< knowl id="integral-extension" text="integral extension" >}} (equivalently, every \(b\in B\) is {{< knowl id="integral-element" text="integral" >}} over \(A\)).

Suppose \( \mathfrak p \subseteq \mathfrak q\) are {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideals" >}} of \(A\), and let \( \mathfrak P\) be a prime ideal of \(B\) with
\[
\mathfrak P \cap A = \mathfrak p.
\]
Then there exists a prime ideal \( \mathfrak Q \subseteq B\) such that
\[
\mathfrak P \subseteq \mathfrak Q
\quad\text{and}\quad
\mathfrak Q \cap A = \mathfrak q.
\]

Equivalently: for the map on spectra
\[
{{< knowl id="prime-spectrum" text="Spec" >}}(B)\to {{< knowl id="prime-spectrum" text="Spec" >}}(A),
\]
prime chains in \(A\) can be lifted to prime chains in \(B\) once you start with a prime lying over the first one.

## Cross-links

- Existence of primes above a given prime: {{< knowl id="lying-over-theorem" text="lying-over theorem" >}}
- The opposite direction statement: {{< knowl id="going-down-theorem" text="going-down theorem" >}}
- Integrality: {{< knowl id="integral-extension" text="integral extension" >}}, {{< knowl id="integral-element" text="integral element" >}}

## Examples

1. **Gaussian integers.**  
   Take \(A=\mathbb Z \subseteq B=\mathbb Z[i]\), an integral extension.  
   Consider the chain \((0)\subset (5)\) in \(\mathbb Z\). Start with \(\mathfrak P=(0)\subset \mathbb Z[i]\) lying over \((0)\).  
   Going-up produces a prime \(\mathfrak Q\supset (0)\) lying over \((5)\); concretely, \((5)\) factors in \(\mathbb Z[i]\) and one can take \(\mathfrak Q=(2+i)\) (or \((2-i)\)).

2. **A simple normalization map.**  
   Let \(A=k[t^2]\subseteq B=k[t]\). This is integral since \(t\) satisfies \(T^2-t^2=0\) over \(A\).  
   The chain \((0)\subset (t^2)\) in \(A\) lifts: starting with \(\mathfrak P=(0)\) in \(B\) lying over \((0)\), going-up gives \(\mathfrak Q=(t)\) in \(B\) lying over \((t^2)\), and indeed \((t)\cap k[t^2]=(t^2)\).

3. **General picture in terms of spectra.**  
   If \(A\subseteq B\) is integral, then the induced map {{< knowl id="prime-spectrum" text="Spec" >}}(B)\(\to\){{< knowl id="prime-spectrum" text="Spec" >}}(A) is surjective ({{< knowl id="lying-over-theorem" text="lying-over" >}}) and satisfies going-up: specializations in \(A\) lift to specializations in \(B\).
