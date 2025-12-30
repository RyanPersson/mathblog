---
title: "Restriction of scalars"
description: "View an S-module as an R-module via a ring homomorphism R → S."
---

## Definition (restriction of scalars)
Let \( \varphi: R \to S \) be a ring homomorphism (typically with \(R,S\) commutative and unital).  
If \(M\) is an \(S\)-{{< knowl id="module" section="algebra-modules" text="module" >}}, then **restriction of scalars along \(\varphi\)** equips \(M\) with an \(R\)-module structure by
\[
r \cdot m \;:=\; \varphi(r)\, m \qquad (r\in R,\; m\in M),
\]
where the multiplication on the right is the given \(S\)-module action.

This construction is often denoted \(\mathrm{Res}^{S}_{R}(M)\), and it defines a functor
\[
\mathrm{Res}^{S}_{R}:\; S\text{-Mod} \longrightarrow R\text{-Mod}.
\]

### Relationship to extension of scalars
Restriction of scalars is the “forgetful” direction opposite to {{< knowl id="extension-of-scalars" text="extension of scalars" >}} (which typically uses the tensor product).

## Examples
1. **Field extension (vector spaces).**  
   If \(k \subset K\) is a field extension and \(V\) is a \(K\)-vector space, then by restricting scalars along \(k \hookrightarrow K\), the same underlying abelian group becomes a \(k\)-vector space (often of larger dimension).

2. **Quotient map (annihilating an ideal).**  
   Let \(\pi: R \to R/I\) be the quotient map. Any \((R/I)\)-module \(M\) becomes an \(R\)-module by restriction of scalars. In this \(R\)-module, every element of \(I\) acts by \(0\).  
   (This links the notions of {{< knowl id="quotient-ring" section="algebra-rings" text="quotient ring" >}} and modules over it.)

3. **Localization map.**  
   For a {{< knowl id="multiplicative-set" text="multiplicative set" >}} \(S\subset R\), the localization map \(R\to S^{-1}R\) lets any \(S^{-1}R\)-module be viewed as an \(R\)-module. In the restricted \(R\)-module, multiplication by each \(s\in S\) becomes an invertible endomorphism (because \(s\) acts invertibly in \(S^{-1}R\)).

## Related knowls
- Ring maps: {{< knowl id="ring-homomorphism" section="algebra-rings" text="ring homomorphism" >}}
- Changing scalars: {{< knowl id="extension-of-scalars" text="extension of scalars" >}}, {{< knowl id="tensor-product" section="algebra-modules" text="tensor product" >}}
- Module basics: {{< knowl id="module" section="algebra-modules" text="module" >}}
