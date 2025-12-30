---
title: "Right-Invariant Vector Field"
description: "A vector field X on a Lie group satisfying (dR_g)_h(X_h)=X_{hg}, hence determined uniquely by its value at the identity."
---

Let \(G\) be a {{< knowl id="lie-group" text="Lie group" >}}. Write \(R_g:G\to G\) for {{< knowl id="right-translation-r-g" text="right translation" >}} by \(g\).

**Definition (right invariance).**  
A {{< knowl id="vector-field" text="smooth vector field" >}} \(X\) on \(G\) is **right-invariant** if for all \(g,h\in G\),
\[
(dR_g)_h(X_h)=X_{hg},
\]
where \((dR_g)_h\) is the {{< knowl id="differential-pushforward-of-a-smooth-map" text="differential (pushforward)" >}} of \(R_g\) at \(h\). Equivalently, \((R_g)_*X=X\) for every \(g\in G\).

**Proposition (determined by the value at the identity).**  
Let \(e\) be the identity of \(G\). The assignment
\[
v\in T_eG \longmapsto X^R_v
\]
defined by
\[
(X^R_v)_g=(dR_g)_e(v)
\]
is a vector space isomorphism from \(T_eG\) onto the space of right-invariant vector fields on \(G\).

**Bracket and the “opposite” Lie algebra.**  
Right-invariant vector fields are closed under the {{< knowl id="lie-bracket" text="Lie bracket" >}} of vector fields. If one identifies \(\mathfrak g=T_eG\) using {{< knowl id="left-invariant-vector-field" text="left-invariant vector fields" >}} (the usual convention), then the correspondence \(v\mapsto X^R_v\) is a Lie algebra *anti*-homomorphism:
\[
[X^R_v,\,X^R_w]= -\,X^R_{[v,w]}.
\]
Equivalently, right-invariant vector fields realize the *opposite* Lie algebra structure on the same underlying vector space.

In an abelian Lie group, left and right translations coincide, so left- and right-invariant vector fields are the same.

### Examples

1. **\((\mathbb R^n,+)\): constant vector fields.**  
   Since \(R_a(x)=x+a\) and \((dR_a)_x=\mathrm{id}\), right-invariant vector fields are again precisely constant fields \(X(x)=v\).

2. **Matrix groups: \(X(g)=Ag\).**  
   For \(G\subseteq GL(n,\mathbb R)\) and \(A\in\mathfrak g\), the right-invariant vector field associated to \(A\) is
   \[
   X(g)=Ag,
   \]
   because \((dR_g)_e(A)=Ag\).

3. **Circle group \(S^1\).**  
   As \(S^1\) is abelian, right-invariant and left-invariant fields agree; a standard right-invariant vector field is \(X(z)=iz\).
