---
title: "Algebra of limits for sequences"
description: "Limits respect addition, multiplication, scalar multiplication, and (when valid) division"
---

**Algebra of limits for sequences**: Let $(a_n)$ and $(b_n)$ be sequences in $\mathbb{R}$ (or $\mathbb{C}$) with $a_n\to a$ and $b_n\to b$. Then:
- $a_n+b_n \to a+b$,
- $a_n b_n \to ab$,
- for any scalar $c$, $c a_n \to ca$,
- if $b\ne 0$ and $b_n\ne 0$ eventually, then $a_n/b_n \to a/b$,
- in $\mathbb{C}$, $\overline{a_n}\to \overline{a}$ and $|a_n|\to |a|$.

These rules make limits computationally usable and are proved directly from the $\varepsilon$–$N$ definition (often together with basic inequalities).

**Proof sketch** *(optional)*:
Use triangle inequalities such as $|a_n+b_n-(a+b)|\le |a_n-a|+|b_n-b|$ and similar estimates for products and quotients.
