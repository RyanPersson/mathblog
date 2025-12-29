---
title: "Derivative zero implies constant"
description: "If f' vanishes on an interval, then f is constant on that interval"
---

Let $I\subseteq\mathbb{R}$ be an {{< knowl id="interval" text="interval" >}} and let $f:I\to\mathbb{R}$ be {{< knowl id="differentiability-one-variable" text="differentiable" >}} on $I^\circ$.

**Proposition**: If $f'(x)=0$ for all $x\in I^\circ$, then $f$ is constant on $I$; i.e., for all $x,y\in I$ one has $f(x)=f(y)$.

This is a fundamental rigidity result: having zero instantaneous rate of change everywhere forces no global change.

**Proof sketch**:
Take $x<y$ in $I$ with $[x,y]\subseteq I$. By the {{< knowl id="mean-value-theorem" text="mean value theorem" >}}, there exists $c\in(x,y)$ such that
$
f(y)-f(x)=f'(c)(y-x)=0.
$
Hence $f(y)=f(x)$. Since any two points in an interval can be connected by such a segment, $f$ is constant.
