---
title: "Monotone functions are Riemann integrable"
description: "Every bounded monotone function on a closed interval is Riemann integrable"
---

**Monotone functions are Riemann integrable**: If $f:[a,b]\to\mathbb{R}$ is {{< knowl id="bounded-set" text="bounded" >}} and {{< knowl id="monotone-sequence" text="monotone" >}} (nondecreasing or nonincreasing), then $f$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $[a,b]$.

This is a key example showing that Riemann integrability does not require continuity; controlled discontinuities are allowed.

**Proof sketch**:
Assume $f$ is nondecreasing. For a {{< knowl id="partition-of-an-interval" text="partition" >}} $P$ with {{< knowl id="mesh-of-a-partition" text="mesh" >}} $\|P\|$, one can estimate
$
U(f,P)-L(f,P)\le (f(b)-f(a))\,\|P\|.
$
Choosing $\|P\|<\varepsilon/(f(b)-f(a))$ (or handling the constant case separately) forces $U-L<\varepsilon$, proving integrability.
