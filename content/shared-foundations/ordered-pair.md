---
title: "Ordered pair"
description: "A pair (a,b) whose order matters; (a,b)=(c,d) iff a=c and b=d"
---

An **ordered pair** is a primitive two-component object $(a,b)$ with the defining equality rule
$$
(a,b) = (c,d)\quad\Longleftrightarrow\quad a=c \text{ and } b=d.
$$

In {{< knowl id="zfc-axioms" text="ZFC" >}}, one concrete realization is the Kuratowski definition $(a,b)=\{\{a\},\{a,b\}\}$ (so ordered pairs can be built from sets). Ordered pairs are used to define the {{< knowl id="cartesian-product" text="Cartesian product" >}}, and hence {{< knowl id="relation" text="relations" >}} and {{< knowl id="function" text="functions" >}}.

**Examples:**
- $(1,2)\neq(2,1)$.
- A point in the plane is often modeled as an ordered pair $(x,y)\in\mathbb{R}^2$.
- The graph of a function consists of ordered pairs $(x,f(x))$.
