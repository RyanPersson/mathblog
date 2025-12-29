---
title: "Supremum approximation lemma"
description: "A supremum can be approached from below by points in the set"
---

**Supremum approximation lemma**: Let $E\subseteq\mathbb{R}$ be nonempty and {{< knowl id="bounded-above" text="bounded above" >}}, and let $s=\sup E$. Then:
- for every $\varepsilon>0$ there exists $x\in E$ such that
  $
  s-\varepsilon < x \le s,
  $
- equivalently, there exists a sequence $(x_n)$ in $E$ such that $x_n\to s$.

This lemma is used constantly to turn the abstract existence of $\sup E$ into a usable approximation statement (often in $\varepsilon$–arguments).

**Examples:**
- If $E=(0,1)$, then $\sup E=1$, and one may take $x_n=1-\frac{1}{n}$.
- If $E=\{x\in\mathbb{R}:x^2<2\}$, then $\sup E=\sqrt{2}$, and the lemma guarantees a sequence $x_n\uparrow \sqrt{2}$ with $x_n^2<2$.
