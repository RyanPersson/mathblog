---
title: "Ad-invariance of the Killing form"
description: "The Killing form satisfies B([x,y],z)=B(x,[y,z])."
---

Let $\mathfrak g$ be a finite-dimensional {{< knowl id="lie-algebra" text="Lie algebra" >}} over a field of characteristic $0$, and let $B$ be its {{< knowl id="killing-form" text="Killing form" >}}:
\[
B(x,y)=\mathrm{tr}(\mathrm{ad}_x\mathrm{ad}_y).
\]

**Lemma (ad-invariance).**  
For all $x,y,z\in\mathfrak g$,
\[
B([x,y],z)=B(x,[y,z]).
\]
Equivalently, $B(\mathrm{ad}_y x,z)+B(x,\mathrm{ad}_y z)=0$, i.e. each $\mathrm{ad}_y$ is skew-adjoint with respect to $B$.

**Proof sketch.**  
Using the identity $\mathrm{ad}_{[x,y]}=[\mathrm{ad}_x,\mathrm{ad}_y]$ in $\mathfrak{gl}(\mathfrak g)$ and cyclicity of trace,
\[
B([x,y],z)=\mathrm{tr}([\mathrm{ad}_x,\mathrm{ad}_y]\mathrm{ad}_z)
=\mathrm{tr}(\mathrm{ad}_x[\mathrm{ad}_y,\mathrm{ad}_z])=B(x,[y,z]).
\]

**Context.**  
Ad-invariance is the structural feature that makes the Killing form useful in studying ideals and decompositions; it is crucial in the proof that {{< knowl id="killing-form-nondegenerate-iff-semisimple" text="nondegeneracy of B is equivalent to semisimplicity" >}}.
