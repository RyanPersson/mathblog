---
title: "Primary decomposition"
description: "Expressing an ideal as an intersection of primary ideals (guaranteed in Noetherian rings)."
---

Let \(R\) be a commutative ring and \(I\subseteq R\) an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}.

## Definition
A **primary decomposition** of \(I\) is an expression
\[
I \;=\; Q_1 \cap \cdots \cap Q_r
\]
where each \(Q_i\) is a {{< knowl id="primary-ideal" section="algebra-rings" text="primary ideal" >}}. Typically one tracks the associated prime ideals
\[
P_i \;=\; \sqrt{Q_i},
\]
where \(\sqrt{Q_i}\) is the {{< knowl id="radical-of-ideal" section="algebra-rings" text="radical" >}} of \(Q_i\) (and each \(P_i\) is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}).

## Theorem (existence in the Noetherian case)
If \(R\) is a {{< knowl id="noetherian-ring" text="Noetherian ring" >}}, then every ideal \(I\) admits a primary decomposition. This is the content of the {{< knowl id="lasker-noether-theorem" text="Lasker–Noether theorem" >}} (see also {{< knowl id="noetherian-primary-decomposition" text="Noetherian primary decomposition" >}}).

## Examples
1. **A squarefree monomial ideal.**  
   In \(k[x,y]\),
   \[
   (xy) \;=\; (x)\cap (y).
   \]
   Here \((x)\) and \((y)\) are prime (hence primary).

2. **A slightly less trivial example.**  
   In \(k[x,y]\),
   \[
   (x^2,xy) \;=\; (x)\cap (x^2,y).
   \]
   The ideal \((x)\) is prime, and \((x^2,y)\) is \((x,y)\)-primary.

3. **An integer ideal.**  
   In \(\mathbb{Z}\),
   \[
   (12) \;=\; (4)\cap (3).
   \]
   Indeed \((4)\cap (3)=(\mathrm{lcm}(4,3))=(12)\); moreover \((4)=(2^2)\) is \((2)\)-primary and \((3)\) is prime.
