---
title: "Local ring"
description: "A commutative ring with exactly one maximal ideal."
---

A commutative {{< knowl id="ring" section="algebra-rings" text="ring" >}} $R$ is called a **local ring** if it has a unique {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideal" >}}. When the unique maximal ideal is $\mathfrak m$, one often writes the pair as $(R,\mathfrak m)$.

## Equivalent characterizations

For a commutative ring $R$, the following are equivalent:

- $R$ has a unique maximal ideal $\mathfrak m$.
- The set of non-{{< knowl id="unit" section="algebra-rings" text="units" >}} in $R$ is an ideal (necessarily the unique maximal ideal).  
  (See {{< knowl id="maximal-ideal-local-ring" text="maximal ideal of a local ring" >}}.)

A local ring has an associated {{< knowl id="residue-field" text="residue field" >}} $R/\mathfrak m$.

## Examples

1. **Fields.**  
   Any {{< knowl id="field" section="algebra-rings" text="field" >}} is local: its unique maximal ideal is $(0)$.

2. **Localization at a prime ideal.**  
   For any prime $\mathfrak p\subset R$, the {{< knowl id="localization-at-prime" text="localization" >}} $R_{\mathfrak p}$ is a local ring, with maximal ideal $\mathfrak pR_{\mathfrak p}$.

3. **Formal power series.**  
   The ring {{< knowl id="formal-power-series-ring" section="algebra-rings" text="k[[x]]" >}} is local, with maximal ideal $(x)$ and residue field $k$.
