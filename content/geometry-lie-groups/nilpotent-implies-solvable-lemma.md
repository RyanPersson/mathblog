---
title: "Nilpotent implies solvable"
description: "Every nilpotent Lie algebra is solvable (derived series terminates)."
---

Let $\mathfrak g$ be a finite-dimensional Lie algebra.

## Lemma
If $\mathfrak g$ is {{< knowl id="nilpotent-lie-algebra" text="nilpotent" >}} (defined via the {{< knowl id="lower-central-series-lie-algebra" text="lower central series" >}}), then $\mathfrak g$ is {{< knowl id="solvable-lie-algebra" text="solvable" >}} (defined via the {{< knowl id="derived-series-lie-algebra" text="derived series" >}}).

## Proof sketch (containment of series)
Write the derived series as $\mathfrak g^{(0)}=\mathfrak g$ and $\mathfrak g^{(k+1)}=[\mathfrak g^{(k)},\mathfrak g^{(k)}]$, and the lower central series as $\gamma_1(\mathfrak g)=\mathfrak g$ and $\gamma_{m+1}(\mathfrak g)=[\mathfrak g,\gamma_m(\mathfrak g)]$.

One shows by induction that
$$
\mathfrak g^{(k)} \subseteq \gamma_{2^k}(\mathfrak g)\quad\text{for all }k\ge 0.
$$
Indeed, assuming $\mathfrak g^{(k)}\subseteq \gamma_{2^k}$, then
$$
\mathfrak g^{(k+1)}=[\mathfrak g^{(k)},\mathfrak g^{(k)}]
\subseteq [\gamma_{2^k},\gamma_{2^k}]
\subseteq \gamma_{2^{k+1}},
$$
using the defining property that bracketing deeper terms pushes you further down the lower central series.

If $\mathfrak g$ is nilpotent, then $\gamma_N(\mathfrak g)=0$ for some $N$, hence $\mathfrak g^{(k)}=0$ for $2^k\ge N$, proving solvability.

## Context
This inclusion explains why nilpotent Lie algebras sit strictly inside solvable ones; the reverse implication fails in general, and distinguishing solvable from nilpotent is often done by comparing the {{< knowl id="derived-series-lie-algebra" text="derived" >}} and {{< knowl id="lower-central-series-lie-algebra" text="lower central" >}} filtrations.
