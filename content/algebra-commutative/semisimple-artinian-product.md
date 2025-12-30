---
title: "Semisimple Artinian rings as finite products"
description: "A semisimple Artinian ring decomposes as a finite product of matrix rings over division rings (Artin–Wedderburn)."
---

**Theorem (Artin–Wedderburn, product form).**  
Let \(R\) be a (unital) ring that is both {{< knowl id="semisimple-ring" section="algebra-rings" text="semisimple" >}} and {{< knowl id="artinian-ring" text="Artinian" >}}. Then there exist division rings \(D_1,\dots,D_t\) and positive integers \(n_1,\dots,n_t\) such that
\[
R \;\cong\; \prod_{i=1}^t M_{n_i}(D_i).
\]
Each factor \(M_{n_i}(D_i)\) is a **simple Artinian** ring, hence (up to isomorphism) a matrix ring over a {{< knowl id="division-ring" section="algebra-rings" text="division ring" >}}.

Conversely, any finite product \(\prod_i M_{n_i}(D_i)\) is semisimple Artinian.

**Commutative specialization.**  
If \(R\) is *commutative* and semisimple Artinian, then each \(D_i\) must be a {{< knowl id="field" section="algebra-rings" text="field" >}} and each \(n_i=1\), so
\[
R \;\cong\; \prod_{i=1}^t k_i
\quad\text{(finite product of fields).}
\]

**Related knowls.**
- {{< knowl id="artin-wedderburn-theorem" section="algebra-rings" text="Artin–Wedderburn theorem" >}}
- {{< knowl id="simple-artinian-matrix-ring" text="Simple Artinian rings are matrix rings" >}}
- {{< knowl id="matrix-ring" section="algebra-rings" text="Matrix ring" >}}

## Examples

1. **A single simple factor.**  
   For a field \(k\), the ring \(R=M_n(k)\) is semisimple Artinian, and the decomposition is just
   \[
   M_n(k)\cong M_n(k)
   \quad (t=1,\; D_1=k,\; n_1=n).
   \]

2. **A product of two simple Artinian rings.**  
   \(R=M_2(\mathbb{R})\times M_3(\mathbb{C})\) is semisimple Artinian with two factors.

3. **A commutative example via Chinese remainder.**  
   If \(\mathrm{char}(k)\neq 2\), then
   \[
   k[x]/(x^2-1)\;\cong\; k[x]/(x-1)\times k[x]/(x+1)\;\cong\; k\times k
   \]
   by the {{< knowl id="chinese-remainder-theorem" section="algebra-rings" text="Chinese remainder theorem" >}}.  This is semisimple Artinian (a product of fields).
