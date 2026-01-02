---
title: "Representation of a Lie algebra"
description: "A linear map from a Lie algebra to endomorphisms of a vector space that preserves brackets."
---

Let $\mathfrak{g}$ be a Lie algebra over $\mathbb{R}$ (or $\mathbb{C}$), and let $V$ be a vector space over the same field. A **representation of $\mathfrak{g}$ on $V$** is a linear map
\[
\rho:\mathfrak{g}\to \mathrm{End}(V)
\]
such that for all $X,Y\in\mathfrak{g}$,
\[
\rho([X,Y])=\rho(X)\rho(Y)-\rho(Y)\rho(X),
\]
i.e. $\rho$ is a Lie algebra homomorphism from $\mathfrak{g}$ to the Lie algebra $\mathfrak{gl}(V)$ with commutator bracket.

When $\mathfrak{g}$ is the Lie algebra of a {{< knowl id="lie-group" text="Lie group" >}} $G$ and $\pi:G\to \mathrm{GL}(V)$ is a smooth group representation, the induced map $\mathrm{d}\pi_e:\mathfrak{g}\to\mathfrak{gl}(V)$ (the {{< knowl id="differential-of-a-lie-group-homomorphism" text="differential at the identity" >}}) is a Lie algebra representation.

## Examples
1. **Standard matrix action.** For $\mathfrak{g}=\mathfrak{gl}(n,\mathbb{R})$ and $V=\mathbb{R}^n$, the map $\rho(A)(v)=Av$ is a representation.
2. **Adjoint representation.** The map $\mathrm{ad}:\mathfrak{g}\to \mathrm{End}(\mathfrak{g})$ given by $\mathrm{ad}_X(Y)=[X,Y]$ is a representation of $\mathfrak{g}$ on itself.
3. **Trivial representation.** The map $\rho:\mathfrak{g}\to \mathrm{End}(V)$ with $\rho(X)=0$ for all $X$ is always a representation (since both sides of the bracket-preservation identity vanish).
