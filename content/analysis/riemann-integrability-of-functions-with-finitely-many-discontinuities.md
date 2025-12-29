---
title: "Finitely many discontinuities implies Riemann integrable"
description: "A bounded function with only finitely many discontinuities is Riemann integrable"
---

**Finitely many discontinuities implies Riemann integrable**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="bounded-set" text="bounded" >}}. If $f$ has only finitely many discontinuities on $[a,b]$, then $f$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $[a,b]$.

This theorem illustrates that Riemann integration tolerates "isolated bad points." It is a stepping stone toward the full characterization via the size of the discontinuity set.

**Proof sketch**:
Let $D=\{x_1,\dots,x_m\}$ be the discontinuity set. Cover each $x_j$ by a small {{< knowl id="interval" text="interval" >}} $I_j$ so that the total length $\sum |I_j|$ is very small. On the complement $K=[a,b]\setminus\bigcup I_j$, the function $f$ is {{< knowl id="continuity-on-a-set" text="continuous" >}} and hence {{< knowl id="uniform-continuity" text="uniformly continuous" >}}, so choose a {{< knowl id="partition-of-an-interval" text="partition" >}} fine enough on $K$ to make {{< knowl id="oscillation-of-a-function" text="oscillations" >}} small. The contribution to $U-L$ from $\bigcup I_j$ is controlled by boundedness of $f$ and the small total length, so overall $U-L$ can be made $<\varepsilon$.
