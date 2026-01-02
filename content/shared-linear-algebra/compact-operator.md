---
title: "Compact Operator"
description: "A bounded linear operator that sends the unit ball to a relatively compact set"
---

Let $\mathcal{H}$ be a complex {{< knowl id="hilbert-space" text="Hilbert space" >}} and $\mathcal{B}(\mathcal{H})$ the algebra of bounded {{< knowl id="linear-map" text="linear operators" >}} $\mathcal{H} \to \mathcal{H}$.

## Definition

An operator $T \in \mathcal{B}(\mathcal{H})$ is **compact** if it sends the unit ball to a relatively compact set:

- The **closed unit ball** is $B := \{x \in \mathcal{H} : \|x\| \le 1\}$.
- A subset $S \subset \mathcal{H}$ is **relatively compact** if its closure $\overline{S}$ is compact.

So:
\[
T \text{ is compact } \iff \overline{T(B)} \text{ is compact in } \mathcal{H}.
\]

The set of compact operators is denoted $\mathcal{K}(\mathcal{H}) \subset \mathcal{B}(\mathcal{H})$.

## Equivalent characterizations

### Sequence characterization

$T$ is compact iff for every bounded sequence $(x_n) \subset \mathcal{H}$, the sequence $(Tx_n)$ has a convergent subsequence.

### Finite-rank approximation

$T$ is compact iff it is a norm limit of finite-rank operators:
\[
\mathcal{K}(\mathcal{H}) = \overline{\mathcal{F}(\mathcal{H})}^{\|\cdot\|},
\]
where $\mathcal{F}(\mathcal{H})$ denotes the **finite-rank operators** (operators with finite-dimensional range), and the closure is taken in the operator norm $\|T\| := \sup_{\|x\| \le 1} \|Tx\|$.

This is often the most useful characterization in practice.

## Examples

1. **Finite-rank operators.** Any operator with finite-dimensional range is compact.
2. **Integral operators with square-integrable kernel.** On $L^2([0,1])$, the operator $(Tf)(x) = \int_0^1 K(x,y) f(y)\, dy$ is compact whenever $K \in L^2([0,1]^2)$.
3. **Diagonal operators with vanishing eigenvalues.** On $\ell^2$, if $T e_n = \lambda_n e_n$ with $\lambda_n \to 0$, then $T$ is compact.
