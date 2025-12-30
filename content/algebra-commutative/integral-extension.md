---
title: "Integral extension"
description: "A ring extension S/R in which every element of S is integral over R."
---

## Definition (integral extension)
Let \(R \subseteq S\) be a ring extension (commutative, with \(1\)). The extension is **integral** if every element \(s\in S\) is {{< knowl id="integral-element" text="integral over R" >}}, i.e. each \(s\) satisfies some monic polynomial in \(R[t]\).

## Useful equivalent criteria
- If \(S\) is finitely generated as an \(R\)-{{< knowl id="module" section="algebra-modules" text="module" >}}, then \(S\) is integral over \(R\). (A “finite” extension is automatically integral.)
- If \(S = R[s_1,\dots,s_n]\) and each \(s_i\) is integral over \(R\), then \(S\) is a finite \(R\)-module (so in particular the extension is integral).

Integral extensions have strong prime-ideal behavior; key theorems include {{< knowl id="lying-over-theorem" text="lying over" >}} and {{< knowl id="going-up-theorem" text="going up" >}}.

## Examples
1. **\(\mathbb Z \subset \mathbb Z[i]\).**  
   Every element \(a+bi\in \mathbb Z[i]\) is integral over \(\mathbb Z\) because it satisfies a monic polynomial over \(\mathbb Z\) (e.g. \(t^2-2at+(a^2+b^2)=0\)). Hence \(\mathbb Z[i]\) is integral over \(\mathbb Z\).

2. **A hypersurface example.**  
   Let \(k\) be a field and consider
   \[
   R = k[x] \subset S = k[x,y]/(y^2-x).
   \]
   The class of \(y\) in \(S\) satisfies \(t^2-x=0\), a monic polynomial in \(R[t]\). Thus \(S\) is integral over \(R\).

3. **Non-example: \(\mathbb Z \subset \mathbb Q\).**  
   The extension is not integral, since \(1/2\in \mathbb Q\) is not integral over \(\mathbb Z\) (see {{< knowl id="integral-element" text="integral element" >}}).

## Related knowls
- Elementwise notion: {{< knowl id="integral-element" text="integral element" >}}
- Integral closure: {{< knowl id="integral-closure" text="integral closure" >}}, {{< knowl id="integrally-closed-domain" text="integrally closed domain" >}}
- Prime behavior: {{< knowl id="lying-over-theorem" text="lying over theorem" >}}, {{< knowl id="going-up-theorem" text="going up theorem" >}}, {{< knowl id="going-down-theorem" text="going down theorem" >}}
- Spectrum viewpoint: {{< knowl id="prime-spectrum" text="prime spectrum" >}}
