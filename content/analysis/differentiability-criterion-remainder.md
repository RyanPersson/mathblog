---
title: "Differentiability criterion via remainder estimate"
description: "Differentiability at a point is equivalent to a linear approximation with an o(||h||) error"
---

Let $U\subseteq\mathbb{R}^n$ be {{< knowl id="open-set" text="open" >}}, let $f:U\to\mathbb{R}^m$, and fix $a\in U$.

**Proposition (remainder estimate form of differentiability)**: The following are equivalent:
- $f$ is {{< knowl id="differentiable-map" text="differentiable" >}} at $a$.
- There exists a linear map $A:\mathbb{R}^n\to\mathbb{R}^m$ such that
  $
  \lim_{h\to 0}\frac{\|f(a+h)-f(a)-Ah\|}{\|h\|}=0.
  $
- Equivalently: there exists a linear map $A$ such that for every $\varepsilon>0$ there exists $\delta>0$ with
  $
  0<\|h\|<\delta \implies \|f(a+h)-f(a)-Ah\|\le \varepsilon\,\|h\|.
  $

In this formulation, $Ah$ is the best linear approximation to $f$ near $a$ and the remainder is "small compared to $\|h\|$."

**Proof sketch**:
The second statement is the definition of differentiability. The third is exactly the $\varepsilon$–$\delta$ rewriting of the {{< knowl id="limit-of-a-function-at-a-point" text="limit" >}} in the second statement: a limit equals $0$ iff it can be made $<\varepsilon$ for all sufficiently small $h$.
