---
title: "Sequential compactness equals compactness (metric spaces)"
description: "In metric spaces, compactness is equivalent to every sequence having a convergent subsequence"
---

**Sequential compactness equals compactness**: Let $(X,d)$ be a {{< knowl id="metric-space" text="metric space" >}} and $K\subseteq X$. Then $K$ is {{< knowl id="compact-set" text="compact" >}} (every open cover has a finite subcover) if and only if $K$ is {{< knowl id="sequentially-compact-set" text="sequentially compact" >}} (every sequence in $K$ has a convergent {{< knowl id="subsequence" text="subsequence" >}} with limit in $K$).

This equivalence is special to metric (first countable) spaces and makes compactness usable via sequences, which is often the most practical viewpoint in analysis.

**Proof sketch** *(optional)*:
Compact $\Rightarrow$ sequentially compact: if no convergent subsequence exists, one can build an infinite collection of separated points and then an open cover with no finite subcover. Sequentially compact $\Rightarrow$ compact: if an open cover has no finite subcover, construct a sequence avoiding larger and larger finite subcollections and show it contradicts sequential compactness.
