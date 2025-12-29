---
title: "Lebesgue Number Lemma"
description: "Every open cover of a compact metric space has a uniform radius so small balls lie in a single cover element"
---

**Lebesgue Number Lemma**: Let $(X,d)$ be a {{< knowl id="compact-set" text="compact" >}} {{< knowl id="metric-space" text="metric space" >}} and let $\mathcal{U}$ be an open cover of $X$. Then there exists $\delta>0$ (a **Lebesgue number** for $\mathcal{U}$) such that for every $x\in X$,
$B(x,\delta)\subseteq U \quad \text{for some } U\in\mathcal{U}.$

This lemma is used to pass from pointwise local control to uniform control on compact sets (e.g., in proofs of {{< knowl id="uniform-continuity" text="uniform continuity" >}} and partitions of unity in more advanced settings).

**Proof sketch** *(optional)*:
If no such $\delta$ exists, choose points $x_n$ with {{< knowl id="open-ball" text="balls" >}} $B(x_n,1/n)$ not contained in any single cover set. By compactness, extract a convergent {{< knowl id="subsequence" text="subsequence" >}} $x_{n_k}\to x$. Since $x$ lies in some $U\in\mathcal{U}$ and $U$ is {{< knowl id="open-set" text="open" >}}, a small ball around $x$ lies in $U$, forcing large $k$ to have $B(x_{n_k},1/n_k)\subseteq U$, a contradiction.
