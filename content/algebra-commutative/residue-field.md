---
title: "Residue field"
description: "For a local ring (R,m), the residue field is the quotient R/m."
---

Let $(R,\mathfrak m)$ be a {{< knowl id="local-ring" text="local ring" >}} (so $\mathfrak m$ is its unique {{< knowl id="maximal-ideal-local-ring" text="maximal ideal" >}}).

## Definition

The **residue field** of $(R,\mathfrak m)$ is the quotient ring
\[
k = R/\mathfrak m.
\]
Because $\mathfrak m$ is maximal, $k$ is a {{< knowl id="field" section="algebra-rings" text="field" >}} (see also {{< knowl id="quotient-ring" section="algebra-rings" text="quotient ring" >}}).

For a {{< knowl id="localization-at-prime" text="localization at a prime ideal" >}} $R_{\mathfrak p}$, the residue field is often denoted
\[
\kappa(\mathfrak p)=R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}.
\]

## Useful observation

An element $u\in R$ is a {{< knowl id="unit" section="algebra-rings" text="unit" >}} iff its image $\bar u\in k$ is nonzero. Equivalently, $u$ is a unit iff $u\notin\mathfrak m$.

## Examples

1. **Integers localized at $p$.**  
   For $R=\mathbb Z_{(p)}$, the maximal ideal is $p\mathbb Z_{(p)}$, so
   \[
   R/\mathfrak m \cong \mathbb F_p.
   \]

2. **Formal power series.**  
   For $R=k[[x]]$ with $\mathfrak m=(x)$,
   \[
   k[[x]]/(x)\cong k.
   \]

3. **A local ring at a point.**  
   Let $R=k[x,y]_{(x-a,y-b)}$. Then the residue field is $k$ (the images of $x,y$ become $a,b$).
