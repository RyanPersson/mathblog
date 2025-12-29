---
title: "Lebesgue number lemma refinement lemma"
description: "On a compact set, an open cover can be refined by finitely many small balls subordinate to it"
---

**Refinement lemma (used for Lebesgue numbers)**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}}, let $K\subseteq X$ be {{< knowl id="compact-set" text="compact" >}}, and let $\mathcal{U}$ be an {{< knowl id="open-set" text="open" >}} cover of $K$. For each $x\in K$, choose $U_x\in\mathcal{U}$ with $x\in U_x$. Since $U_x$ is open, there exists $r_x>0$ such that
$
B(x,r_x)\subseteq U_x.
$
Then there exist points $x_1,\dots,x_N\in K$ such that
$
K\subseteq \bigcup_{i=1}^N B\!\left(x_i,\frac{r_{x_i}}{2}\right).
$
In particular, if $\delta=\min_{1\le i\le N} \frac{r_{x_i}}{2}$, then $\delta>0$ and for every $x\in K$ there exists $U\in\mathcal{U}$ with $B(x,\delta)\subseteq U$.

This is the standard compactness step that produces a uniform scale from pointwise local containment. See also {{< knowl id="lebesgue-number-lemma" text="Lebesgue number lemma" >}}.

**Proof sketch**:
The family $\{B(x,r_x/2):x\in K\}$ is an open cover of $K$, so compactness yields a {{< knowl id="finite-subcover-lemma" text="finite subcover" >}}. The minimum of finitely many positive radii is positive.
