# Knowls Needing Review

## Anti-Patterns Identified

### 1. "Related knowls" sections
Files contain a templated "Related knowls" section at the end, in one of these formats:
- `## Related knowls`
- `**Related knowls.**`

This is an anti-pattern because knowl links should flow naturally in the prose, not be listed in a separate section.

**Total files with this pattern:** 41 files

### 2. Knowl shortcodes inside LaTeX display math
Some files embed `{{< knowl ... >}}` inside `\[ ... \]` or `$$...$$` LaTeX blocks. This can cause rendering issues.

**Files with this pattern:**

algebra-commutative:
- `maximal-spectrum.md` (line 13): `={{< knowl id="prime-spectrum" ...`
- `krull-dimension.md` (line 12): `\mathfrak p_i \in {{< knowl id="prime-spectrum" ...`
- `height-of-prime.md` (line 7): `\mathfrak p\in {{< knowl ...`
- `zariski-topology.md` (lines 7, 39): `={{< knowl id="prime-spectrum" ...`
- `lying-over-theorem.md` (line 38): `\mathfrak p\in {{< knowl ...`

convex-analysis:
- `properties-of-the-minkowski-functional-of-a-convex-set.md` (lines 12, 16): `={{< knowl id="algebraic-interior-core" ...`

analysis:
- `directional-derivative.md` (line 8): `D_v f(a) := {{< knowl id="limit-of-a-function-at-a-point" text="lim" >}}`
- `oscillation-criterion-lemma.md` (line 8): `\omega(f;I)={{< knowl id="supremum" text="sup" >}}`
- `oscillation-of-a-function.md` (line 7): `:={{< knowl id="supremum" text="sup" >}}`
- `algebraic-properties-sup-inf.md` (lines 35, 39): `={{< knowl id="maximum" text="max" >}}`
- `second-derivative-tests.md` (line 17): `${{< knowl id="gradient" ...>}}=0$` and `$H={{< knowl ...`
- `image-compact-connected-is-interval.md` (line 12): `m={{< knowl id="minimum" ...`
- `continuous-attains-max-min-compact.md` (line 8): `f(x_{\min})={{< knowl id="minimum" ...`
- `basic-properties-of-lim-sup-and-lim-inf.md` (line 19): `$\ell={{< knowl id="limit-superior-lim-sup" ...`
- `compact-iff-complete-totally-bounded.md` (line 15): `$\{{{< knowl id="open-ball" ...`
- `sufficient-condition-for-differentiability.md` (line 6): `\in {{< knowl ...`
- `equicontinuity-pointwise-bounded-uniform-bounded.md` (line 22): `y\in {{< knowl id="open-ball" ...`

algebra-representation-theory:
- `schur-corollary.md` (line 13): `z\in {{< knowl id="center-of-group" ...`

algebra-fields-galois (being regenerated):
- `galois-group.md` (lines 10-11): knowl shortcode inside display math set-builder notation

**Note (2024-12-29):** Another agent observed "HAHASHORTCODE" patterns in Hugo output for algebra-groups, suggesting knowl shortcodes inside LaTeX. Source files show no such issues - may have been transient or already fixed.

### 3. Knowl with `=` directly before shortcode
Pattern like `foo={{< knowl ... >}}` in LaTeX context may break rendering.

**Files with this pattern:** (14 files)
- `algebra-commutative/maximal-spectrum.md` (line 13)
- `algebra-commutative/zariski-topology.md` (lines 7, 39)
- `convex-analysis/properties-of-the-minkowski-functional-of-a-convex-set.md` (lines 12, 16)
- `analysis/directional-derivative.md` (line 8)
- `analysis/oscillation-criterion-lemma.md` (line 8)
- `analysis/oscillation-of-a-function.md` (line 7)
- `analysis/algebraic-properties-sup-inf.md` (lines 35, 39)
- `analysis/second-derivative-tests.md` (line 17)
- `analysis/image-compact-connected-is-interval.md` (line 12)
- `analysis/continuous-attains-max-min-compact.md` (line 8)
- `analysis/basic-properties-of-lim-sup-and-lim-inf.md` (line 19)

### 5. "Proof sketch" sections

Found 281 files with "proof sketch" across knowl sections. May want to remove or standardize.

| Section | Count |
|---------|-------|
| analysis | 136 |
| algebra-groups | 59 |
| convex-analysis | 58 |
| algebra-rings | 12 |
| algebra-modules | 10 |
| shared-foundations | 3 |
| shared-linear-algebra | 3 |
| **Total** | **281** |

Note: algebra-fields-galois and algebra-commutative (regenerated batches) have 0 files with proof sketches.

---

### 4. Categorized "Related knowls" sub-bullets
Some files organize related knowls by category (e.g., "Ideals:", "Topology:", "Primes:", "Modules:") which is overly structured.

**Files with this pattern:** (12 files)
- `algebra-commutative/zariski-topology.md` (Spectra:, Ideals:)
- `algebra-commutative/integral-extension.md`
- `algebra-commutative/height-of-prime.md` (Localization:, Primes:)
- `algebra-commutative/restriction-of-scalars.md`
- `algebra-commutative/prime-spectrum.md` (Ideals:, Dimension:)
- `algebra-commutative/maximal-spectrum.md` (Topology:, Ideals:)
- `algebra-commutative/krull-dimension.md`
- `algebra-commutative/integral-element.md`
- `algebra-commutative/lying-over-theorem.md` (Integrality:)
- `algebra-commutative/localization-inverts-multiplicative-set.md` (Construction:, Units:)
- `algebra-commutative/going-up-theorem.md` (Integrality:)
- `algebra-commutative/nakayama-lemma.md` (Modules:)


## Missing Knowls

Knowls that are referenced but don't exist yet:

### shared-linear-algebra (needed)
- `linear-independence` - Referenced in algebra-modules/basis-module.md
- `basis` - Referenced in algebra-modules/rational-canonical-form-theorem.md (vector space basis, distinct from basis-module)
- `dimension` - Referenced in algebra-modules/rank-module.md
- `matrix-representation` - Referenced in algebra-modules/smith-normal-form-theorem.md, rational-canonical-form-theorem.md
- `diagonalizable` - Referenced in algebra-modules/jordan-canonical-form-theorem.md
- `real-numbers` - Referenced in shared-linear-algebra/euclidean-space.md, vector-space.md
- `complex-numbers` - Referenced in shared-linear-algebra/eigenvalue.md, inner-product.md
- `absolute-value` - Referenced in shared-linear-algebra/euclidean-norm.md

### analysis (needed)
- `power-series` - Referenced in analysis/power-series-analytic-on-disk.md
- `radius-of-convergence` - Referenced in analysis/power-series-analytic-on-disk.md
- `fundamental-theorem-of-calculus` - Referenced in analysis/mean-value-estimate-lemma.md, newton-leibniz-formula.md, integration-by-parts.md
- `partition-of-interval` - Referenced in analysis/oscillation-criterion-lemma.md, refinement-lemma-upper-lower-sums.md, linearity-in-integrator-riemann-stieltjes.md, additivity-linearity-riemann-integral.md, riemann-integrability-implies-boundedness.md
- `monotone-function` - Referenced in analysis/refinement-lemma-upper-lower-sums.md, positive-derivative-strictly-increasing.md, jordan-decomposition-lemma.md, additivity-linearity-riemann-integral.md
- `sup-norm` - Referenced in analysis/uniformly-bounded-family.md, arzela-ascoli-theorem.md, completeness-of-ck.md
- `open-cover` - Referenced in analysis/compact-iff-complete-totally-bounded.md, equicontinuity-pointwise-bounded-uniform-bounded.md
- `sequential-compactness` - Referenced in analysis/compact-iff-complete-totally-bounded.md
- `lebesgue-criterion-riemann-integrability` - Referenced in analysis/absolute-value-preserves-integrability.md, composition-preserves-riemann-integrability.md, algebra-of-riemann-integrable-functions.md
- `uniform-limit-theorem` - Referenced in analysis/m-test-continuity-integration-corollary.md, uniform-limit-of-continuous-is-continuous.md
- `limit-point` - Referenced in analysis/bounded-infinite-set-has-limit-point.md
- `lipschitz-function` - Referenced in analysis/contraction-mapping.md, equicontinuous-family.md, banach-fixed-point-theorem.md
- `change-of-variables-rk` - Referenced in analysis/change-of-variables-jacobian-corollary.md, diffeomorphism.md
- `antiderivative` - Referenced in analysis/newton-leibniz-formula.md
- `uniform-convergence` - Referenced in analysis/arzela-ascoli-theorem.md, completeness-of-ck.md
- `continuous-function` - Referenced in analysis/arzela-ascoli-theorem.md, equicontinuity-pointwise-bounded-uniform-bounded.md, completeness-of-ck.md
- `uniform-convergence-and-differentiation` - Referenced in analysis/term-by-term-operations-series.md
- `bounded-variation` - Referenced in analysis/linearity-in-integrator-riemann-stieltjes.md, jordan-decomposition-lemma.md
- `total-variation` - Referenced in analysis/jordan-decomposition-lemma.md
- `geometric-series` - Referenced in analysis/neumann-series-lemma.md

---

## Cross-Section Reference Issues (2024-12-29 Audit)

Summary of knowl references missing the `section` parameter:

| Section | Cross-section fixes needed | Missing knowls |
|---------|---------------------------|----------------|
| algebra-groups | 31 (FIXED) | 0 |
| algebra-rings | 0 | 0 |
| algebra-modules | 0 | 6 |
| algebra-category-theory | 0 | 0 |
| algebra-homological | 0 | 0 |
| algebra-representation-theory | 0 | 0 |
| analysis | 62 | 42 |
| convex-analysis | 64 (FIXED) | 0 |
| glossary | 22 | 0 |
| langlands-letter | 0 | 0 |
| posts | 2 | 0 |
| shared-foundations | 2 | 0 |
| shared-linear-algebra | 9 | 5 |
| **Total** | **97 unfixed (+64 fixed)** | **47** |

**Note:** algebra-fields-galois and algebra-commutative excluded (being regenerated).

---

### analysis (62 cross-section fixes needed)

**Pattern: refs to shared-foundations**
- metric-space.md: set
- infimum.md: partial-order, lower-bound
- euclidean-space-rk.md: cartesian-product
- uniqueness-of-supremum-infimum.md: upper-bound
- local-diffeomorphism-corollary.md: bijective-function
- metric.md: set
- maximum.md: upper-bound
- inverse-function.md: bijective-function
- minimum.md: lower-bound
- fixed-sign-of-derivative-implies-monotonicity.md: injective-function, inverse-function
- inverse-function-theorem-one-variable.md: bijective-function, inverse-function
- equivalence-relation.md: set, relation, partition, equivalence-class
- isometry.md: bijective-function
- injective-function.md: domain, inverse-function, codomain
- pointwise-convergence.md: set
- function-map.md: set, cartesian-product, domain, codomain
- subsequence.md: set
- set.md: union, intersection, subset
- diffeomorphism.md: bijective-function
- real-numbers-r.md: subset
- supremum.md: partial-order, upper-bound
- bijective-function.md: injective-function, surjective-function, inverse-function
- inverse-function-theorem-rk.md: bijective-function, inverse-function
- convergence-in-product-metric-spaces.md: cartesian-product
- homeomorphism.md: bijective-function
- surjective-function.md: codomain, inverse-function
- uniform-convergence-of-a-sequence-of-functions.md: set
- continuous-bijection-from-compact-homeomorphism-criterion.md: bijective-function
- algebraic-properties-sup-inf.md: upper-bound

**Pattern: refs to shared-linear-algebra**
- mean-value-estimate-lemma.md: linear-map
- differentiability-criterion-remainder.md: linear-map
- euclidean-space-rk.md: euclidean-norm
- jacobian-matrix.md: linear-map
- linear-map.md: operator-norm
- cauchy-criterion-for-convergence-in-rk.md: euclidean-norm
- triangle-inequality.md: euclidean-norm
- mean-value-inequality-multivariable.md: operator-norm
- differentiable-map.md: linear-map
- inverse-function-theorem-rk.md: linear-map
- compactness-criteria-rk.md: euclidean-norm
- neumann-series-lemma.md: linear-map, operator-norm
- differentiability-implies-continuity.md: linear-map
- total-derivative-frechet-derivative.md: linear-map

---

### glossary (22 cross-section fixes needed)

- group.md: monoid -> algebra-groups
- linear-map.md: vector-space -> shared-linear-algebra, field -> algebra-rings
- banach-space.md: vector-space -> shared-linear-algebra, metric -> analysis
- loop.md: group -> algebra-groups
- hilbert-space.md: metric -> analysis, inner-product -> shared-linear-algebra
- magma.md: semigroup, monoid, group -> algebra-groups
- inner-product.md: vector-space -> shared-linear-algebra
- monoid.md: semigroup, group -> algebra-groups
- bilinear-form.md: vector-space -> shared-linear-algebra, field -> algebra-rings
- inner-product-space.md: vector-space, inner-product -> shared-linear-algebra
- semigroup.md: monoid -> algebra-groups
- vector-space.md: field -> algebra-rings
- norm.md: vector-space -> shared-linear-algebra, metric -> analysis

---

### shared-linear-algebra (9 cross-section fixes needed)

- euclidean-space.md: cartesian-product -> shared-foundations
- linear-map.md: function -> shared-foundations
- basis-existence-theorem.md: axiom-of-choice, zorns-lemma, partial-order -> shared-foundations
- eigenspace.md: identity-function -> shared-foundations
- rank-nullity-theorem.md: injective-function, surjective-function -> shared-foundations
- inner-product.md: complex-conjugate -> analysis

---

### shared-foundations (2 cross-section fixes needed)

- upper-bound.md: supremum -> analysis
- lower-bound.md: infimum -> analysis

---

### posts (2 cross-section fixes needed)

- example-post.md: hilbert-space, banach-space -> glossary

---

## Modules Flagged for Secondary Math Review

### algebra-groups
**Reason:** Had 31 broken cross-section references (missing `section` parameter) while algebra-rings had 0. This disparity suggests algebra-groups may have been generated with less attention to cross-references, and could have other quality issues.

**Fixed references (2024-12-29):**
- 17 refs to `shared-foundations` (subset, partition, cardinality, preimage, injective-function, surjective-function, proper-subset, composition, intersection, equivalence-class, equivalence-relation, cartesian-product)
- 5 refs to `algebra-rings` (group-of-units ×3, gcd)
- 3 refs to `algebra-representation-theory` (character ×2, group-representation)
- 2 refs to `algebra-modules` (structure-theorem-pid, krull-schmidt-azumaya-theorem)
- 1 ref to `shared-linear-algebra` (vector-space)

**Recommended:** Have a math model review algebra-groups for:
- Mathematical accuracy
- Completeness of definitions
- Proper theorem statements
- Missing cross-references that should exist

---

## Files to Review

### algebra-commutative (17 files)
- zariski-topology.md
- semisimple-artinian-product.md
- nullstellensatz-corollary.md
- noetherian-primary-decomposition.md
- nakayama-corollary.md
- nakayama-lemma.md
- localization-noetherian-corollary.md
- localization-inverts-multiplicative-set.md
- lying-over-theorem.md
- going-up-theorem.md
- integral-extension.md
- hilbert-basis-corollary.md
- height-of-prime.md
- restriction-of-scalars.md
- prime-spectrum.md
- maximal-spectrum.md
- krull-dimension.md
- integral-element.md

### algebra-category-theory (1 file)
- yoneda-lemma.md

### algebra-fields-galois (26 files)
- fundamental-theorem-symmetric-polynomials.md
- algebraic-closure-uniqueness.md
- splitting-field-existence-uniqueness.md
- finite-field-multiplicative-cyclic.md
- separable-distinct-roots.md
- finite-field-existence.md
- algebraic-closure-existence.md
- finite-field-multiplicative-group-cyclic.md
- tower-law.md
- trace-norm-towers.md
- separable-normal-galois.md
- splitting-field-degree-bounds.md
- splitting-field-uniqueness.md
- separability-towers.md
- normality-splitting-field.md
- primitive-element-theorem.md
- galois-correspondence.md
- galois-degree-equals-group-order.md
- finite-fields-perfect.md
- fundamental-theorem-galois-theory.md
- finite-field-galois-group-cyclic.md
- finite-extension-perfect-separable.md
- finite-field-existence-uniqueness.md
- finite-field-galois-cyclic.md
- artins-theorem-fixed-fields.md
- dedekind-independence-lemma.md

### convex-analysis (1 file)
- properties-of-the-minkowski-functional-of-a-convex-set.md

### analysis (11 files)
- directional-derivative.md
- oscillation-criterion-lemma.md
- oscillation-of-a-function.md
- algebraic-properties-sup-inf.md
- second-derivative-tests.md
- image-compact-connected-is-interval.md
- continuous-attains-max-min-compact.md
- basic-properties-of-lim-sup-and-lim-inf.md
- compact-iff-complete-totally-bounded.md
- sufficient-condition-for-differentiability.md
- equicontinuity-pointwise-bounded-uniform-bounded.md

### algebra-representation-theory (1 file)
- schur-corollary.md


## Recommended Fixes

1. Remove "Related knowls" sections entirely, or integrate the links naturally into the existing prose
2. Move knowl shortcodes outside of LaTeX math blocks - reference concepts in prose before/after the equation
3. For `={{< knowl ...` patterns: rewrite so the knowl is in prose, not mid-equation
4. Remove categorized sub-bullets; integrate naturally or remove entirely
5. Check for proper rendering after fixing LaTeX/knowl mixing issues


## Search Patterns for Future Detection

```bash
# Find "Related knowls" pattern
grep -r "Related knowls" content/
grep -r "^\*\*Related" content/

# Find knowl shortcodes that might be inside LaTeX (heuristic)
grep -r '= *{{< knowl' content/
grep -r '\\in {{< knowl' content/

# Find categorized sub-bullets in related sections
grep -rE '^- [A-Z][a-z]+:' content/
```
