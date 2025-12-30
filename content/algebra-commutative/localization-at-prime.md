---
title: "Localization at a prime ideal"
description: "For a prime ideal p ⊆ R, the localization R_p = (R \\ p)^{-1}R is the local ring that captures behavior near p."
---

Let $R$ be a commutative {{< knowl id="ring" section="algebra-rings" text="ring" >}} and let $\mathfrak p \subset R$ be a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}.

## Definition

The **localization of $R$ at $\mathfrak p$** is the {{< knowl id="localization-ring" text="localization" >}}
\[
R_{\mathfrak p} := (R\setminus \mathfrak p)^{-1}R.
\]
Equivalently, $R_{\mathfrak p}$ is obtained from $R$ by inverting every element not in $\mathfrak p$.

## Basic facts

- $R_{\mathfrak p}$ is a {{< knowl id="local-ring" text="local ring" >}}.
- Its unique maximal ideal is
  \[
  \mathfrak pR_{\mathfrak p}=\left\{\frac{r}{s}\in R_{\mathfrak p} : r\in\mathfrak p,\ s\notin\mathfrak p\right\}.
  \]
  (See {{< knowl id="maximal-ideal-local-ring" text="maximal ideal of a local ring" >}}.)
- The associated {{< knowl id="residue-field" text="residue field" >}} is
  \[
  \kappa(\mathfrak p)=R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}.
  \]

## Examples

1. **Localize the integers at a prime.**  
   For $R=\mathbb Z$ and $\mathfrak p=(p)$,
   \[
   \mathbb Z_{(p)} = \left\{\frac{a}{b}\in\mathbb Q : p\nmid b\right\}.
   \]
   Its maximal ideal is $p\mathbb Z_{(p)}$, and its residue field is $\mathbb F_p$.

2. **Localize a polynomial ring at a prime ideal.**  
   In $R=k[x,y]$, take $\mathfrak p=(x)$. Then
   \[
   k[x,y]_{(x)}
   \]
   consists of fractions $f/g$ with $g\notin(x)$, i.e. $g(0,y)\neq 0$.

3. **Localize at a maximal ideal (a point).**  
   In $R=k[x,y]$, take the maximal ideal $\mathfrak m=(x-a,y-b)$. Then $R_{\mathfrak m}$ is local with residue field $k$, and intuitively describes functions “near the point $(a,b)$”.
