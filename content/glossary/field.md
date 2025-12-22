---
title: "Field"
description: "An algebraic structure with addition, subtraction, multiplication, and division"
---

A **field** is a set $F$ with two binary operations, addition ($+$) and multiplication ($\cdot$), satisfying:

**Addition axioms:**
- Associativity: $(a + b) + c = a + (b + c)$
- Commutativity: $a + b = b + a$
- Identity: There exists $0 \in F$ such that $a + 0 = a$
- Inverses: For each $a$, there exists $-a$ such that $a + (-a) = 0$

**Multiplication axioms:**
- Associativity: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
- Commutativity: $a \cdot b = b \cdot a$
- Identity: There exists $1 \in F$ (with $1 \neq 0$) such that $a \cdot 1 = a$
- Inverses: For each $a \neq 0$, there exists $a^{-1}$ such that $a \cdot a^{-1} = 1$

**Distributivity:**
- $a \cdot (b + c) = a \cdot b + a \cdot c$

**Examples:** $\mathbb{Q}$ (rationals), $\mathbb{R}$ (reals), $\mathbb{C}$ (complex numbers), $\mathbb{F}_p$ (integers mod prime $p$).
