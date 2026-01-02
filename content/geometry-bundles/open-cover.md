---
title: "Open cover"
description: "A collection of open subsets whose union is the entire manifold, used to define local data that glue globally."
---

Let $M$ be a {{< knowl id="smooth-manifold" text="smooth manifold" >}}.

## Definition
An **open cover** of $M$ is a family of open sets $\{U_i\}_{i\in I}$ with $U_i\subset M$ such that
\[
M=\bigcup_{i\in I} U_i.
\]
An open cover is called **finite** if $I$ is finite, and **locally finite** if every point of $M$ has a neighborhood meeting only finitely many $U_i$.

Open covers are the basic index sets for specifying local geometric data (charts, local frames, connection forms, etc.) together with overlap compatibilities, for instance the transition functions of a {{< knowl id="principal-g-bundle" text="principal G-bundle" >}} or the local descriptions in an {{< knowl id="equivariant-local-trivialization" text="equivariant local trivialization" >}}.

## Examples
1. **Two-chart cover of the sphere.** $S^2$ is covered by $U_N=S^2\setminus\{\text{south pole}\}$ and $U_S=S^2\setminus\{\text{north pole}\}$.
2. **Cover by coordinate domains.** Any smooth atlas on $M$ provides an open cover by chart domains.
3. **Cover by a neighborhood basis refinement.** If $\{V_\alpha\}$ is any family of open sets whose union is $M$, then for each $x\in M$ one may pick a smaller open neighborhood $U_x\subset V_{\alpha(x)}$; the resulting $\{U_x\}_{x\in M}$ is again an open cover, often tailored to local constructions.
