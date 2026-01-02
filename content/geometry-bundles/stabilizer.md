---
title: "Stabilizer (isotropy subgroup)"
description: "The subgroup of a Lie group that fixes a point under a group action."
---

Let $G$ act on a manifold $M$ via a {{< knowl id="smooth-action-of-a-lie-group-on-a-manifold" text="smooth action" >}}.

## Definition
For $x\in M$, the **stabilizer** (or **isotropy subgroup**) of $x$ is
\[
G_x := \{ g\in G \mid g\cdot x = x\}.
\]
It is a subgroup of $G$. If $G$ is a Lie group and the action is smooth, then $G_x$ is a closed subgroup of $G$, hence a Lie subgroup.

The stabilizer controls the orbit through $x$: the {{< knowl id="orbit-map" text="orbit map" >}} $G\to G\cdot x$ has kernel $G_x$, and (under mild hypotheses) the orbit is modeled on the homogeneous space $G/G_x$.

## Examples
1. **Rotations of the plane.** For $SO(2)\curvearrowright \mathbb{R}^2$, the stabilizer of $0$ is all of $SO(2)$, while the stabilizer of any nonzero vector is trivial.
2. **Coset actions.** For the left action of $G$ on $G/H$ by $g\cdot (g'H)= (gg')H$, the stabilizer of the basepoint $eH$ is exactly $H$.
3. **Conjugation.** For the conjugation action of $G$ on itself, the stabilizer of an element $h$ is its centralizer $C_G(h)=\{g\in G\mid gh=hg\}$.
