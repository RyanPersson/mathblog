---
title: "Dedekind domain"
description: "A Noetherian, integrally closed domain of Krull dimension one."
---

Let \(R\) be a commutative ring.

## Definition
A **Dedekind domain** is an {{< knowl id="integral-domain" section="algebra-rings" text="integral domain" >}} \(R\) that is **not** a field and satisfies:
1. \(R\) is {{< knowl id="noetherian-ring" text="Noetherian" >}};
2. \(R\) is {{< knowl id="integrally-closed-domain" text="integrally closed" >}} (i.e. equals its {{< knowl id="integral-closure" text="integral closure" >}});
3. Every nonzero {{< knowl id="prime-ideal" section="algebra-rings" text="prime ideal" >}} is {{< knowl id="maximal-ideal" section="algebra-rings" text="maximal" >}} (equivalently, \(\dim R=1\) in the sense of {{< knowl id="krull-dimension" text="Krull dimension" >}}).

A fundamental consequence is that every nonzero ideal factors uniquely as a product of prime ideals.

## Key local property
If \(R\) is Dedekind and \(\mathfrak p\neq 0\) is prime, then the localization {{< knowl id="localization-at-prime" text="at \(\mathfrak p\)" >}} is a {{< knowl id="dvr" text="DVR" >}}:
\[
R_{\mathfrak p} \text{ is a discrete valuation ring.}
\]

## Examples
1. **\(\mathbb{Z}\).**  
   \(\mathbb{Z}\) is a Dedekind domain (it is a PID, hence Noetherian and integrally closed, and its nonzero primes are maximal).

2. **Ring of integers in a number field.**  
   If \(K/\mathbb{Q}\) is a number field and \(\mathcal O_K\) its ring of integers, then \(\mathcal O_K\) is a Dedekind domain.

3. **A PID (not a field).**  
   Any {{< knowl id="pid" section="algebra-rings" text="PID" >}} that is not a field (e.g. \(k[t]\)) is Dedekind.
