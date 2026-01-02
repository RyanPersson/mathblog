---
title: "Right translation"
description: "The diffeomorphism of a Lie group given by multiplication on the right by a fixed element."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} and fix $g\in G$. The **right translation by $g$** is the map
\[
R_g:G\to G,\qquad R_g(h)=hg.
\]
Smoothness of multiplication implies $R_g$ is smooth, and $R_{g^{-1}}$ is its inverse; thus $R_g$ is a {{< knowl id="diffeomorphism" text="diffeomorphism" >}}.

For each $h\in G$, the {{< knowl id="differential-of-a-smooth-map" text="differential" >}} $(\mathrm{d}R_g)_h:T_hG\to T_{hg}G$ is a linear isomorphism. Right translations are used to define right-invariant vector fields and right-trivializations of the tangent bundle.

## Examples
1. **Additive group.** On $G=\mathbb{R}^n$ under addition, $R_a(x)=x+a$, which coincides with left translation because the group is abelian.
2. **Matrix multiplication.** On $G=\mathrm{GL}(n,\mathbb{R})$, $R_A(B)=BA$ is right multiplication by a fixed invertible matrix $A$.
3. **Right-invariant fields.** If $X\in T_eG$, the assignment $h\mapsto (\mathrm{d}R_h)_e(X)$ defines a right-invariant vector field with value $X$ at the identity.
