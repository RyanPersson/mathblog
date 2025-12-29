---
title: "Well-ordering theorem"
description: "Every set can be equipped with a well-order; equivalent to the axiom of choice"
---

**Well-ordering theorem:** For every {{< knowl id="set" text="set" >}} $X$, there exists a {{< knowl id="total-order" text="total order" >}} $\le$ on $X$ such that $(X,\le)$ is a {{< knowl id="well-ordered-set" text="well-ordered set" >}}.

In the presence of the other axioms of set theory (ZF), the well-ordering theorem is equivalent to the {{< knowl id="axiom-of-choice" text="axiom of choice" >}} (and also to {{< knowl id="zorns-lemma" text="Zorn's lemma" >}}).

**Proof sketch (idea):**
Using choice (or an equivalent maximality principle), one constructs a well-order by successively selecting "next" elements from the remaining set; well-foundedness comes from the way the selection process is set up.
