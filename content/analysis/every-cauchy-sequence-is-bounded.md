---
title: "Cauchy implies bounded"
description: "Every Cauchy sequence in a metric space stays within a fixed ball"
---

**Cauchy implies bounded**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $(x_n)$ be a {{< knowl id="cauchy-sequence" text="Cauchy sequence" >}} in $X$. Then $(x_n)$ is {{< knowl id="bounded-sequence" text="bounded" >}}: there exist $x\in X$ and $R>0$ such that $d(x_n,x)\le R$ for all $n$.

This is a routine but important tool: Cauchy behavior already forces global control on the sequence.

**Proof sketch**:
Take $\varepsilon=1$ in the Cauchy definition to find $N$ such that $d(x_n,x_N)<1$ for all $n\ge N$. Then all tail terms lie in $B(x_N,1)$. The finitely many initial terms $\{x_1,\dots,x_{N-1}\}$ are bounded (take a maximum distance to $x_N$), so the whole sequence is bounded.
