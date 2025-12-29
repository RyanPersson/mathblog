---
title: "Riemann integrability implies boundedness"
description: "A Riemann integrable function on a closed interval must be bounded"
---

**Proposition**: If $f:[a,b]\to\mathbb{R}$ is {{< knowl id="riemann-integrable-function" text="Riemann integrable" >}} on $[a,b]$, then $f$ is {{< knowl id="bounded-set" text="bounded" >}} on $[a,b]$.

In many texts, boundedness is built into the definition of Riemann integrability. This proposition records that boundedness is not optional: unbounded functions cannot have finite {{< knowl id="upper-sum-riemann" text="upper" >}} and {{< knowl id="lower-sum-riemann" text="lower sums" >}}.

**Proof sketch**:
If $f$ were unbounded above, then for every {{< knowl id="partition-of-interval" text="partition" >}} $P$ there would be some subinterval on which $\sup f=+\infty$, forcing $U(f,P)=+\infty$. Similarly if unbounded below, some lower sum would be $-\infty$. Thus the equality of upper and lower integrals (and finiteness of the integral) cannot hold unless $f$ is bounded.
