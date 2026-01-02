---
title: "Principal homogeneous space (G-torsor)"
description: "A set or manifold equipped with a free and transitive action of a Lie group, with no preferred origin."
---

Let {{< knowl id="lie-group" text="Lie group" >}} $G$ act on a nonempty set $X$ on the left.

## Definition
A **principal homogeneous space** for $G$ (also called a **$G$-torsor**) is a set $X$ together with a left action $G \times X \to X$, $(g,x)\mapsto g\cdot x$, such that:

1. (**Free**) If $g\cdot x = x$ for some $x\in X$, then $g=e$.
2. (**Transitive**) For any $x,y\in X$ there exists $g\in G$ with $g\cdot x = y$.

Equivalently, fixing any $x_0\in X$, the **orbit map**
\[
\theta_{x_0}:G\to X,\qquad \theta_{x_0}(g)=g\cdot x_0
\]
is a bijection; different choices of $x_0$ differ by right multiplication in $G$, so there is no canonical identification of $X$ with $G$ unless a basepoint is chosen.

If $X$ is a {{< knowl id="smooth-manifold" text="smooth manifold" >}} and the action is {{< knowl id="smooth-action-of-a-lie-group-on-a-manifold" text="smooth" >}}, then $\theta_{x_0}$ is a {{< knowl id="diffeomorphism" text="diffeomorphism" >}} $G\cong X$ for each choice of $x_0$.

A basic source of torsors in geometry: if $P\to M$ is a {{< knowl id="principal-g-bundle" text="principal G-bundle" >}}, then each fiber $P_x$ is a (right) $G$-torsor under the bundle’s right action.

## Examples
1. **The group acting on itself.** $G$ is a $G$-torsor under left translation: $g\cdot h = gh$.
2. **Affine spaces.** Any affine space $A$ modeled on a vector space $V$ is a torsor for the additive Lie group $(V,+)$ via translations $v\cdot a := a+v$.
3. **Fibers of a principal bundle.** For a principal bundle $\pi:P\to M$, each fiber $\pi^{-1}(x)$ is a torsor for $G$: for any $p,q\in \pi^{-1}(x)$ there is a unique $g\in G$ with $p\cdot g=q$.
