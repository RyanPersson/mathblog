---
title: "Differentiation rules (one variable)"
description: "Linearity, product, quotient, and chain rules for derivatives"
---

Let $I\subseteq\mathbb{R}$ be an {{< knowl id="interval" text="interval" >}} and let $f,g:I\to\mathbb{R}$ be {{< knowl id="differentiability-one-variable" text="differentiable" >}} at a point $x\in I^\circ$ (interior of $I$). Let $c\in\mathbb{R}$.

**Proposition (standard derivative rules)**:
- Linearity:
  $
  (f+g)'(x)=f'(x)+g'(x),\qquad (cf)'(x)=c f'(x).
  $
- Product rule:
  $
  (fg)'(x)=f'(x)g(x)+f(x)g'(x).
  $
- Quotient rule: if $g(x)\neq 0$, then
  $
  \left(\frac{f}{g}\right)'(x)=\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}.
  $
- {{< knowl id="chain-rule-multivariable" text="Chain rule" >}}: if $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then
  $
  (f\circ g)'(x)=f'(g(x))\,g'(x).
  $

These formulas are the computational backbone of differential calculus; they are proved directly from the {{< knowl id="limit-of-a-function-at-a-point" text="limit" >}} definition of the {{< knowl id="derivative" text="derivative" >}}.

**Proof sketch**:
Use algebraic manipulation of difference quotients, e.g.
$
\frac{f(x+h)g(x+h)-f(x)g(x)}{h}
=
\frac{f(x+h)-f(x)}{h}g(x+h)+f(x)\frac{g(x+h)-g(x)}{h},
$
then pass to the limit using {{< knowl id="continuity-at-a-point" text="continuity" >}} of differentiable functions.
