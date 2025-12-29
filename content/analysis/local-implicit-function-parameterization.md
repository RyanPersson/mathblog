---
title: "Local implicit function parameterization"
description: "Under the implicit function theorem hypotheses, the solution set is locally a graph"
---

Let $F:U\subseteq\mathbb{R}^{n+m}\to\mathbb{R}^m$ be {{< knowl id="class-ck-map" text="$C^1$" >}}, and suppose $(a,b)\in U$ satisfies $F(a,b)=0$ and
$
\det\left(\frac{\partial F}{\partial y}(a,b)\right)\neq 0.
$

**Corollary**: There exist {{< knowl id="neighborhood" text="neighborhoods" >}} $A$ of $a$ and $B$ of $b$ and a $C^1$ function $g:A\to B$ such that the solution set of $F(x,y)=0$ in $A\times B$ is exactly the graph of $g$:
$
\{(x,y)\in A\times B:\ F(x,y)=0\}=\{(x,g(x)):\ x\in A\}.
$

**Connection to parent theorem**:
This is precisely the conclusion of the {{< knowl id="implicit-function-theorem" text="implicit function theorem" >}}, viewed as a geometric parameterization statement.
