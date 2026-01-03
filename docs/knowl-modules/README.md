# Modular Knowl System

This directory contains a modular decomposition of mathematical knowls into focused, composable units.

## Philosophy

Rather than generating monolithic knowl sets for entire subjects, we decompose mathematics into:

1. **Shared Pools** — Foundational concepts used across multiple fields
2. **Focused Modules** — Topic-specific additions to the shared pools

A course's knowl set is constructed by combining the relevant shared pools with the appropriate focused modules.

## Structure

```
knowl-modules/
├── README.md                         # This file
├── decomposition.md                  # Shared pools + algebra modules
├── analysis-decomp.md                # Analysis modules + convex analysis
├── source-real-analysis-400.md       # Original enumeration (Baby Rudin)
└── source-abstract-algebra-500.md    # Original enumeration (graduate algebra)
```

## Shared Pools

| Pool | Description | Used By |
|------|-------------|---------|
| `shared-foundations` | Sets, functions, relations, orders | Everything |
| `linear-algebra` | Vector spaces, linear maps, eigenvalues | Analysis, Algebra, many others |

## Analysis Modules

| Module | Depends On | Content |
|--------|------------|---------|
| `analysis-order-completeness` | foundations | Sup/inf, ℝ completeness |
| `analysis-metric-topology` | order-completeness | Metric spaces, open/closed |
| `analysis-sequences-series` | metric-topology | Convergence, series tests |
| `analysis-continuity` | sequences-series | Limits, continuity, uniform |
| `analysis-compactness-connectedness` | continuity | Compact, connected, Heine-Borel |
| `analysis-differentiation-1d` | continuity | Derivatives, MVT, Taylor |
| `analysis-riemann-integration` | differentiation-1d | Riemann integral, FTC |
| `analysis-function-sequences` | riemann-integration | Uniform convergence, power series |
| `analysis-multivariable` | linear-algebra, differentiation-1d | Partial derivatives, Jacobian, implicit function |
| `convex-analysis` | linear-algebra, metric-topology | Convex sets/functions, separation, Hahn–Banach |

## Algebra Modules

| Module | Depends On | Content |
|--------|------------|---------|
| `algebra-groups` | foundations | Group theory through Sylow |
| `algebra-rings` | foundations, groups | Rings, ideals, PIDs, UFDs |
| `algebra-modules` | rings, linear-algebra | Modules, tensor products, projective/injective |
| `algebra-fields-galois` | rings, groups | Field extensions, Galois theory |
| `algebra-commutative` | rings, modules | Localization, Noetherian, primary decomposition |
| `algebra-homological` | modules, category-theory | Chain complexes, Ext, Tor |
| `algebra-representation-theory` | groups, modules, linear-algebra | Representations, characters |
| `algebra-category-theory` | foundations | Categories, functors, Yoneda |

## Occurrence Counts

Items in the decomposition files are marked with occurrence counts like `(×2)`. This indicates how many modules use that concept:

- **×1**: Appears in one module only (topic-specific)
- **×2+**: Appears in multiple modules (candidate for shared pool)

Items with high counts should live in shared pools; items with ×1 are specific to their module.

## Composing a Course

To generate knowls for a specific course, combine modules:

**Example: Baby Rudin Analysis**
```
shared-foundations
+ linear-algebra
+ analysis-order-completeness
+ analysis-metric-topology
+ analysis-sequences-series
+ analysis-continuity
+ analysis-compactness-connectedness
+ analysis-differentiation-1d
+ analysis-riemann-integration
+ analysis-function-sequences
+ analysis-multivariable
```

**Example: First Graduate Algebra Course**
```
shared-foundations
+ algebra-groups
+ algebra-rings
```

**Example: Second Graduate Algebra Course**
```
shared-foundations
+ linear-algebra
+ algebra-groups (already have, skip)
+ algebra-rings (already have, skip)
+ algebra-modules
+ algebra-fields-galois
```

## Avoiding Duplication

When a knowl appears in multiple modules:
1. It lives in the **shared pool** if high-occurrence
2. It lives in the **first module in dependency order** if lower-occurrence
3. Later modules reference it but don't recreate it

The actual knowl files go in:
```
content/glossary/
  shared/
    set.md
    function.md
    ...
  analysis/
    metric-space.md
    cauchy-sequence.md
    ...
  algebra/
    group.md
    ring.md
    ...
```

## Extending the System

To add a new subject (e.g., Topology, Number Theory):

1. Generate the full enumeration using `knowl-generation/step-1-enumeration.md`
2. Add it as `source-[subject]-[level].md`
3. Decompose it in the appropriate decomposition file, marking overlaps with existing modules
4. Create new focused modules as needed
5. Identify new shared pool candidates (items with ×3+ occurrences)
