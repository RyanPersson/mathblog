---
title: "Krull dimension"
description: "The supremum of lengths of chains of prime ideals in a ring."
---

## Definition (Krull dimension)
Let \(R\) be a {{< knowl id="commutative-ring" section="algebra-rings" text="commutative ring" >}}.

A **chain of prime ideals** in \(R\) is a strictly increasing sequence
\[
\mathfrak p_0 \subsetneq \mathfrak p_1 \subsetneq \cdots \subsetneq \mathfrak p_n,
\quad \text{each } \mathfrak p_i \in {{< knowl id="prime-spectrum" text="Spec(R)" >}}.
\]
Its **length** is \(n\).

The **Krull dimension** of \(R\), denoted \(\dim(R)\), is
\[
\dim(R)\;:=\;\sup\{\, n \mid \text{there exists a chain of prime ideals of length } n \,\}.
\]
Equivalently, \(\dim(R)=\dim(\operatorname{Spec}(R))\) as a topological/poset invariant (primes ordered by inclusion).

### Local and pointwise viewpoint
For a prime \(\mathfrak p\), the **height** \( \operatorname{ht}(\mathfrak p)\) measures the length of chains ending at \(\mathfrak p\); see {{< knowl id="height-of-prime" text="height of a prime" >}}.

## Examples
1. **Fields have dimension 0.**  
   If \(k\) is a field, \(\operatorname{Spec}(k)=\{(0)\}\) has no nontrivial chains, so \(\dim(k)=0\).

2. **The integers have dimension 1.**  
   In \(\mathbb Z\), we have chains \((0)\subsetneq(p)\) for primes \(p\), but no longer chains, so \(\dim(\mathbb Z)=1\).

3. **Polynomial rings over a field.**  
   For a field \(k\), the standard result is
   \[
   \dim(k[x_1,\dots,x_n]) = n.
   \]
   For example, in \(k[x,y]\) there is a chain \((0)\subsetneq(x)\subsetneq(x,y)\), so \(\dim(k[x,y])\ge 2\).

## Related knowls
- Points and chains: {{< knowl id="prime-spectrum" text="prime spectrum" >}}, {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}
- Local invariant: {{< knowl id="height-of-prime" text="height of a prime" >}}
- Bounds and structure: {{< knowl id="krull-principal-ideal-theorem" text="Krull principal ideal theorem" >}}
