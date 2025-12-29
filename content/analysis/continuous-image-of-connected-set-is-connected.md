---
title: "Continuous image of connected set is connected"
description: "Continuous functions preserve connectedness"
---

**Continuous image of connected set is connected**: Let $(X,d_X)$ and $(Y,d_Y)$ be {{< knowl id="metric-space" text="metric spaces" >}}, let $E\subseteq X$ be {{< knowl id="connected-set" text="connected" >}}, and let $f:X\to Y$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}. Then $f(E)\subseteq Y$ is connected.

This theorem is a basic structural fact: continuous maps cannot "tear apart" connected sets. It implies, for example, that continuous real functions map {{< knowl id="interval" text="intervals" >}} to intervals.

**Proof sketch** *(optional)*:
If $f(E)$ were disconnected, write $f(E)=A\cup B$ with $A,B$ nonempty {{< knowl id="separated-sets" text="separated" >}} open-in-subspace sets. Then $E=f^{-1}(A)\cup f^{-1}(B)$ would be a separation of $E$ by continuity, contradicting connectedness of $E$.
