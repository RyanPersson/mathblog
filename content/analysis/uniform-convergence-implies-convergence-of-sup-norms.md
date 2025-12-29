---
title: "Uniform convergence and sup norm"
description: "Uniform convergence is exactly convergence in the sup norm, and sup norms are Lipschitz under it"
---

Let $X$ be a set and let $f_n,f:X\to\mathbb{R}$ (or $\mathbb{C}$). Define the sup norm (when finite) by
$
\|h\|_\infty=\sup_{x\in X} |h(x)|.
$

**Uniform convergence and sup norm**: The sequence $f_n$ {{< knowl id="uniform-convergence-of-a-sequence-of-functions" text="converges uniformly" >}} to $f$ on $X$ if and only if
$
\|f_n-f\|_\infty \to 0.
$
Moreover, whenever the sup norms are finite,
$
\bigl|\|f_n\|_\infty-\|f\|_\infty\bigr|\le \|f_n-f\|_\infty.
$

This inequality shows the sup norm is {{< knowl id="continuity-on-a-set" text="continuous" >}} with respect to uniform convergence and is used constantly in approximation arguments on {{< knowl id="compact-set" text="compact sets" >}}.

**Proof sketch**:
The equivalence is immediate from the definitions. For the inequality, note that for every $x$,
$
|f_n(x)|\le |f(x)|+|f_n(x)-f(x)|,
$
take {{< knowl id="supremum" text="suprema" >}} to get $\|f_n\|_\infty\le \|f\|_\infty+\|f_n-f\|_\infty$, and reverse the roles of $f_n$ and $f$.
