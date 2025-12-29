---
title: "Total order (linear order)"
description: "A partial order in which any two elements are comparable"
---

A **total order** (or **linear order**) on a {{< knowl id="set" text="set" >}} $P$ is a {{< knowl id="partial-order" text="partial order" >}} $\le$ such that
$$
\forall x,y\in P,\; (x\le y)\ \text{or}\ (y\le x).
$$

Total orders allow "linear" comparison of elements and are the starting point for the notion of a {{< knowl id="well-ordered-set" text="well-ordered set" >}}.

**Examples:**
- The usual $\le$ on $\mathbb{Z}$ or $\mathbb{R}$ is a total order.
- Lexicographic order on $\mathbb{R}^2$ is a total order.
- The divisibility order on $\mathbb{N}$ is not total: neither $2$ divides $3$ nor $3$ divides $2$.
