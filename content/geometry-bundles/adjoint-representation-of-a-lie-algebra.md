---
title: "Adjoint representation of a Lie algebra"
description: "The representation of a Lie algebra on itself given by bracketing with a fixed element."
---

Let $\mathfrak{g}$ be a Lie algebra with bracket $[\cdot,\cdot]$. The **adjoint representation** (often written $\mathrm{ad}$) is the linear map
\[
\mathrm{ad}:\mathfrak{g}\to \mathrm{End}(\mathfrak{g}),
\qquad
\mathrm{ad}_X(Y):=[X,Y].
\]
The defining property is that $\mathrm{ad}$ is a Lie algebra homomorphism:
\[
\mathrm{ad}_{[X,Y]}=[\mathrm{ad}_X,\mathrm{ad}_Y]
\quad\text{in }\mathrm{End}(\mathfrak{g}),
\]
where the bracket on the right is the commutator of endomorphisms. This identity is equivalent to the Jacobi identity in $\mathfrak{g}$.

If $\mathfrak{g}$ arises as the {{< knowl id="lie-algebra" text="Lie algebra" >}} of a Lie group $G$, then $\mathrm{ad}$ is the differential at the identity of the {{< knowl id="adjoint-action-of-a-lie-group" text="adjoint action" >}} $\mathrm{Ad}:G\to \mathrm{GL}(\mathfrak{g})$.

## Examples
1. **Abelian Lie algebra.** If $\mathfrak{g}$ is abelian, then $[X,Y]=0$ for all $X,Y$, so $\mathrm{ad}_X=0$ for every $X$.
2. **Matrices.** For $\mathfrak{g}=\mathfrak{gl}(n,\mathbb{R})$, $\mathrm{ad}_A(B)=AB-BA$. Thus $\mathrm{ad}_A$ measures the failure of $A$ to commute with other matrices.
3. **$\mathfrak{so}(3)$.** Under the identification $\mathfrak{so}(3)\cong\mathbb{R}^3$ with bracket given by the cross product, $\mathrm{ad}_x(y)=x\times y$.
