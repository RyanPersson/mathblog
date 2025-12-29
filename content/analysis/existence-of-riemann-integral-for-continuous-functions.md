---
title: "Continuous functions are Riemann integrable"
description: "Every continuous function on a closed interval has a Riemann integral"
---

**Continuous functions are Riemann integrable**: If $f:[a,b]\to\mathbb{R}$ is {{< knowl id="continuity-on-a-set" text="continuous" >}}, then $f$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $[a,b]$.

This theorem guarantees that the {{< knowl id="riemann-integral" text="Riemann integral" >}} covers all standard functions from calculus and is a basic entry point for more refined integrability criteria.

**Proof sketch**:
A continuous function on the {{< knowl id="compact-set" text="compact" >}} interval $[a,b]$ is {{< knowl id="uniform-continuity" text="uniformly continuous" >}}. Given $\varepsilon>0$, choose $\delta>0$ so that $|x-y|<\delta$ implies $|f(x)-f(y)|<\varepsilon/(b-a)$. Take a {{< knowl id="partition-of-an-interval" text="partition" >}} $P$ with {{< knowl id="mesh-of-a-partition" text="mesh" >}} $<\delta$. Then on each subinterval, the {{< knowl id="oscillation-of-a-function" text="oscillation" >}} of $f$ is $<\varepsilon/(b-a)$, so $U(f,P)-L(f,P)<\varepsilon$, proving integrability.
