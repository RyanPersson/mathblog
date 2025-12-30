---
title: "Simple Artinian Rings are Matrix Rings"
description: "A simple Artinian ring is isomorphic to a full matrix ring over a division ring."
---

## Statement

A ring \(R\) is **simple Artinian** if it is {{< knowl id="simple-ring" section="algebra-rings" text="simple" >}} (no nontrivial two-sided ideals) and {{< knowl id="artinian-ring" text="Artinian" >}} (descending chain condition on ideals).

**Theorem (Wedderburn–Artin, simple case).**  
If \(R\) is simple Artinian, then there exist an integer \(n\ge 1\) and a {{< knowl id="division-ring" section="algebra-rings" text="division ring" >}} \(D\) such that
\[
R \cong M_n(D),
\]
the ring of \(n\times n\) matrices over \(D\) (see {{< knowl id="matrix-ring" section="algebra-rings" text="matrix ring" >}}).

Moreover, \(D\) can be taken to be (the opposite of) the endomorphism ring of a simple left \(R\)-module:
\[
D \cong \mathrm{End}_R(S)^{\mathrm{op}}
\]
for a simple \(R\)-module \(S\).

This is the “one simple component” case of the full {{< knowl id="artin-wedderburn-theorem" section="algebra-rings" text="Artin–Wedderburn theorem" >}}; compare also {{< knowl id="semisimple-artinian-product" text="semisimple Artinian = product of matrix rings" >}}.

## Examples

1. **Full matrix algebras over a field.**  
   For a field \(k\), the ring \(M_n(k)\) is simple Artinian.  
   Here \(D=k\), so the theorem recovers \(R\cong M_n(k)\) itself.

2. **Division rings.**  
   Any division ring \(D\) is simple Artinian (it has no nontrivial ideals, and it is Artinian).  
   This is the special case \(n=1\): \(D \cong M_1(D)\).

3. **Endomorphism rings of finite-dimensional vector spaces.**  
   If \(V\) is an \(n\)-dimensional vector space over a field \(k\), then
   \[
   \mathrm{End}_k(V) \cong M_n(k).
   \]
   Since \(M_n(k)\) is simple Artinian, so is \(\mathrm{End}_k(V)\).

*Remark (commutative case):* If \(R\) is commutative and simple Artinian, then the theorem forces \(n=1\) and \(D\) commutative, so \(R\) is a field.
