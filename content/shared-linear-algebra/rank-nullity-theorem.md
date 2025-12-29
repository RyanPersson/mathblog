---
title: "Rank-Nullity Theorem"
description: "For a linear map, dimension(domain) = dimension(kernel) + dimension(image)"
---

**Rank-Nullity Theorem**: Let $T:V\to W$ be a {{< knowl id="linear-map" text="linear map" >}} between finite-dimensional {{< knowl id="vector-space" text="vector spaces" >}} over the same field. Define
- $\ker(T)=\{v\in V:T(v)=0\}$ (kernel / null space),
- $\operatorname{im}(T)=\{T(v):v\in V\}$ (image),
- $\operatorname{nullity}(T)=\dim(\ker(T))$,
- $\operatorname{rank}(T)=\dim(\operatorname{im}(T))$,
where $\dim(U)$ denotes the number of vectors in any basis of $U$.

Then
$$
\dim(V)=\operatorname{nullity}(T)+\operatorname{rank}(T).
$$

This theorem is the basic dimension-counting tool for linear maps. For example, $T$ is {{< knowl id="injective-function" text="injective" >}} if and only if $\ker(T)=\{0\}$, and it is {{< knowl id="surjective-function" text="surjective" >}} if and only if $\operatorname{rank}(T)=\dim(W)$ (in finite dimensions). Standard proofs ultimately rely on the existence of bases, guaranteed in general by {{< knowl id="basis-existence-theorem" text="basis existence" >}}.

**Proof sketch**:
Choose a basis $(k_1,\dots,k_m)$ of $\ker(T)$ and extend it to a basis $(k_1,\dots,k_m,v_{m+1},\dots,v_n)$ of $V$. Then $(T(v_{m+1}),\dots,T(v_n))$ is a basis of $\operatorname{im}(T)$: it spans by construction, and linear independence follows because any dependence lifts to an element of $\ker(T)$. Counting basis elements gives $n=m+(n-m)$, i.e. $\dim(V)=\dim(\ker(T))+\dim(\operatorname{im}(T))$.
