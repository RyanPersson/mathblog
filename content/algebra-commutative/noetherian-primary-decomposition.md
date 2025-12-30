---
title: "Primary decomposition in Noetherian rings"
description: "In a Noetherian ring, every ideal is a finite intersection of primary ideals (Lasker–Noether)."
---

**Theorem (Noetherian primary decomposition).**  
Let \(R\) be a {{< knowl id="noetherian-ring" text="Noetherian ring" >}} and let \(I\subseteq R\) be an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}. Then there exist {{< knowl id="primary-ideal" section="algebra-rings" text="primary ideals" >}} \(Q_1,\dots,Q_r\) such that
\[
I \;=\; \bigcap_{i=1}^r Q_i.
\]
Writing \(\mathfrak p_i=\sqrt{Q_i}\) (the {{< knowl id="radical-of-ideal" section="algebra-rings" text="radical" >}}), each \(\mathfrak p_i\) is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}. One can choose a **minimal** primary decomposition in which the primes \(\mathfrak p_i\) are distinct; in that case the set \(\{\mathfrak p_i\}\) is uniquely determined by \(I\).

This is commonly packaged as the {{< knowl id="lasker-noether-theorem" text="Lasker–Noether theorem" >}}, together with the definition of {{< knowl id="primary-decomposition" text="primary decomposition" >}}.

**Related knowls.**
- {{< knowl id="primary-decomposition" text="Primary decomposition" >}}
- {{< knowl id="lasker-noether-theorem" text="Lasker–Noether theorem" >}}
- {{< knowl id="primary-ideal" section="algebra-rings" text="Primary ideal" >}}

## Examples

1. **In \(\mathbb{Z}\): factorization into primary components.**  
   In \(R=\mathbb{Z}\),
   \[
   (12) \;=\; (4)\cap(3).
   \]
   Here \((4)\) is \((2)\)-primary and \((3)\) is \((3)\)-primary. (In a PID, \((a)\cap(b)=(\mathrm{lcm}(a,b))\).)

2. **A squarefree monomial ideal.**  
   In \(k[x,y]\),
   \[
   (xy) \;=\; (x)\cap(y).
   \]
   Both \((x)\) and \((y)\) are prime (hence primary), so this is a primary decomposition.

3. **A nontrivial primary decomposition with the same radical.**  
   In \(k[x,y]\),
   \[
   (x^2,xy,y^2) \;=\; (x^2,y)\;\cap\;(x,y^2).
   \]
   The ideals \((x^2,y)\) and \((x,y^2)\) are both \((x,y)\)-primary (their radicals are \((x,y)\)), and their intersection gives \((x,y)^2=(x^2,xy,y^2)\).
