---
title: "Going-Down Theorem"
description: "If the base is integrally closed, prime chains descend through integral extensions."
---

## Statement

Let \(A \subseteq B\) be an {{< knowl id="integral-extension" text="integral extension" >}} of **domains**, and assume \(A\) is an {{< knowl id="integrally-closed-domain" text="integrally closed domain" >}}.

Let \( \mathfrak p \subseteq \mathfrak q\) be {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideals" >}} in \(A\), and let \(\mathfrak Q\) be a prime ideal of \(B\) such that
\[
\mathfrak Q \cap A = \mathfrak q.
\]
Then there exists a prime ideal \(\mathfrak P \subseteq B\) with
\[
\mathfrak P \subseteq \mathfrak Q
\quad\text{and}\quad
\mathfrak P \cap A = \mathfrak p.
\]

Informally: under integrality + normality of the base, inclusions of primes in \(A\) can be lifted **downward** inside a chosen prime of \(B\).

## Cross-links

- Integrality and lifting upward: {{< knowl id="integral-extension" text="integral extension" >}}, {{< knowl id="going-up-theorem" text="going-up theorem" >}}
- Base condition: {{< knowl id="integrally-closed-domain" text="integrally closed domain" >}}
- Existence of primes above: {{< knowl id="lying-over-theorem" text="lying-over theorem" >}}

## Examples

1. **\(\mathbb Z \subset \mathbb Z[i]\).**  
   \(\mathbb Z\) is integrally closed, and \(\mathbb Z[i]\) is integral over \(\mathbb Z\).  
   Take \((0)\subset (5)\) in \(\mathbb Z\) and choose \(\mathfrak Q=(2+i)\subset \mathbb Z[i]\) lying over \((5)\).  
   Going-down produces a prime \(\mathfrak P\subset (2+i)\) lying over \((0)\); here \(\mathfrak P=(0)\) works.

2. **A quadratic integral extension of a PID.**  
   Let \(A=k[x]\) and \(B=k[x,y]/(y^2-x)\cong k[y]\). The inclusion \(k[x]\hookrightarrow k[y]\) via \(x\mapsto y^2\) is integral, and \(k[x]\) is integrally closed.  
   For the chain \((0)\subset (x)\) in \(A\), pick \(\mathfrak Q=(y)\subset B\) lying over \((x)\).  
   Going-down gives \(\mathfrak P=(0)\subset (y)\) lying over \((0)\).

3. **Warning (no example needed to use it).**  
   If \(A\) is *not* integrally closed, going-down can fail for some integral extensions; this is one reason normality (integral closedness) is a standard hypothesis in dimension theory.
