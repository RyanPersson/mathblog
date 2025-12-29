---
title: "Composition preserves Riemann integrability"
description: "If f is Riemann integrable and g is continuous on its range, then g∘f is Riemann integrable"
---

Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}}, and let $g:\mathbb{R}\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}}.

**Proposition**: The composition $g\circ f$ is Riemann integrable on $[a,b]$.

More generally, it suffices that $g$ be continuous on a {{< knowl id="closed-set" text="closed" >}} {{< knowl id="interval" text="interval" >}} containing the {{< knowl id="compact-set" text="compact" >}} set $f([a,b])$ (since $f$ is {{< knowl id="bounded-set" text="bounded" >}}).

This proposition is used constantly to deduce integrability of $|f|$, $f^2$, $\sin(f)$, etc., from integrability of $f$.

**Proof sketch**:
If $f$ is {{< knowl id="continuity-at-a-point" text="continuous at" >}} $x$, then $g\circ f$ is continuous at $x$ because $g$ is continuous and composition preserves continuity. Hence the discontinuity set of $g\circ f$ is contained in the discontinuity set of $f$. By the {{< knowl id="lebesgue-criterion-riemann-integrability" text="Lebesgue criterion" >}}, the discontinuity set of $f$ has measure zero, so the same holds for $g\circ f$, which is therefore Riemann integrable.
