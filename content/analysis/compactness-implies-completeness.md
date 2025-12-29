---
title: "Compactness implies completeness"
description: "A compact metric space is complete: every Cauchy sequence converges"
---

**Compactness implies completeness**: If $(X,d)$ is a {{< knowl id="compact-set" text="compact" >}} {{< knowl id="metric-space" text="metric space" >}}, then $X$ is {{< knowl id="complete-metric-space" text="complete" >}}.

This shows compactness is a strong finiteness condition: it forces not only boundedness but also the existence of limits for all {{< knowl id="cauchy-sequence" text="Cauchy sequences" >}}.

**Proof sketch** *(optional)*:
Let $(x_n)$ be Cauchy in $X$. By compactness ({{< knowl id="sequential-compactness-equals-compactness" text="sequential compactness" >}}), it has a convergent {{< knowl id="subsequence" text="subsequence" >}} $x_{n_k}\to x$. Cauchy-ness forces the full sequence to converge to the same $x$, hence $(x_n)\to x\in X$.
