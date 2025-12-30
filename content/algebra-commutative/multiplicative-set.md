---
title: "Multiplicative set"
description: "A subset S of a commutative ring that contains 1 and is closed under multiplication, used to define localizations."
---

Let $R$ be a commutative {{< knowl id="ring" section="algebra-rings" text="ring" >}} (with $1$). A **multiplicative set** (or multiplicative subset) is a {{< knowl id="subset" section="shared-foundations" text="subset" >}} $S \subseteq R$ such that:

1. $1 \in S$,
2. If $s,t \in S$ then $st \in S$.

Often (especially in commutative algebra) one also assumes $0 \notin S$; if $0 \in S$ then the corresponding {{< knowl id="localization-ring" text="localization" >}} $S^{-1}R$ collapses to the zero ring.

A key source of multiplicative sets is complements of {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideals" >}}, which define {{< knowl id="localization-at-prime" text="localization at a prime" >}}.

## Examples

1. **Powers of one element.** For $f \in R$, the set
   \[
   S=\{1,f,f^2,f^3,\dots\}
   \]
   is multiplicative. Localizing at $S$ “inverts $f$”.

2. **Complement of a prime ideal.** If $\mathfrak p \subset R$ is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}, then
   \[
   S = R \setminus \mathfrak p
   \]
   is multiplicative. This is the standard choice for building $R_{\mathfrak p}$.

3. **Nonzero integers.** In $R=\mathbb Z$, the set $S=\mathbb Z\setminus\{0\}$ is multiplicative; localizing gives the field of fractions $\mathbb Q$.
