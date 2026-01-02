---
title: "Free action"
description: "A group action in which only the identity element fixes any point."
---

Let $G$ act on a manifold $M$.

## Definition
The action is **free** if for every $x\in M$, the {{< knowl id="stabilizer" text="stabilizer" >}} is trivial:
\[
G_x = \{e\}\quad\text{for all }x\in M.
\]
Equivalently, the action is free if
\[
g\cdot x = x \ \Longrightarrow\ g=e
\quad\text{for all }g\in G,\ x\in M.
\]

For a {{< knowl id="smooth-action-of-a-lie-group-on-a-manifold" text="smooth action" >}} of a Lie group, freeness implies each orbit is diffeomorphic to $G$ (via any choice of basepoint in the orbit), though generally not canonically.

## Examples
1. **Left translation.** The action of a Lie group $G$ on itself by left multiplication is free.
2. **Deck transformations.** The action of $\mathbb{Z}$ on $\mathbb{R}$ by $n\cdot x := x+n$ is free.
3. **Non-example (fixed point).** The rotation action $SO(2)\curvearrowright \mathbb{R}^2$ is not free because every element fixes the origin.
