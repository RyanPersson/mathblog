---
title: "Compactness implies boundedness"
description: "A compact set in a metric space is contained in some finite-radius ball"
---

**Compactness implies boundedness**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}. Then $K$ is {{< knowl id="bounded-set" text="bounded" >}}: there exist $x_0\in X$ and $R>0$ such that
$
K\subseteq B(x_0,R).
$

This is one of the basic "finiteness" consequences of compactness and is used to control sequences and covers.

**Proof sketch**:
Fix $x_0\in X$. The function $x\mapsto d(x,x_0)$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} on $K$. Since $K$ is compact, it attains its {{< knowl id="maximum" text="maximum" >}} $R$ on $K$. Then $d(x,x_0)\le R$ for all $x\in K$, so $K\subseteq B(x_0,R)$.
