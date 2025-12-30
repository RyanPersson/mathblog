---
title: "Prime Avoidance Lemma"
description: "An ideal contained in a finite union of (mostly) prime ideals must lie in one of them."
---

## Statement

Let \(R\) be a commutative ring and let \(I, J_1,\dots,J_n\) be {{< knowl id="ideal" section="algebra-rings" text="ideals" >}} of \(R\). Assume that \(J_2,\dots,J_n\) are {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideals" >}}. If
\[
I \subseteq J_1 \,\cup\, J_2 \,\cup\, \cdots \,\cup\, J_n,
\]
then \(I \subseteq J_k\) for some \(k\in\{1,\dots,n\}\).

Equivalently (the “avoidance” form): if \(I\not\subseteq J_i\) for every \(i\), then there exists an element
\[
x\in I \quad\text{with}\quad x\notin \bigcup_{i=1}^n J_i.
\]

This lemma is frequently used to choose elements that avoid finitely many primes, e.g. when forming a {{< knowl id="localization-ring" text="localization" >}} or proving existence of “good” elements in a {{< knowl id="noetherian-ring" text="Noetherian ring" >}}.

## Examples

1. **Avoiding two coordinate primes.**  
   Let \(R=k[x,y]\), \(J_1=(x)\), \(J_2=(y)\). Both are prime.  
   Take \(I=(x,y)\). Then \(I\not\subseteq (x)\) and \(I\not\subseteq (y)\). Prime avoidance guarantees some \(f\in (x,y)\) is in neither \((x)\) nor \((y)\).  
   Concretely, \(f=x+y\in (x,y)\), and \(x+y\notin (x)\), \(x+y\notin (y)\).

2. **Why “finite union” matters (failure for infinite unions).**  
   Let \(R=k[x_1,x_2,x_3,\dots]\) (infinitely many variables) and \(I=(x_1,x_2,x_3,\dots)\).  
   For each \(n\ge 1\), set \(P_n=(x_1,\dots,x_n)\). Each \(P_n\) is prime, and
   \[
   I=\bigcup_{n\ge 1} P_n
   \]
   because any polynomial in \(I\) involves only finitely many variables.  
   But \(I\not\subseteq P_n\) for any fixed \(n\) (since \(x_{n+1}\in I\setminus P_n\)).  
   So prime avoidance can fail for **infinite** unions.

3. **Picking a non-nilpotent element.**  
   If \(R\) has finitely many minimal prime ideals \(P_1,\dots,P_r\) and an ideal \(I\) is not contained in any \(P_i\), then prime avoidance yields \(x\in I\setminus \bigcup_i P_i\).  
   In particular, \(x\) is not contained in every prime ideal, so \(x\) is not nilpotent (compare {{< knowl id="nilradical" section="algebra-rings" text="nilradical" >}}).
