---
title: "Cauchy Condensation Test"
description: "For decreasing nonnegative terms, convergence is equivalent to a condensed dyadic series"
---

**Cauchy Condensation Test**: Let $(a_n)$ be a nonincreasing sequence of nonnegative real numbers. Then
$\sum_{n=1}^\infty a_n \text{ converges } \Longleftrightarrow \sum_{k=0}^\infty 2^k a_{2^k} \text{ converges}.$

This test is especially useful for {{< knowl id="series" text="series" >}} like $\sum 1/n^p$ and $\sum 1/(n(\log n)^p)$.

**Proof sketch** *(optional)*:
Group terms in dyadic blocks $[2^k,2^{k+1}-1]$ and use monotonicity to bound each block between $2^k a_{2^{k+1}}$ and $2^k a_{2^k}$.
