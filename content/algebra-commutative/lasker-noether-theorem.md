---
title: "Lasker–Noether Theorem"
description: "Every ideal in a Noetherian ring admits a finite primary decomposition."
---

## Statement

Let \(R\) be a {{< knowl id="noetherian-ring" text="Noetherian ring" >}} and \(I\subseteq R\) an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}.
Then there exist {{< knowl id="primary-ideal" section="algebra-rings" text="primary ideals" >}} \(Q_1,\dots,Q_r\) such that
\[
I = Q_1 \cap \cdots \cap Q_r.
\]
Moreover, for each \(i\), the radical \( \sqrt{Q_i}\) is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}:
\[
\sqrt{Q_i} \text{ is prime.}
\]

This is the existence of **primary decomposition** in Noetherian rings.

## Cross-links

- Primary decomposition as a concept: {{< knowl id="primary-decomposition" text="primary decomposition" >}}
- Radicals and primes: {{< knowl id="radical-of-ideal" section="algebra-rings" text="radical of an ideal" >}}, {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}
- Noetherian hypothesis: {{< knowl id="noetherian-ring" text="Noetherian ring" >}}

## Examples

1. **Squarefree monomial ideal.**  
   In \(R=k[x,y]\),
   \[
   (xy) = (x)\cap (y).
   \]
   Both \((x)\) and \((y)\) are prime, hence primary, so this is a primary decomposition.

2. **A non-prime primary component appears.**  
   In \(R=k[x,y]\),
   \[
   (x^2,xy) = (x)\cap (x^2,y).
   \]
   Here \((x)\) is prime. The ideal \((x^2,y)\) is \((x,y)\)-primary because \(\sqrt{(x^2,y)}=(x,y)\) is maximal (hence prime), and powers of \((x,y)\) control nilpotence mod \((x^2,y)\).

3. **Integers (PID case).**  
   In \(R=\mathbb Z\),
   \[
   (12) = (4)\cap (3).
   \]
   The ideal \((4)\) is \((2)\)-primary and \((3)\) is \((3)\)-primary (indeed prime), giving a primary decomposition of \((12)\).
