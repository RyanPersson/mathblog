---
title: "Bolzano–Weierstrass Theorem"
description: "Every bounded sequence in R^k has a convergent subsequence"
---

**Bolzano–Weierstrass Theorem**: If $(x_n)$ is a {{< knowl id="bounded-sequence" text="bounded sequence" >}} in $\mathbb{R}^k$, then there exists a {{< knowl id="subsequence" text="subsequence" >}} $(x_{n_j})$ and a point $x\in\mathbb{R}^k$ such that
$x_{n_j}\to x \quad \text{as } j\to\infty.$

This theorem is the core {{< knowl id="compact-set" text="compactness" >}} phenomenon in Euclidean spaces and underlies many existence proofs (maximizers/minimizers, {{< knowl id="convergent-sequence" text="convergence" >}} of approximations, etc.).

**Proof sketch** *(optional)*:
In $\mathbb{R}$, repeatedly bisect an interval containing the sequence to build {{< knowl id="nested-interval-theorem" text="nested intervals" >}} containing infinitely many terms and use nested intervals to extract a convergent subsequence. In $\mathbb{R}^k$, apply the one-dimensional result coordinatewise (diagonal subsequence argument).
