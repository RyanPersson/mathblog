---
title: "Prime spectrum"
description: "The set of prime ideals of a commutative ring, denoted Spec(R)."
---

## Definition (prime spectrum)
Let \(R\) be a {{< knowl id="commutative-ring" section="algebra-rings" text="commutative ring" >}} (with \(1\)). The **prime spectrum** of \(R\) is the set
\[
\operatorname{Spec}(R) \;:=\; \{\ \mathfrak p \subset R \mid \mathfrak p \text{ is a prime ideal} \ \}.
\]
Here {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} means an ideal \(\mathfrak{p}\) such that \(ab \in \mathfrak{p}\) implies \(a \in \mathfrak{p}\) or \(b \in \mathfrak{p}\).
It is naturally a topological space via the {{< knowl id="zariski-topology" text="Zariski topology" >}}.

A point of \(\operatorname{Spec}(R)\) is literally a prime ideal \(\mathfrak p\), and one often thinks of \(\mathfrak p\) as a “generic point” for the irreducible closed subset it determines.

## Basic structure
- Closed sets in the Zariski topology have the form
  \[
  V(I) := \{\ \mathfrak p \in \operatorname{Spec}(R)\mid I\subseteq \mathfrak p\ \}
  \]
  for an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}} \(I\subset R\).
- Basic open sets are \(D(f)=\{\mathfrak p : f\notin \mathfrak p\}\).

Many constructions in commutative algebra are designed to be reflected on \(\operatorname{Spec}(R)\), e.g. {{< knowl id="localization-at-prime" text="localization at a prime" >}} and {{< knowl id="local-ring" text="local rings" >}}.

## Examples
1. **A field.**  
   If \(k\) is a field, then \(\operatorname{Spec}(k)=\{(0)\}\), a single point, because \((0)\) is prime and maximal in a field.

2. **The integers.**  
   \[
   \operatorname{Spec}(\mathbb Z)=\{(0)\}\ \cup\ \{(p)\mid p \text{ prime}\}.
   \]
   The point \((0)\) is the generic point; each \((p)\) is a closed point.

3. **A polynomial ring in one variable.**  
   If \(k\) is a field, then prime ideals of \(k[x]\) are \((0)\) and ideals \((f)\) where \(f\) is irreducible in \(k[x]\).  
   Over an algebraically closed field \(k\), the maximal ideals are exactly \((x-a)\), and these form {{< knowl id="maximal-spectrum" text="MaxSpec(k[x])" >}}.

## Related knowls
- Ideals: {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}, {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal ideal" >}}
- Topology on Spec: {{< knowl id="zariski-topology" text="Zariski topology" >}}
- Subsets of Spec: {{< knowl id="maximal-spectrum" text="maximal spectrum" >}}
- Dimension: {{< knowl id="krull-dimension" text="Krull dimension" >}}, {{< knowl id="height-of-prime" text="height of a prime" >}}
