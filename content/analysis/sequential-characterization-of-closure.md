---
title: "Sequential characterization of closure"
description: "In metric spaces, x is in the closure of E iff some sequence in E converges to x"
---

**Sequential characterization of closure**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and $E\subseteq X$. A point $x\in X$ belongs to the {{< knowl id="closure" text="closure" >}} $\overline{E}$ if and only if there exists a sequence $(x_n)$ in $E$ such that
$x_n\to x.$

This result ties topological notions (closure) to analytic ones (sequences) and is one reason sequences are so effective in metric spaces.

**Proof sketch** *(optional)*:
If $x\in\overline{E}$, then every {{< knowl id="open-ball" text="ball" >}} $B(x,1/n)$ meets $E$; choose $x_n\in E\cap B(x,1/n)$ to get $x_n\to x$. Conversely, if $x_n\to x$ with $x_n\in E$, then every {{< knowl id="neighborhood" text="neighborhood" >}} of $x$ contains some $x_n$, so it meets $E$ and $x\in\overline{E}$.
