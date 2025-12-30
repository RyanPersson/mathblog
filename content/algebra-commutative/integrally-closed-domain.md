---
title: "Integrally closed domain"
description: "An integral domain equal to its integral closure in its fraction field."
---

Let \(R\) be an {{< knowl id="integral-domain" section="algebra-rings" text="integral domain" >}} with {{< knowl id="fraction-field" section="algebra-rings" text="fraction field" >}} \(K=\mathrm{Frac}(R)\).

## Definition
\(R\) is **integrally closed** if every element of \(K\) that is {{< knowl id="integral-element" text="integral over" >}} \(R\) already lies in \(R\). Equivalently,
\[
\overline{R}^{\,K} = R,
\]
where \(\overline{R}^{\,K}\) is the {{< knowl id="integral-closure" text="integral closure" >}} of \(R\) in \(K\).

## Remarks
- Many “nice” domains are integrally closed; for instance, every {{< knowl id="ufd" section="algebra-rings" text="UFD" >}} is integrally closed (in particular, every {{< knowl id="pid" section="algebra-rings" text="PID" >}} is integrally closed).
- Integrally closed is one of the defining conditions of a {{< knowl id="dedekind-domain" text="Dedekind domain" >}}.

## Examples
1. **\(\mathbb{Z}\).**  
   \(\mathbb{Z}\) is integrally closed in \(\mathbb{Q}\).

2. **Polynomial rings.**  
   If \(k\) is a field, then \(k[x_1,\dots,x_n]\) is a UFD, hence integrally closed in its fraction field \(k(x_1,\dots,x_n)\).

3. **A non-example: \(k[t^2,t^3]\).**  
   Let \(R=k[t^2,t^3]\subset k(t)\). Then \(t\) is integral over \(R\) (since \(t^2\in R\) and \(t\) satisfies \(x^2-t^2=0\)) but \(t\notin R\).  
   Thus \(R\) is not integrally closed; its integral closure in \(k(t)\) is \(k[t]\).
