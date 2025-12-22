---
title: "Linear Map"
description: "A structure-preserving function between vector spaces"
---

A **linear map** (or linear transformation) between {{< knowl id="vector-space" text="vector spaces" >}} $V$ and $W$ over the same {{< knowl id="field" text="field" >}} $F$ is a function $T: V \to W$ satisfying:

1. **Additivity**: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all $\mathbf{u}, \mathbf{v} \in V$
2. **Homogeneity**: $T(c\mathbf{v}) = cT(\mathbf{v})$ for all $c \in F$ and $\mathbf{v} \in V$

Equivalently, $T$ is linear if and only if:
$$T(a\mathbf{u} + b\mathbf{v}) = aT(\mathbf{u}) + bT(\mathbf{v})$$
for all $a, b \in F$ and $\mathbf{u}, \mathbf{v} \in V$.
