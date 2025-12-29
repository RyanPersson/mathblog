---
title: "Implicitly defined function"
description: "A function described as a solution of an equation F(x,y)=0 rather than by an explicit formula"
---

A function $g:D\to \mathbb{R}^m$ is **implicitly defined** by an equation
$F(x,y)=0$
if there is a map $F:U\subseteq \mathbb{R}^{n+m}\to \mathbb{R}^m$ and a set $D\subseteq \mathbb{R}^n$ such that $(x,g(x))\in U$ for all $x\in D$ and
$F\bigl(x,g(x)\bigr)=0 \quad \text{for all } x\in D.$

Implicit definitions arise naturally when a curve/surface is given as a level set $\{(x,y):F(x,y)=0\}$; the {{< knowl id="implicit-function-theorem" text="implicit function theorem" >}} gives conditions under which such a set can be locally written as the graph of a function.

**Examples:**
- The circle equation $F(x,y)=x^2+y^2-1=0$ implicitly defines $y=\sqrt{1-x^2}$ on $D=[-1,1]$ (upper semicircle) and $y=-\sqrt{1-x^2}$ on the same $D$ (lower semicircle).
- The hyperbola equation $F(x,y)=xy-1=0$ implicitly defines $y=1/x$ on $D=\mathbb{R}\setminus\{0\}$.
- The equation $F(x,y)=y^3+y-x=0$ implicitly defines $y$ as a function of $x$ (in fact globally, though proving this uses additional arguments).
