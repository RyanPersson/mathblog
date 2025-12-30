---
title: "Jacobson Radical Annihilates Simple Modules"
description: "Every element of the Jacobson radical acts as 0 on any simple module."
---

## Statement

Let \(R\) be a commutative ring and \(M\) a {{< knowl id="simple-module" section="algebra-modules" text="simple" >}} \(R\)-module.

**Theorem.**  
The {{< knowl id="jacobson-radical" section="algebra-rings" text="Jacobson radical" >}} satisfies
\[
J(R)\subseteq \mathrm{Ann}_R(M),
\]
so in particular
\[
J(R)\,M=0.
\]

Reason (standard): \(\mathrm{Ann}_R(M)\) is a {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideal" >}}, and by {{< knowl id="jacobson-radical-intersection-maximals" text="J(R) = ⋂ max ideals" >}} we have \(J(R)\) contained in every maximal ideal, hence in \(\mathrm{Ann}_R(M)\). (See also {{< knowl id="annihilator-module" section="algebra-modules" text="annihilator of a module" >}}.)

This fact is one of the key inputs behind {{< knowl id="nakayama-lemma" text="Nakayama's lemma" >}}.

## Examples

1. **Local ring: the maximal ideal kills the residue field.**  
   If \(R\) is {{< knowl id="local-ring" text="local" >}} with maximal ideal \(\mathfrak m\), then \(J(R)=\mathfrak m\).  
   The simple \(R\)-module is \(R/\mathfrak m\) (the {{< knowl id="residue-field" text="residue field" >}}), and indeed \(\mathfrak m\cdot (R/\mathfrak m)=0\).

   Example: \(R=k[x]/(x^2)\), \(\mathfrak m=(\bar x)\). Then \(\bar x\) acts by \(0\) on \(k\cong R/(\bar x)\).

2. **Integers.**  
   \(J(\mathbb Z)=(0)\), so \(J(\mathbb Z)M=0\) for every simple \(\mathbb Z\)-module.  
   The simple \(\mathbb Z\)-modules are \(\mathbb Z/p\mathbb Z\), and the zero ideal acts as \(0\) as expected.

3. **A finite quotient of \(\mathbb Z\).**  
   Let \(R=\mathbb Z/12\mathbb Z\). Then \(J(R)=(6)\) (intersection of the maximal ideals \((2)\) and \((3)\)).  
   The simple \(R\)-modules are \(R/(2)\cong \mathbb Z/2\mathbb Z\) and \(R/(3)\cong \mathbb Z/3\mathbb Z\).  
   In both cases, the class of \(6\) acts as \(0\), so \(J(R)\) annihilates each simple module.
