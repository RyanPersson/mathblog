---
title: "Vector Space"
description: "A set with addition and scalar multiplication over a field satisfying the vector space axioms"
---

A **vector space** over a {{< knowl id="field" text="field" >}} $F$ is a set $V$ equipped with

- an **addition** operation $+:V\times V\to V$, and
- a **scalar multiplication** operation $\cdot:F\times V\to V$,

such that for all $u,v,w\in V$ and all $a,b\in F$:

1. $u+(v+w)=(u+v)+w$ (associativity of $+$),
2. $u+v=v+u$ (commutativity of $+$),
3. there exists an element $0\in V$ with $v+0=v$ (additive identity),
4. for every $v\in V$ there exists an element $-v\in V$ with $v+(-v)=0$ (additive inverse),
5. $a\cdot(u+v)=a\cdot u+a\cdot v$ (distributivity over vector addition),
6. $(a+b)\cdot v=a\cdot v+b\cdot v$ (distributivity over scalar addition),
7. $(ab)\cdot v=a\cdot(b\cdot v)$ (compatibility with scalar multiplication),
8. $1\cdot v=v$, where $1$ is the multiplicative identity in $F$.

Vector spaces are the basic objects of linear algebra; {{< knowl id="linear-map" text="linear maps" >}} are the structure-preserving functions between them. A prototypical family of examples is {{< knowl id="euclidean-space" text="Euclidean space" >}}, where vectors are tuples of numbers.

**Examples:**
- For any $k\in\mathbb{N}$, the set $\mathbb{R}^k$ of $k$-tuples of {{< knowl id="real-numbers" text="real numbers" >}} is a vector space over $\mathbb{R}$ with coordinatewise addition and scalar multiplication.
- The {{< knowl id="polynomial-ring" text="polynomial ring" >}} $F[t]$ (viewed only with its addition and scalar multiplication by $F$) is a vector space over $F$.
- If $X$ is any set, then the set of all functions $X\to F$ is a vector space over $F$ under pointwise operations.
