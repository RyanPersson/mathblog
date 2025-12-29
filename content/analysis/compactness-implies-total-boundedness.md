---
title: "Compactness implies total boundedness"
description: "A compact metric space can be covered by finitely many balls of any given radius"
---

**Compactness implies total boundedness**: If $(X,d)$ is a {{< knowl id="compact-set" text="compact" >}} {{< knowl id="metric-space" text="metric space" >}}, then for every $\varepsilon>0$ there exist points $x_1,\dots,x_N\in X$ such that
$X\subseteq \bigcup_{j=1}^N B(x_j,\varepsilon).$
Equivalently, $X$ is {{< knowl id="totally-bounded-set" text="totally bounded" >}}.

Total boundedness strengthens boundedness by requiring finitely many $\varepsilon$-balls to cover the set. Together with {{< knowl id="complete-metric-space" text="completeness" >}}, it characterizes compactness in metric spaces.

**Proof sketch** *(optional)*:
The family $\{B(x,\varepsilon):x\in X\}$ is an open cover of $X$. Compactness yields a finite subcover.
