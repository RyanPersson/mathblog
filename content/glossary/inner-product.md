---
title: "Inner Product"
description: "A generalization of the dot product to abstract vector spaces"
---

An **inner product** on a real {{< knowl id="vector-space" text="vector space" >}} $V$ is a {{< knowl id="bilinear-form" text="bilinear form" >}} $\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}$ satisfying:

1. **Symmetry**: $\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$
2. **Positive definiteness**: $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$, with equality iff $\mathbf{v} = \mathbf{0}$

For complex vector spaces, we require **conjugate symmetry**: $\langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}$, and linearity in the first argument (making it sesquilinear).

Every inner product induces a {{< knowl id="norm" text="norm" >}} via $\|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$.
