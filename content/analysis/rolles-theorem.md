---
title: "Rolle's Theorem"
description: "If a differentiable function agrees at the endpoints, it has a critical point inside"
---

**Rolle's Theorem**: Let $f:[a,b]\to\mathbb{R}$ be {{< knowl id="continuity-on-a-set" text="continuous" >}} on $[a,b]$ and {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $(a,b)$. If $f(a)=f(b)$, then there exists $c\in(a,b)$ such that
$f'(c)=0.$

Rolle's theorem is the key step in proving the {{< knowl id="mean-value-theorem" text="mean value theorem" >}} and links global behavior (endpoint values) to local behavior (vanishing {{< knowl id="derivative" text="derivative" >}}).

**Proof sketch** *(optional)*:
By the {{< knowl id="extreme-value-theorem" text="extreme value theorem" >}}, $f$ attains a {{< knowl id="maximum" text="maximum" >}} and a {{< knowl id="minimum" text="minimum" >}} on $[a,b]$. If $f$ is constant then $f'\equiv 0$. Otherwise, at least one extremum occurs at an interior point $c\in(a,b)$, and differentiability forces $f'(c)=0$ at an interior {{< knowl id="local-maximum-local-minimum" text="local extremum" >}}.
