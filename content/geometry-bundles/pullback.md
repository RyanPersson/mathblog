---
title: "Pullback"
description: "The operation that transfers covectors and differential forms along a smooth map by precomposition with the differential."
---

Let $f:M\to N$ be a smooth map. For each $p\in M$, the {{< knowl id="differential-of-a-smooth-map" text="differential" >}} $\mathrm{d}f_p:T_pM\to T_{f(p)}N$ induces a dual linear map on cotangent spaces,
\[
f^*:T^*_{f(p)}N\longrightarrow T^*_pM,
\qquad
(f^*\alpha)_p(v)=\alpha_{f(p)}(\mathrm{d}f_p(v)).
\]
This is the **pullback of covectors**, and it assembles fiberwise into a bundle map between {{< knowl id="cotangent-bundle" text="cotangent bundles" >}}.

More generally, for a {{< knowl id="differential-k-form" text="differential $k$-form" >}} $\omega\in\Omega^k(N)$, the **pullback form** $f^*\omega\in\Omega^k(M)$ is defined by
\[
(f^*\omega)_p(v_1,\dots,v_k)
=
\omega_{f(p)}(\mathrm{d}f_p(v_1),\dots,\mathrm{d}f_p(v_k)).
\]
Pullback is functorial and unital: $(g\circ f)^*=f^*\circ g^*$ and $\mathrm{id}^*=\mathrm{id}$. It also commutes with the {{< knowl id="exterior-derivative" text="exterior derivative" >}}: for all forms $\omega$ on $N$, one has $f^*(\mathrm{d}\omega)=\mathrm{d}(f^*\omega)$.

## Examples
1. **Pulling back a 1-form by a map.** Let $f:\mathbb{R}^2\to\mathbb{R}^2$ be $f(u,v)=(u^2,v)$. Then $f^*(\mathrm{d}x)=2u\,\mathrm{d}u$ and $f^*(\mathrm{d}y)=\mathrm{d}v$.
2. **Restriction to a submanifold.** If $i:S^1\hookrightarrow\mathbb{R}^2$ is the inclusion and $\alpha=x\,\mathrm{d}y-y\,\mathrm{d}x$ on $\mathbb{R}^2$, then $i^*\alpha$ is the standard angular 1-form on $S^1$ (in angle coordinate $\theta$, it equals $\mathrm{d}\theta$).
3. **Pullback along a projection.** For $\pi:M\times N\to M$ and any form $\omega$ on $M$, the form $\pi^*\omega$ on $M\times N$ is the “constant along $N$” lift of $\omega$.
