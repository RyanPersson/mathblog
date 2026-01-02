---
title: "Theorem: Existence of principal connections on smooth manifolds"
description: "Every principal bundle over a smooth manifold admits a principal connection, using partitions of unity."
---

Let $M$ be a {{< knowl id="smooth-manifold" text="smooth manifold" >}} and let $\pi:P\to M$ be a {{< knowl id="principal-g-bundle" text="principal G-bundle" >}} with structure group $G$.

## Theorem

There exists at least one {{< knowl id="principal-connection" text="principal connection" >}} on $P$.

Equivalently: every principal bundle over a smooth manifold admits a $G$-equivariant horizontal distribution $H\subset TP$ complementary to the vertical subbundle.

## Proof idea (standard gluing argument)

Choose a cover $\{U_i\}$ over which $P$ is trivial and pick arbitrary local connection 1-forms on $U_i$ (for instance, the product connection in each trivialization). On overlaps $U_{ij}$, the difference of two local connection forms is tensorial and can be interpreted as an $\operatorname{ad}(P)$-valued $1$-form on $U_{ij}$. Using a smooth partition of unity subordinate to the cover, one forms a convex combination of local data to obtain a globally defined connection.

## Examples

1. **Trivial bundle.** On $P=M\times G$, the product distribution $T M\oplus 0$ defines a connection; in connection-form language, this is the “flat” connection.

2. **Frame bundle connections.** Applying this theorem to $P=\mathrm{Fr}(E)$ gives existence of connections on any vector bundle $E\to M$; compare {{< knowl id="construction-connection-on-fr-induced-by-a-vector-bundle-connection" text="connections on Fr(E) induced by covariant derivatives" >}}.

3. **Hopf fibration.** The principal $U(1)$-bundle $S^3\to S^2$ admits the standard connection whose horizontal spaces are orthogonal complements of the fiber circles (with respect to the round metric on $S^3$).
