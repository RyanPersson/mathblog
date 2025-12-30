---
title: "Zariski topology"
description: "The standard topology on Spec(R), with closed sets V(I) defined by ideals."
---

## Definition (Zariski topology on Spec(R))
Let \(R\) be a {{< knowl id="commutative-ring" section="algebra-rings" text="commutative ring" >}} and let \(X=\operatorname{Spec}(R)={{< knowl id="prime-spectrum" text="Spec(R)" >}}\).

For an {{< knowl id="ideal" section="algebra-rings" text="ideal" >}} \(I\subseteq R\), define
\[
V(I)\;:=\;\{\ \mathfrak p\in X \mid I\subseteq \mathfrak p\ \}.
\]
The **Zariski closed sets** are precisely the subsets \(V(I)\) as \(I\) ranges over ideals of \(R\). This defines a topology on \(X\), called the **Zariski topology**.

### Basic open sets
For \(f\in R\), define the **basic open set**
\[
D(f)\;:=\;X\setminus V((f)) \;=\; \{\ \mathfrak p\in X \mid f\notin \mathfrak p\ \}.
\]
The sets \(D(f)\) form a basis for the Zariski topology.

### Key identities
For ideals \(I,J\subseteq R\) and elements \(f,g\in R\):
- \(V(0)=X\), and \(V(R)=\varnothing\).
- \(V(I)\cap V(J)=V(I+J)\).
- \(V(I)\cup V(J)=V(IJ)\).
- \(D(f)\cap D(g)=D(fg)\).

## Examples
1. **Spec(\(\mathbb Z\)).**  
   In \(X=\operatorname{Spec}(\mathbb Z)\), the closed set \(V((n))\) consists of the primes \((p)\) with \(p\mid n\) (and \(V((0))=X\)).  
   The basic open set \(D(n)\) is the set of prime ideals not containing \(n\), i.e. primes \((p)\) with \(p\nmid n\), together with \((0)\).

2. **Spec(\(k[x]\)) and the principal open \(D(f)\).**  
   For a field \(k\), \(D(f)\subset \operatorname{Spec}(k[x])\) consists of primes \(\mathfrak p\) such that \(f\notin\mathfrak p\).  
   Over an algebraically closed field, this corresponds to removing the (finite) set of closed points where \(f\) vanishes.

3. **Induced topology on MaxSpec.**  
   The maximal spectrum \( \operatorname{MaxSpec}(R)={{< knowl id="maximal-spectrum" text="MaxSpec(R)" >}} \) inherits the subspace topology from \(X=\operatorname{Spec}(R)\). Its closed sets are \(V(I)\cap \operatorname{MaxSpec}(R)\).

## Related knowls
- Spectra: {{< knowl id="prime-spectrum" text="prime spectrum" >}}, {{< knowl id="maximal-spectrum" text="maximal spectrum" >}}
- Ideals: {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}, {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}
- Localization viewpoint: {{< knowl id="localization-ring" text="localization" >}}, {{< knowl id="localization-at-prime" text="localization at a prime" >}}
