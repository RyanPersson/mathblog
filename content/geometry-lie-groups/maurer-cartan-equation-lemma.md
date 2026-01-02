---
title: "Maurer–Cartan equation lemma"
description: "A computational identity: the exterior derivative of the Maurer–Cartan form is the negative bracket."
---

Let $G$ be a {{< knowl id="lie-group" text="Lie group" >}} with Lie algebra $\mathfrak g$, and let $\theta$ be the {{< knowl id="left-maurer-cartan-form" text="left Maurer–Cartan form" >}}.

## Lemma
For any smooth vector fields $X,Y$ on $G$,
$$
(d\theta)(X,Y) = -[\theta(X),\theta(Y)].
$$
Equivalently,
$$
d\theta + \frac12[\theta,\theta]=0,
$$
which is the {{< knowl id="maurer-cartan-equation" text="Maurer–Cartan equation" >}}.

## Proof idea (invariant-field reduction)
It suffices to verify the identity on {{< knowl id="left-invariant-vector-field" text="left-invariant vector fields" >}} because both sides are left-invariant 2-forms.

If $X=X^L$ and $Y=Y^L$ are left-invariant with $X,Y\in \mathfrak g$, then $\theta(X^L)=X$ and $\theta(Y^L)=Y$ are constant (as $\mathfrak g$-valued functions). Using the definition of exterior derivative,
$$
(d\theta)(X^L,Y^L) = X^L(\theta(Y^L)) - Y^L(\theta(X^L)) - \theta([X^L,Y^L]).
$$
The first two terms vanish since $\theta(Y^L)$ and $\theta(X^L)$ are constant, and the last term becomes $-\theta([X^L,Y^L])$. By {{< knowl id="left-invariant-fields-lie-algebra-lemma" text="the identification of brackets of left-invariant fields with the Lie bracket" >}}, $\theta([X^L,Y^L])=[X,Y]$. Hence $(d\theta)(X^L,Y^L)=-[X,Y]$, giving the desired formula.

## Context
This lemma is the workhorse behind computations with invariant forms and is the differential-geometric source of the Lie bracket, complementary to the flow-based viewpoint via {{< knowl id="one-parameter-subgroups-integral-curves" text="one-parameter subgroups as integral curves" >}}.
