---
title: "Lie algebra of a Lie group"
description: "The tangent space at the identity of a Lie group, equipped with the bracket induced by left-invariant vector fields."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} with identity element $e$. Its **Lie algebra** is the real vector space
\[
\mathfrak{g}=T_eG.
\]

To define the Lie bracket on $\mathfrak{g}$, use {{< knowl id="left-translation" text="left translations" >}}. For each $X\in T_eG$, there is a unique left-invariant {{< knowl id="vector-field" text="vector field" >}} $\widetilde X$ on $G$ satisfying $\widetilde X_e=X$, namely
\[
\widetilde X_g = (\mathrm{d}L_g)_e(X).
\]
The bracket on $\mathfrak{g}$ is then defined by
\[
[X,Y] := [\widetilde X,\widetilde Y]_e,
\]
where $[\widetilde X,\widetilde Y]$ is the {{< knowl id="lie-bracket" text="Lie bracket" >}} of vector fields on $G$. This operation is bilinear, alternating, and satisfies the Jacobi identity, making $\mathfrak{g}$ into a Lie algebra in the usual algebraic sense.

## Examples
1. **General linear group.** For $G=\mathrm{GL}(n,\mathbb{R})$, one has $\mathfrak{g}=\mathfrak{gl}(n,\mathbb{R})$ (all $n\times n$ real matrices) with bracket $[A,B]=AB-BA$.
2. **Special orthogonal group.** For $G=\mathrm{SO}(n)$, the Lie algebra is $\mathfrak{so}(n)=\{A\in\mathfrak{gl}(n,\mathbb{R})\mid A^\top=-A\}$ with the same commutator bracket.
3. **Abelian Lie groups.** For $G=\mathbb{R}^n$ under addition (or a torus $T^n$), the bracket on $\mathfrak{g}\cong\mathbb{R}^n$ is identically zero.
