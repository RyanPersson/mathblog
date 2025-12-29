---
title: "Rearrangement theorem for absolutely convergent series"
description: "Reordering an absolutely convergent series does not change its sum"
---

**Rearrangement theorem (absolute convergence)**: If $\sum_{n=1}^\infty a_n$ {{< knowl id="absolutely-convergent-series" text="converges absolutely" >}} in $\mathbb{R}$ or $\mathbb{C}$ and $\pi:\mathbb{N}\to\mathbb{N}$ is a bijection, then the {{< knowl id="rearrangement-of-a-series" text="rearranged series" >}}
$\sum_{n=1}^\infty a_{\pi(n)}$
converges, and
$\sum_{n=1}^\infty a_{\pi(n)}=\sum_{n=1}^\infty a_n.$

Absolute convergence guarantees stability of infinite sums under reindexing, a property that fails for {{< knowl id="conditionally-convergent-series" text="conditionally convergent series" >}}.

**Proof sketch** *(optional)*:
Given $\varepsilon>0$, choose $N$ so that the tail $\sum_{n>N}|a_n|<\varepsilon$. Any {{< knowl id="partial-sums" text="partial sum" >}} of the rearranged series that contains all indices $\le N$ differs from the full sum by at most $\varepsilon$ in absolute value, forcing convergence to the same limit.
