---
title: "Baire Category Theorem"
description: "A complete metric space cannot be written as a countable union of nowhere dense sets"
---

**Baire Category Theorem**: If $(X,d)$ is a {{< knowl id="complete-metric-space" text="complete metric space" >}} and $U_1,U_2,\dots$ are open {{< knowl id="dense-subset" text="dense" >}} subsets of $X$, then
$\bigcap_{n=1}^\infty U_n$
is dense in $X$. Equivalently, $X$ is not a countable union of {{< knowl id="nowhere-dense-set" text="nowhere dense sets" >}}.

Baire's theorem is a powerful structural result with many analytic consequences (existence of "typical" points, uniform boundedness phenomena, and more).

**Proof sketch** *(optional)*:
To show density, fix a nonempty {{< knowl id="open-ball" text="open ball" >}} $B_1$. Since $U_1$ is dense, pick a smaller ball $B_2\subseteq B_1\cap U_1$. Continue inductively to get nested balls $B_{n+1}\subseteq B_n\cap U_n$ with radii $\to 0$. Completeness ensures the intersection contains a point lying in every $U_n$ and hence in the desired intersection.
