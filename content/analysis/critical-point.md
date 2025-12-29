---
title: "Critical point"
description: "A point where the derivative is zero or fails to exist (one-variable context)."
---

Let $f:I\to\mathbb{R}$ be defined on an {{< knowl id="interval" text="interval" >}} $I\subseteq\mathbb{R}$, and let $a\in I$. The point $a$ is a **critical point** of $f$ if either:
- $f'(a)=0$, or
- $f'(a)$ does not exist.

Critical points are where {{< knowl id="local-maximum-local-minimum" text="local extrema" >}} can occur (Fermat's principle: interior local extrema force $f'(a)=0$ when {{< knowl id="differentiability-one-variable" text="differentiable" >}}). They are the main inputs for optimization via {{< knowl id="derivative" text="derivative" >}} tests.

**Examples:**
- For $f(x)=x^2$, $a=0$ is a critical point since $f'(0)=0$.
- For $f(x)=|x|$, $a=0$ is a critical point since $f'(0)$ does not exist.
- For $f(x)=e^x$, there are no critical points since $f'(x)=e^x\ne 0$ everywhere.
