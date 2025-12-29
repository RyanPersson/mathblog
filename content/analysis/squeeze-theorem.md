---
title: "Squeeze Theorem"
description: "If a sequence or function is trapped between two that share a limit, it has that limit"
---

**Squeeze Theorem (sequences)**: If $a_n\le b_n\le c_n$ for all sufficiently large $n$ and
$a_n\to L,\quad c_n\to L,$
then $b_n\to L$.

**Squeeze Theorem (functions)**: If $g(x)\le f(x)\le h(x)$ near $a$ (or for large $x$) and $\lim_{x\to a} g(x)=\lim_{x\to a} h(x)=L$, then $\lim_{x\to a} f(x)=L$.

The squeeze theorem is a standard tool for proving limits when direct estimates are hard but comparison is possible.

**Proof sketch** *(optional)*:
Given $\varepsilon>0$, eventually $a_n$ and $c_n$ lie in $(L-\varepsilon,L+\varepsilon)$; then so does $b_n$ because it is trapped between them.
