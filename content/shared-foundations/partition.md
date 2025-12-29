---
title: "Partition of a set"
description: "A family of nonempty disjoint subsets whose union is the whole set"
---

Let $X$ be a {{< knowl id="set" text="set" >}}. A **partition** of $X$ is a set $\mathcal{P}$ of {{< knowl id="subset" text="subsets" >}} of $X$ such that:
1. (Nonempty parts) For all $P \in \mathcal{P}$, $P \neq \emptyset$ (see {{< knowl id="empty-set" text="empty set" >}}).
2. (Disjointness) If $P,Q \in \mathcal{P}$ and $P\neq Q$, then $P \cap Q = \emptyset$ (using {{< knowl id="intersection" text="intersection" >}}).
3. (Cover) $\bigcup_{P\in\mathcal{P}} P = X$ (using {{< knowl id="union" text="union" >}}).

Partitions are equivalent data to {{< knowl id="equivalence-relation" text="equivalence relations" >}}: the parts are precisely the {{< knowl id="equivalence-class" text="equivalence classes" >}}.

**Examples:**
- The residue classes modulo $3$ partition $\mathbb{Z}$ into $3\mathbb{Z}$, $1+3\mathbb{Z}$, and $2+3\mathbb{Z}$.
- The set $\mathbb{R}$ is partitioned by the two sets $(-\infty,0)$ and $[0,\infty)$.
- The singleton sets $\{\{x\} : x\in X\}$ form the discrete partition of $X$.
