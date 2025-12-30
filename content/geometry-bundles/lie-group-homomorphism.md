---
title: "Lie group homomorphism"
description: "A smooth map between Lie groups that preserves multiplication (and hence inverses)."
---

Let $G$ and $H$ be {{< knowl id="lie-group" text="Lie groups" >}}. A **Lie group homomorphism** is a map $\varphi:G\to H$ that is both a group homomorphism and a {{< knowl id="smooth-map" text="smooth map" >}}; equivalently,
\[
\varphi(gh)=\varphi(g)\varphi(h)\quad \text{for all }g,h\in G,
\qquad\text{and}\qquad
\varphi \text{ is smooth.}
\]
In particular, $\varphi(e_G)=e_H$ and $\varphi(g^{-1})=\varphi(g)^{-1}$.

A Lie group homomorphism induces a canonical morphism between Lie algebras: its differential at the identity
\[
(d\varphi)_e:T_eG\to T_{e}H
\]
is a Lie algebra homomorphism, as in {{< knowl id="differential-of-a-lie-group-homomorphism-lie-algebra-homomorphism" text="the induced map on Lie algebras" >}}. It also intertwines the {{< knowl id="exponential-map-lie-group-exponential" text="exponential maps" >}}:
\[
\varphi(\exp_G X) = \exp_H\big((d\varphi)_e X\big)
\qquad\text{for all }X\in T_eG.
\]

The kernel $\ker(\varphi)$ is a subgroup of $G$; when it is closed (as happens, for example, for many standard homomorphisms), it is an embedded {{< knowl id="lie-subgroup" text="Lie subgroup" >}} of $G$.

## Examples

1. The determinant
   \[
   \det:GL(n,\mathbb{R})\to \mathbb{R}^\times
   \]
   is a Lie group homomorphism (multiplicative and smooth).

2. The map $\exp:\mathbb{R}\to \mathbb{R}_{>0}$ given by $t\mapsto e^t$ is a Lie group homomorphism from $(\mathbb{R},+)$ to $(\mathbb{R}_{>0},\times)$.

3. The covering map $\mathbb{R}\to S^1$ given by $t\mapsto e^{it}$ is a Lie group homomorphism from $(\mathbb{R},+)$ onto the circle group.
