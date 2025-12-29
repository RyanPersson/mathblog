---
title: "Limit Comparison Test"
description: "Two positive series behave the same if their term ratio has a positive finite limit"
---

**Limit Comparison Test**: Let $a_n>0$ and $b_n>0$. If
$\lim_{n\to\infty}\frac{a_n}{b_n}=L$
with $0<L<\infty$, then $\sum a_n$ {{< knowl id="convergent-series" text="converges" >}} if and only if $\sum b_n$ converges.

This test is useful when $a_n$ is asymptotic to a simpler $b_n$.

**Proof sketch** *(optional)*:
For large $n$, $\frac{a_n}{b_n}$ is between, say, $\frac{L}{2}$ and $2L$, yielding inequalities $c_1 b_n\le a_n\le c_2 b_n$ and then applying the {{< knowl id="comparison-test" text="comparison test" >}}.
