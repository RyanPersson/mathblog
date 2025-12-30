---
title: "Krull Principal Ideal Theorem"
description: "In a Noetherian ring, a prime minimal over a principal ideal has height at most 1."
---

## Statement

Let \(R\) be a {{< knowl id="noetherian-ring" text="Noetherian ring" >}} and let \(a \in R\).
If \( \mathfrak p \subset R\) is a {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} **minimal over** the principal ideal \((a)\) (i.e. \((a)\subseteq \mathfrak p\) and there is no prime strictly between \((a)\) and \(\mathfrak p\)), then
\[
\operatorname{ht}(\mathfrak p)\le 1,
\]
where \( \operatorname{ht}(\mathfrak p)\) is the {{< knowl id="height-of-prime" text="height of a prime" >}}.

Equivalently: in a Noetherian ring, every minimal prime over a {{< knowl id="principal-ideal" section="algebra-rings" text="principal ideal" >}} has codimension \(\le 1\).

## Cross-links

- Height and dimension: {{< knowl id="height-of-prime" text="height" >}}, {{< knowl id="krull-dimension" text="Krull dimension" >}}
- Geometry via primes: {{< knowl id="prime-spectrum" text="prime spectrum" >}}
- Ideals and generators: {{< knowl id="ideal" section="algebra-rings" text="ideal" >}}, {{< knowl id="ideal-generated" section="algebra-rings" text="generated ideal" >}}

## Examples

1. **Integers.**  
   In \(R=\mathbb Z\), take \(a=12\). The primes minimal over \((12)\) are \((2)\) and \((3)\).  
   Each has height \(1\) (the only nontrivial chain is \((0)\subset (p)\)), consistent with the theorem.

2. **A polynomial ring.**  
   Let \(R=k[x,y]\) (Noetherian) and \(a=x\). The ideal \((x)\) is itself prime, hence it is the unique prime minimal over \((x)\).  
   Its height is \(1\), so \(\operatorname{ht}(x)\le 1\) holds with equality.

3. **A reducible principal ideal.**  
   In \(R=k[x,y]\), take \(a=xy\). The ideal \((xy)\) has minimal primes \((x)\) and \((y)\).  
   Both have height \(1\), so again the bound \(\le 1\) holds even when \((a)\) is not prime.
