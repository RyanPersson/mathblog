---
title: "Height of a prime"
description: "The length of the longest chain of prime ideals contained in a given prime."
---

## Definition (height of a prime ideal)
Let \(R\) be a {{< knowl id="commutative-ring" section="algebra-rings" text="commutative ring" >}} and let \(\mathfrak p\in {{< knowl id="prime-spectrum" text="Spec(R)" >}}\).

The **height** of \(\mathfrak p\), denoted \(\operatorname{ht}(\mathfrak p)\), is
\[
\operatorname{ht}(\mathfrak p)
\;:=\;
\sup\{\, n \mid \exists\ \mathfrak p_0 \subsetneq \mathfrak p_1 \subsetneq \cdots \subsetneq \mathfrak p_n=\mathfrak p \text{ in } \operatorname{Spec}(R)\,\}.
\]

### Equivalent characterization (via localization)
Let \(R_{\mathfrak p}\) be the {{< knowl id="localization-at-prime" text="localization of R at \(\mathfrak p\)" >}}. Then
\[
\operatorname{ht}(\mathfrak p) \;=\; \dim(R_{\mathfrak p}) \;=\; {{< knowl id="krull-dimension" text="Krull dimension" >}} \text{ of the local ring } R_{\mathfrak p}.
\]

## Examples
1. **In \(\mathbb Z\).**  
   The prime ideals are \((0)\) and \((p)\) for primes \(p\).
   - \(\operatorname{ht}((0))=0\).
   - \(\operatorname{ht}((p))=1\), since \((0)\subsetneq(p)\) is a maximal chain.

2. **In \(k[x,y]\).**  
   Let \(k\) be a field.
   - \(\operatorname{ht}((x))=1\) because \((0)\subsetneq(x)\) is a chain and \((x)\) is not maximal.
   - \(\operatorname{ht}((x,y))=2\) because \((0)\subsetneq(x)\subsetneq(x,y)\) is a chain of length \(2\), and \((x,y)\) is maximal.

3. **Height of a maximal ideal in a polynomial ring.**  
   In \(k[x_1,\dots,x_n]\), the “origin” maximal ideal \((x_1,\dots,x_n)\) has height \(n\) (matching \(\dim(k[x_1,\dots,x_n])=n\)).

## Related knowls
- Global dimension: {{< knowl id="krull-dimension" text="Krull dimension" >}}
- Localization: {{< knowl id="localization-at-prime" text="localization at a prime" >}}, {{< knowl id="local-ring" text="local ring" >}}
- Primes: {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}}
