---
title: "Bilinear Form"
description: "A function linear in each argument separately"
---

A **bilinear form** on a {{< knowl id="vector-space" text="vector space" >}} $V$ over a {{< knowl id="field" section="algebra-rings" text="field" >}} $F$ is a function $B: V \times V \to F$ that is linear in each argument:

1. $B(a\mathbf{u} + b\mathbf{v}, \mathbf{w}) = aB(\mathbf{u}, \mathbf{w}) + bB(\mathbf{v}, \mathbf{w})$
2. $B(\mathbf{u}, a\mathbf{v} + b\mathbf{w}) = aB(\mathbf{u}, \mathbf{v}) + bB(\mathbf{u}, \mathbf{w})$

A bilinear form is **symmetric** if $B(\mathbf{u}, \mathbf{v}) = B(\mathbf{v}, \mathbf{u})$ for all $\mathbf{u}, \mathbf{v} \in V$.
