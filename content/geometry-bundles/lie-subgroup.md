---
title: "Lie subgroup"
description: "A subgroup of a Lie group that carries a compatible immersed (often embedded) smooth manifold structure."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}}. A **Lie subgroup** of $G$ is a subgroup $H\le G$ together with a smooth manifold structure on $H$ such that the inclusion map
\[
i:H\hookrightarrow G
\]
is a {{< knowl id="smooth-immersion" text="smooth immersion" >}} and a group homomorphism (so, in particular, the multiplication and inversion on $H$ are smooth with respect to this manifold structure).

If, moreover, the inclusion $i$ is a {{< knowl id="smooth-embedding" text="smooth embedding" >}}, then $H$ is called an **embedded Lie subgroup** (equivalently, $H$ is an embedded submanifold of $G$ and a subgroup).

A fundamental existence theorem is the **closed subgroup theorem**: if $H\le G$ is a subgroup that is closed as a subset of the underlying topological space of $G$, then $H$ admits a unique smooth manifold structure making it an embedded Lie subgroup of $G$.

At the infinitesimal level, if $H$ is a Lie subgroup then the inclusion induces an injective linear map on tangent spaces at the identity, identifying $T_eH$ with a Lie subalgebra of the {{< knowl id="lie-algebra-of-a-lie-group" text="Lie algebra" >}} $T_eG$.

## Examples

1. $SO(n)\subset GL(n,\mathbb{R})$ is a Lie subgroup: it is a closed subgroup of $GL(n,\mathbb{R})$, hence an embedded Lie subgroup by the closed subgroup theorem.

2. The special linear group
   \[
   SL(n,\mathbb{R})=\{A\in GL(n,\mathbb{R}) : \det(A)=1\}
   \]
   is a Lie subgroup of $GL(n,\mathbb{R})$ because it is the kernel of the determinant {{< knowl id="lie-group-homomorphism" text="Lie group homomorphism" >}} $\det:GL(n,\mathbb{R})\to \mathbb{R}^\times$ and is closed.

3. The lattice $\mathbb{Z}^n\subset (\mathbb{R}^n,+)$ is a (discrete) Lie subgroup: it is a closed subgroup and becomes a $0$-dimensional smooth manifold.
