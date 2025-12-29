---
title: "Implicit Function Theorem"
description: "Solves F(x,y)=0 locally for y as a C^1 function of x when a Jacobian block is invertible"
---

**Implicit Function Theorem**: Let $U\subseteq\mathbb{R}^{n+m}$ be open and let $F:U\to\mathbb{R}^m$ be of {{< knowl id="class-ck-map" text="class" >}} $C^1$. Write points as $(x,y)$ with $x\in\mathbb{R}^n$ and $y\in\mathbb{R}^m$. Suppose $(a,b)\in U$ satisfies
$
F(a,b)=0
$
and the $m\times m$ {{< knowl id="jacobian-matrix" text="Jacobian matrix" >}} with respect to $y$ is invertible at $(a,b)$:
$
\det\left(\frac{\partial F}{\partial y}(a,b)\right)\neq 0.
$
Then there exist {{< knowl id="neighborhood" text="neighborhoods" >}} $A$ of $a$ and $B$ of $b$ and a unique $C^1$ function $g:A\to B$ such that
$
F(x,g(x))=0 \quad \text{for all } x\in A.
$
Moreover, $g(a)=b$ and its {{< knowl id="total-derivative-frechet-derivative" text="derivative" >}} satisfies
$
Dg(x)= -\left(\frac{\partial F}{\partial y}(x,g(x))\right)^{-1}\left(\frac{\partial F}{\partial x}(x,g(x))\right).
$

This theorem formalizes "implicit differentiation" and explains when a level set $F(x,y)=0$ is locally the graph of a smooth {{< knowl id="implicitly-defined-function" text="function" >}}.

**Proof sketch**:
Define $H(x,y)=(x,F(x,y))$ as a map $\mathbb{R}^{n+m}\to\mathbb{R}^{n+m}$. The derivative $DH(a,b)$ is block-triangular with invertible diagonal blocks (identity in $x$ and $\partial F/\partial y$ in $y$), hence invertible. Apply the {{< knowl id="inverse-function-theorem-rk" text="inverse function theorem" >}} to $H$ to solve for $(x,y)$ in terms of $(x,F)$ near $(a,0)$; setting $F=0$ yields $y=g(x)$.
