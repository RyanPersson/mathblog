---
title: "Left-Invariant Vector Field"
description: "A vector field X on a Lie group satisfying (dL_g)_h(X_h)=X_{gh}, hence determined uniquely by its value at the identity."
---

Let \(G\) be a {{< knowl id="lie-group" text="Lie group" >}}. Write \(L_g:G\to G\) for {{< knowl id="left-translation-l-g" text="left translation" >}} by \(g\).

**Definition (left invariance).**  
A {{< knowl id="vector-field" text="smooth vector field" >}} \(X\) on \(G\) is **left-invariant** if for all \(g,h\in G\),
\[
(dL_g)_h(X_h)=X_{gh},
\]
where \((dL_g)_h\) is the {{< knowl id="differential-pushforward-of-a-smooth-map" text="differential (pushforward)" >}} of \(L_g\) at \(h\). Equivalently, \((L_g)_*X=X\) for every \(g\in G\).

**Proposition (determined by the value at the identity).**  
Let \(e\) be the identity of \(G\). The assignment
\[
v\in T_eG \longmapsto X^L_v
\]
defined by
\[
(X^L_v)_g=(dL_g)_e(v)
\]
is a vector space isomorphism from \(T_eG\) onto the space of left-invariant vector fields on \(G\). Under the identification \(T_eG=\mathfrak g\) from {{< knowl id="lie-algebra-of-a-lie-group" text="the Lie algebra of a Lie group" >}}, every element of \(\mathfrak g\) corresponds to a unique left-invariant vector field.

**Bracket compatibility.**  
The set of left-invariant vector fields is closed under the {{< knowl id="lie-bracket" text="Lie bracket" >}} of vector fields. Transporting this bracket to \(T_eG\) via the isomorphism above recovers the standard Lie algebra bracket on \(\mathfrak g\).

Left-invariant vector fields also connect directly to the {{< knowl id="exponential-map-lie-group-exponential" text="exponential map" >}}: for \(v\in\mathfrak g\), the integral curve through \(e\) of \(X^L_v\) is the one-parameter subgroup \(t\mapsto \exp_G(tv)\).

### Examples

1. **\((\mathbb R^n,+)\): constant vector fields.**  
   For the additive Lie group, left translations are \(L_a(x)=a+x\) and \((dL_a)_x=\mathrm{id}\). Hence left-invariant vector fields are exactly constant-coefficient fields:
   \[
   X(x)=v \quad \text{for a fixed } v\in \mathbb R^n.
   \]

2. **Matrix groups: \(X(g)=gA\).**  
   Let \(G\subseteq GL(n,\mathbb R)\) be a matrix Lie group and let \(A\in\mathfrak g\subseteq M_n(\mathbb R)\). The associated left-invariant vector field is
   \[
   X(g)=gA,
   \]
   since \((dL_g)_e(A)=gA\) under the usual identification of tangent vectors with matrices.

3. **Circle group \(S^1\): rotation generator.**  
   Viewing \(S^1\subset\mathbb C\), a left-invariant vector field is
   \[
   X(z)=iz,
   \]
   which is tangent to the circle and corresponds to the unit tangent vector \(i\in T_1S^1\).
