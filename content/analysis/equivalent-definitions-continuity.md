---
title: "Equivalent definitions of continuity (metric spaces)"
description: "Epsilon–delta, sequential continuity, and open-set preimages are equivalent in metric spaces"
---

Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}, and let $f:X\to Y$.

Fix a point $x_0\in X$. The following are equivalent:

- **Epsilon–delta continuity at $x_0$**: for every $\varepsilon>0$ there exists $\delta>0$ such that
  $
  d_X(x,x_0)<\delta \implies d_Y(f(x),f(x_0))<\varepsilon.
  $
- **Sequential continuity at $x_0$**: for every {{< knowl id="convergent-sequence" text="sequence" >}} $(x_n)$ in $X$,
  $
  x_n\to x_0 \implies f(x_n)\to f(x_0).
  $
- **Neighborhood formulation**: for every {{< knowl id="open-set" text="open" >}} set $V\subseteq Y$ with $f(x_0)\in V$, there exists $\delta>0$ such that
  $
  B_X(x_0,\delta)\subseteq f^{-1}(V).
  $

Moreover, $f$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} on all of $X$ if and only if **preimages of open sets are open**:
$
V\subseteq Y \text{ open} \implies f^{-1}(V)\subseteq X \text{ open}.
$

These equivalences let you choose the most convenient continuity definition for a given proof.

**Proof sketch**:
Epsilon–delta $\Rightarrow$ sequential is immediate by applying the epsilon–delta condition to the tail of a convergent sequence. Sequential $\Rightarrow$ epsilon–delta is proved by contraposition: if epsilon–delta fails, build a sequence $x_n\to x_0$ with $f(x_n)$ staying a fixed distance from $f(x_0)$. The open-set formulation is obtained by taking $V$ to be an open ball around $f(x_0)$, and conversely by applying epsilon–delta to those balls.
