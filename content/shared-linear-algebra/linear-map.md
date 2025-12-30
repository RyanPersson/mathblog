---
title: "Linear Map"
description: "A function between vector spaces that preserves addition and scalar multiplication"
---

Let $V$ and $W$ be {{< knowl id="vector-space" text="vector spaces" >}} over the same {{< knowl id="field" section="algebra-rings" text="field" >}} $F$. A **linear map** (or **linear transformation**) is a {{< knowl id="function" text="function" >}} $T:V\to W$ such that for all $u,v\in V$ and all $a\in F$,
$$
T(u+v)=T(u)+T(v),\qquad T(a\cdot v)=a\cdot T(v).
$$
Equivalently, $T$ preserves all *finite linear combinations*: for any $v_1,\dots,v_n\in V$ and $a_1,\dots,a_n\in F$,
$$
T\!\left(\sum_{i=1}^n a_i v_i\right)=\sum_{i=1}^n a_i\,T(v_i).
$$

Given such a $T$, its **kernel** (or **null space**) is $\ker(T)=\{v\in V:T(v)=0\}$ and its **image** is $\operatorname{im}(T)=\{T(v):v\in V\}$. A subset $U\subseteq V$ is a **(linear) subspace** if $u,u'\in U$ and $a\in F$ implies $u+u'\in U$ and $a\cdot u\in U$; with this definition, both $\ker(T)$ and $\operatorname{im}(T)$ are subspaces.

In finite-dimensional situations, {{< knowl id="rank-nullity-theorem" text="rank-nullity" >}} relates the "size" of $\ker(T)$ and $\operatorname{im}(T)$.

**Examples:**
- The coordinate projection $\pi:\mathbb{R}^3\to\mathbb{R}^2$, $\pi(x,y,z)=(x,y)$ (between instances of {{< knowl id="euclidean-space" text="Euclidean space" >}}), is linear.
- For a field $F$, the derivative map $D:F[t]\to F[t]$, $D(p)=p'$, is linear.
- Fix $t_0\in F$. The evaluation map $\operatorname{ev}_{t_0}:F[t]\to F$, $\operatorname{ev}_{t_0}(p)=p(t_0)$, is linear.
