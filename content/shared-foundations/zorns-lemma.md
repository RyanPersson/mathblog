---
title: "Zorn's lemma"
description: "If every chain in a poset has an upper bound, then a maximal element exists"
---

**Zorn's lemma:** Let $(P,\le)$ be a {{< knowl id="partial-order" text="partially ordered set" >}}. Suppose that for every chain $C\subseteq P$ (i.e. a {{< knowl id="subset" text="subset" >}} that is {{< knowl id="total-order" text="totally ordered" >}} by $\le$), there exists an {{< knowl id="upper-bound" text="upper bound" >}} $u\in P$ of $C$. Then $P$ has a **maximal element**: an element $m\in P$ such that there is no $p\in P$ with $m<p$.

Over the usual background axioms of set theory, Zorn's lemma is equivalent to the {{< knowl id="axiom-of-choice" text="axiom of choice" >}} and to the {{< knowl id="well-ordering-theorem" text="well-ordering theorem" >}}.

**Proof sketch (idea):**
Using choice, one builds an ascending chain by repeatedly extending it when possible; maximality is forced when the process cannot continue, and the chain hypothesis ensures the process has an upper bound that becomes maximal.
