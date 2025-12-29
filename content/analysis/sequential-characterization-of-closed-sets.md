---
title: "Sequential characterization of closed sets"
description: "In metric spaces, a set is closed iff it contains limits of convergent sequences from itself"
---

**Sequential characterization of closed sets**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and $F\subseteq X$. Then $F$ is {{< knowl id="closed-set" text="closed" >}} if and only if whenever $(x_n)$ is a sequence in $F$ with $x_n\to x$ in $X$, one has $x\in F$.

This gives a practical criterion for closedness using sequences, avoiding direct work with complements or {{< knowl id="open-ball" text="open balls" >}}.

**Proof sketch** *(optional)*:
If $F$ is closed, then $X\setminus F$ is {{< knowl id="open-set" text="open" >}}, so a limit of points in $F$ cannot lie outside $F$. Conversely, if $F$ contains limits of sequences from $F$ and $x\in\overline{F}$, pick $x_n\in F$ with $x_n\to x$ ({{< knowl id="sequential-characterization-of-closure" text="closure characterization" >}}); then $x\in F$.
