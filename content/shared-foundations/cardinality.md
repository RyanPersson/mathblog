---
title: "Cardinality"
description: "The size of a set, defined up to bijection and denoted |A|"
---

Two {{< knowl id="set" text="sets" >}} $A$ and $B$ are said to have the same **cardinality** if there exists a {{< knowl id="bijective-function" text="bijection" >}} $f\colon A\to B$. In that case one writes $|A|=|B|$.

For finite sets, $|A|=n$ means there is a bijection between $A$ and $\{1,2,\dots,n\}$. More generally, one compares cardinalities by the existence of {{< knowl id="injective-function" text="injections" >}} and bijections (e.g. $|A|\le |B|$ if there is an injection $A\to B$).

A set is {{< knowl id="countable-set" text="countable" >}} if its cardinality is at most that of $\mathbb{N}$.

**Examples:**
- $|\{a,b,c\}|=3$.
- $|\mathbb{Z}|=|\mathbb{N}|$ (there exists a bijection, though not an order-preserving one).
- If $A\subseteq B$ (see {{< knowl id="subset" text="subset" >}}) and both are finite, then $|A|\le |B|$.
