---
title: "Connected subsets of R are intervals"
description: "A connected subset of the real line contains every point between any two of its points"
---

**Connected subsets of $\mathbb{R}$ are intervals**: A set $E\subseteq \mathbb{R}$ is {{< knowl id="connected-set" text="connected" >}} (in the usual {{< knowl id="metric" text="metric" >}}) if and only if it is an {{< knowl id="interval" text="interval" >}} in the order sense: whenever $a,b\in E$ with $a<b$, then
$(a,b)\subseteq E,$
equivalently, every $x$ with $a\le x\le b$ lies in $E$.

This characterizes connectedness on the line and is the key to the {{< knowl id="intermediate-value-theorem" text="intermediate value theorem" >}} and many "no gaps" arguments.

**Proof sketch** *(optional)*:
If $E$ fails to contain some point between $a<b$ in $E$, then $E$ can be {{< knowl id="separated-sets" text="separated" >}} into $E\cap(-\infty,x)$ and $E\cap(x,\infty)$. Conversely, if $E$ is an interval, any attempted separation would force a "gap," contradicting the interval property.
