---
title: "Adjoint action of a Lie group"
description: "The action of a Lie group on its Lie algebra obtained by differentiating conjugation."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} with Lie algebra {{< knowl id="lie-algebra" text="Lie algebra" >}} $\mathfrak{g}=T_eG$. For each $g\in G$, consider the diffeomorphism of $G$ given by the {{< knowl id="conjugation-action-of-a-lie-group-on-itself" text="conjugation map" >}}
\[
C_g:G\to G,\qquad C_g(h)=ghg^{-1}.
\]
The **adjoint action** (often written $\mathrm{Ad}$) is the map
\[
\mathrm{Ad}:G\to \mathrm{Aut}(\mathfrak{g}),
\qquad
\mathrm{Ad}_g := (\mathrm{d}C_g)_e:\mathfrak{g}\to\mathfrak{g}.
\]
Equivalently, $\mathrm{Ad}_g$ is the unique linear map such that for every $X\in\mathfrak{g}$, the left-invariant vector field associated to $\mathrm{Ad}_g X$ is the pushforward of the left-invariant vector field associated to $X$ under $C_g$.

The map $\mathrm{Ad}$ is a Lie group homomorphism $G\to \mathrm{GL}(\mathfrak{g})$, called the adjoint representation of $G$ on $\mathfrak{g}$.

## Examples
1. **Matrix Lie groups.** For $G\subset \mathrm{GL}(n,\mathbb{R})$, one has $\mathrm{Ad}_g(X)=gXg^{-1}$ for $X\in\mathfrak{g}$.
2. **Abelian Lie groups.** If $G$ is abelian, then $C_g=\mathrm{id}$ for all $g$, hence $\mathrm{Ad}_g=\mathrm{id}_{\mathfrak{g}}$.
3. **Rotations.** For $G=\mathrm{SO}(3)$, identifying $\mathfrak{so}(3)$ with $\mathbb{R}^3$ via the cross-product isomorphism, $\mathrm{Ad}_g$ corresponds to the usual rotation of vectors in $\mathbb{R}^3$ by $g$.
