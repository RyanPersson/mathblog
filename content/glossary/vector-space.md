---
title: "Vector Space"
description: "A fundamental algebraic structure in linear algebra"
---

A **vector space** over a {{< knowl id="field" text="field" >}} $F$ is a set $V$ together with two operations:

1. **Vector addition**: $+ : V \times V \to V$
2. **Scalar multiplication**: $\cdot : F \times V \to V$

satisfying the following axioms for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and $a, b \in F$:

**Addition axioms:**
- Commutativity: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
- Associativity: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
- Identity: There exists $\mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$
- Inverse: For each $\mathbf{v}$, there exists $-\mathbf{v}$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$

**Scalar multiplication axioms:**
- $a(b\mathbf{v}) = (ab)\mathbf{v}$
- $1\mathbf{v} = \mathbf{v}$
- $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$
- $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$
