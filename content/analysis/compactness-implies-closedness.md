---
title: "Compactness implies closedness"
description: "A compact subset of a metric space contains all its limit points"
---

**Compactness implies closedness**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}. Then $K$ is {{< knowl id="closed-set" text="closed" >}} in $X$.

This is a key structural property: in metric spaces, compact sets behave like "closed and bounded" objects, and this is one half of that picture.

**Proof sketch**:
Let $(x_n)$ be a sequence in $K$ {{< knowl id="convergent-sequence" text="converging" >}} in $X$ to some $x$. By {{< knowl id="sequential-compactness-equals-compactness" text="sequential compactness" >}} of $K$, there is a {{< knowl id="subsequence" text="subsequence" >}} $(x_{n_j})$ converging to some $y\in K$. But subsequences of a convergent sequence converge to the same limit, so $y=x$. Hence $x\in K$, proving $K$ is closed.
