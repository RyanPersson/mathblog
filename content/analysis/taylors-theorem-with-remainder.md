---
title: "Taylor's Theorem with remainder"
description: "Approximates a smooth function by a polynomial with a controlled error term"
---

**Taylor's Theorem (Lagrange remainder)**: Let $f$ be $(n+1)$ times continuously differentiable on an {{< knowl id="interval" text="interval" >}} containing $a$ and $x$. Then there exists $\xi$ between $a$ and $x$ such that
$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}.
$

Taylor's theorem is the precise statement behind local polynomial approximation and error estimation. It is fundamental in asymptotics, numerical approximation, and in proving properties like analyticity of power series.

**Proof sketch**:
Consider the auxiliary function
$
\phi(t)=f(t)-\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(t-a)^k - \lambda (t-a)^{n+1},
$
where $\lambda$ is chosen so that $\phi(x)=0$. One checks that $\phi(a)=\phi'(a)=\cdots=\phi^{(n)}(a)=0$ and $\phi(x)=0$. Applying {{< knowl id="rolles-theorem" text="Rolle's theorem" >}} repeatedly yields a point $\xi$ with $\phi^{(n+1)}(\xi)=0$, which forces $\lambda=f^{(n+1)}(\xi)/(n+1)!$ and gives the stated {{< knowl id="remainder-term-in-taylors-theorem" text="remainder" >}}.
