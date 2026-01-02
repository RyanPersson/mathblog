---
title: "Representation of a Lie group"
description: "A smooth group homomorphism from a Lie group to the general linear group of a vector space."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} and let $V$ be a finite-dimensional real (or complex) vector space. A **(finite-dimensional) representation of $G$** is a group homomorphism
\[
\rho:G\to \mathrm{GL}(V)
\]
that is also a {{< knowl id="smooth-map" text="smooth map" >}}.

Equivalently, $\rho$ determines a smooth left action of $G$ on $V$ by linear isomorphisms, via $(g,v)\mapsto \rho(g)v$. Differentiating $\rho$ at the identity yields a Lie algebra representation $\mathrm{d}\rho_e:\mathfrak{g}\to \mathfrak{gl}(V)$ (a special case of the {{< knowl id="differential-of-a-lie-group-homomorphism" text="differential of a Lie group homomorphism" >}}).

## Examples
1. **Defining representation of $\mathrm{GL}(n)$.** The map $\rho:\mathrm{GL}(n,\mathbb{R})\to \mathrm{GL}(\mathbb{R}^n)$ given by $\rho(A)(v)=Av$ is a smooth representation.
2. **Adjoint representation.** The map $\mathrm{Ad}:G\to \mathrm{GL}(\mathfrak{g})$ is a representation; it encodes how $G$ acts on its Lie algebra by conjugation.
3. **Circle characters.** For $G=S^1$, the maps $\rho_k:S^1\to \mathrm{GL}(\mathbb{C})$ defined by $\rho_k(z)(w)=z^k w$ give 1-dimensional complex representations indexed by integers $k$.
