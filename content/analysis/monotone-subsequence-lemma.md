---
title: "Monotone subsequence lemma"
description: "Every real sequence has a monotone subsequence"
---

**Monotone subsequence lemma**: Every sequence $(x_n)$ in $\mathbb{R}$ has a {{< knowl id="monotone-sequence" text="monotone" >}} {{< knowl id="subsequence" text="subsequence" >}}; i.e., there exists a subsequence that is either nondecreasing or nonincreasing.

This lemma is a key combinatorial tool in real analysis and is often used to extract structured subsequences before applying {{< knowl id="completeness-axiom-of-r" text="completeness" >}} or {{< knowl id="compact-set" text="compactness" >}} arguments.

**Proof sketch**:
Call an index $n$ a "peak" if $x_n\ge x_m$ for all $m\ge n$. If there are infinitely many peaks, selecting them yields a nonincreasing subsequence. If there are only finitely many peaks, then beyond some index every term is followed by a larger term; one can inductively choose indices $n_1<n_2<\cdots$ with $x_{n_1}<x_{n_2}<\cdots$, giving a strictly increasing subsequence.
