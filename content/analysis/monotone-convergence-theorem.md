---
title: "Monotone Convergence Theorem (for sequences)"
description: "A bounded monotone sequence of real numbers converges"
---

**Monotone Convergence Theorem (sequences)**: If $(x_n)$ is a {{< knowl id="monotone-sequence" text="monotone increasing" >}} sequence in $\mathbb{R}$ that is {{< knowl id="bounded-above" text="bounded above" >}}, then $(x_n)$ {{< knowl id="convergent-sequence" text="converges" >}} and
$\lim_{n\to\infty} x_n = \sup\{x_n:n\in\mathbb{N}\}.$
Similarly, a monotone decreasing sequence that is {{< knowl id="bounded-below" text="bounded below" >}} converges to its {{< knowl id="infimum" text="infimum" >}}.

This theorem is one of the main working consequences of {{< knowl id="completeness-axiom-of-r" text="completeness" >}} and provides a robust method for proving convergence without explicitly identifying a limit.

**Proof sketch** *(optional)*:
Let $s=\sup\{x_n\}$. Given $\varepsilon>0$, $s-\varepsilon$ is not an upper bound, so some $N$ has $x_N>s-\varepsilon$. Monotonicity gives $s-\varepsilon<x_n\le s$ for all $n\ge N$, proving $x_n\to s$.
