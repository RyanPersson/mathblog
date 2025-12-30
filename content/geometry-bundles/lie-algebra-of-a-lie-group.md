---
title: "Lie algebra of a Lie group"
description: "The tangent space at the identity of a Lie group, with bracket induced by left-invariant vector fields."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} with identity element $e$. The **Lie algebra of $G$** is the real vector space
\[
\mathfrak{g} := T_eG,
\]
the {{< knowl id="tangent-space-at-a-point" text="tangent space" >}} of $G$ at the identity, equipped with a canonical Lie bracket defined as follows.

For each $X\in \mathfrak{g}$, define a vector field $\widetilde{X}$ on $G$ by left translation:
\[
\widetilde{X}_g := (dL_g)_e(X),
\]
where $L_g$ is the {{< knowl id="left-translation-l-g" text="left translation" >}} map and $(dL_g)_e$ is the {{< knowl id="differential-pushforward-of-a-smooth-map" text="pushforward" >}} (differential) at $e$. Then $\widetilde{X}$ is a {{< knowl id="left-invariant-vector-field" text="left-invariant vector field" >}}, and every left-invariant vector field arises uniquely this way.

The space of left-invariant vector fields is closed under the {{< knowl id="lie-bracket" text="Lie bracket" >}} of vector fields. The Lie bracket on $\mathfrak{g}$ is defined by
\[
[X,Y] := ([\widetilde{X},\widetilde{Y}])_e,
\qquad X,Y\in\mathfrak{g},
\]
which makes $\mathfrak{g}$ into a Lie algebra.

The {{< knowl id="exponential-map-lie-group-exponential" text="exponential map" >}} $\exp_G:\mathfrak{g}\to G$ is defined using one-parameter subgroups and relates the Lie algebra structure to the group structure near $e$. Moreover, if $\varphi:G\to H$ is a {{< knowl id="lie-group-homomorphism" text="Lie group homomorphism" >}}, then its differential at the identity
is a Lie algebra homomorphism, as explained in {{< knowl id="differential-of-a-lie-group-homomorphism-lie-algebra-homomorphism" text="the induced map on Lie algebras" >}}.

## Examples

1. For $G=GL(n,\mathbb{R})$, one has $\mathfrak{g}=\mathfrak{gl}(n,\mathbb{R})$ (all $n\times n$ real matrices), with bracket
   \[
   [A,B]=AB-BA.
   \]

2. For $G=SO(n)$, one has $\mathfrak{g}=\mathfrak{so}(n)$, the space of skew-symmetric matrices $A^T=-A$, with the same commutator bracket.

3. For the abelian Lie group $(\mathbb{R}^n,+)$, the Lie algebra is $\mathbb{R}^n$ with the zero bracket: $[X,Y]=0$ for all $X,Y\in\mathbb{R}^n$.
