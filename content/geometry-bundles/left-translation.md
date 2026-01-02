---
title: "Left translation"
description: "The diffeomorphism of a Lie group given by multiplication on the left by a fixed element."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} and fix $g\in G$. The **left translation by $g$** is the map
\[
L_g:G\to G,\qquad L_g(h)=gh.
\]
The group operations are smooth, so $L_g$ is a smooth map. Its inverse is $L_{g^{-1}}$, hence $L_g$ is a {{< knowl id="diffeomorphism" text="diffeomorphism" >}}.

For each $h\in G$, the {{< knowl id="differential-of-a-smooth-map" text="differential" >}} $(\mathrm{d}L_g)_h:T_hG\to T_{gh}G$ is a linear isomorphism. In particular, at the identity it gives a canonical identification $T_eG\cong T_gG$ via $(\mathrm{d}L_g)_e$.

## Examples
1. **Additive group.** If $G=\mathbb{R}^n$ with addition, then $L_a(x)=a+x$ is ordinary translation in Euclidean space.
2. **Matrix multiplication.** If $G=\mathrm{GL}(n,\mathbb{R})$, then $L_A(B)=AB$ is left multiplication by a fixed invertible matrix $A$.
3. **Transporting tangent vectors.** On any Lie group, $(\mathrm{d}L_g)_e$ sends an element of the Lie algebra $\mathfrak{g}=T_eG$ to the corresponding value at $g$ of the associated left-invariant vector field.
