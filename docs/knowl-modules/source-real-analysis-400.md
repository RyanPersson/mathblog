# Real Analysis (Baby Rudin style) — 400-level Dependency-Sorted List (coarse topological order)

## Definitions

### Logic, sets, and functions
- Set
- Subset
- Proper subset
- Empty set
- Union
- Intersection
- Set difference
- Complement
- Symmetric difference
- Power set
- Cartesian product
- Ordered pair
- Indexed family of sets
- Characteristic function (indicator function)
- Function (map)
- Domain
- Codomain
- Image (range)
- Preimage (inverse image)
- Restriction of a function
- Composition of functions
- Injective function
- Surjective function
- Bijective function
- Inverse function
- Relation
- Equivalence relation
- Equivalence class
- Partition
- Partial order
- Total order (linear order)

### Ordered field structure and completeness (ℝ, ℂ)
- Upper bound (of a set in an ordered set)
- Lower bound (of a set in an ordered set)
- Supremum (least upper bound)
- Infimum (greatest lower bound)
- Maximum
- Minimum
- Bounded above
- Bounded below
- Bounded set (in an ordered set; in a metric space)
- Real numbers ℝ (as a complete ordered field)
- Complex numbers ℂ
- Complex conjugate
- Absolute value on ℝ
- Modulus (absolute value) on ℂ

### Euclidean spaces and linear algebraic primitives
- Euclidean space ℝ^k
- Euclidean norm
- Inner product on ℝ^k
- Orthogonality
- Linear map (between finite-dimensional normed spaces)
- Operator norm (for linear maps between normed spaces)

### Metric spaces and basic topology
- Distance (metric)
- Metric space
- Open ball
- Closed ball
- Sphere (metric sphere)
- Neighborhood (in a metric space / in ℝ^k)
- Open set (in a metric space)
- Closed set (in a metric space)
- Interior of a set
- Closure of a set
- Boundary of a set
- Limit point (accumulation point, cluster point)
- Isolated point
- Derived set (set of limit points)
- Dense subset
- Diameter of a set

### Completeness, sequences, and subsequences
- Convergent sequence (in a metric space)
- Limit of a sequence
- Bounded sequence
- Monotone sequence
- Subsequence
- Limit superior (lim sup)
- Limit inferior (lim inf)
- Cauchy sequence
- Complete metric space

### Infinite series (numbers)
- Summable family / series (in ℝ or ℂ)
- Partial sums of a series
- Convergent series
- Divergent series
- Absolutely convergent series
- Conditionally convergent series
- Rearrangement of a series
- Cauchy product of two series

### Limits and continuity of functions (metric-space setting)
- Limit of a function at a point (ε–δ definition)
- One-sided limit
- Limit of a function at infinity
- Continuity at a point
- Continuity on a set
- Uniform continuity on a set
- Lipschitz continuity
- Hölder continuity
- Isometry (between metric spaces)
- Homeomorphism (between metric spaces)

### Compactness and connectedness
- Compact set (open-cover compactness)
- Sequentially compact set
- Totally bounded set
- Connected set
- Separated sets (a separation)
- Component (connected component)
- Path (continuous map from an interval)
- Path-connected set
- Interval (in ℝ)
- Curve (parametrized curve)

### Category notions (built from topology)
- Nowhere dense set
- Meager set (set of first category)
- Residual set (comeager set)

### One-variable differentiation
- Differentiability at a point (one-variable)
- Difference quotient
- Derivative
- Right derivative / left derivative
- Differentiability on an interval
- Higher derivatives
- Class C^k function (one-variable)
- Critical point
- Local maximum / local minimum
- Global maximum / global minimum
- Taylor polynomial
- Remainder term in Taylor's theorem

### Riemann integration (and variants) on intervals
- Step function (on an interval)
- Partition of an interval
- Refinement of a partition
- Mesh (norm) of a partition
- Upper sum (Riemann)
- Lower sum (Riemann)
- Tagged partition
- Riemann sum
- Riemann integrable function
- Riemann integral
- Oscillation of a function on a set / on a subinterval
- Set of measure zero in ℝ^k (via coverings by rectangles/balls with arbitrarily small total volume)
- Content (Jordan content) of a rectangle/finite union of rectangles (as used in "measure zero" criteria)
- Riemann–Stieltjes integral
- Integrator function (in the Riemann–Stieltjes integral)

### Sequences/series of functions and equicontinuity
- Pointwise convergence of a sequence of functions
- Uniform convergence of a sequence of functions
- Uniform Cauchy sequence of functions
- Uniform convergence on compact sets
- Series of functions
- Uniform convergence of a series of functions
- Equicontinuity (family of functions)

### Multivariable differentiation and calculus
- Partial derivative
- Mixed partial derivative
- Directional derivative
- Gradient
- Jacobian matrix
- Jacobian determinant
- Hessian matrix
- Total derivative (Fréchet derivative in ℝ^k)
- Differentiable map (ℝ^k → ℝ^m)
- Class C^k map (ℝ^k → ℝ^m)
- Diffeomorphism (C^1 bijection with C^1 inverse)
- Implicitly defined function (via an equation F(x,y)=0)
- Regular point / critical point (in multivariable calculus context)
- Regular value / critical value (multivariable context)

### Multiple integration and transformations
- Multiple (Riemann) integral over a rectangle
- Iterated integral
- Change of variables (coordinate transformation) for multiple integrals

### Optimization with constraints
- Constraint set (for optimization)
- Lagrange multiplier condition


## Axioms
- Principle of mathematical induction (Peano/induction axiom scheme on ℕ)
- Field axioms (for ℝ, ℂ)
- Order axioms (for ℝ as an ordered field)
- Completeness axiom of ℝ (least upper bound / supremum property)


## Theorems

### Discrete foundations (used implicitly throughout)
- Well-ordering principle for ℕ

### Completeness and order properties of ℝ
- Least upper bound theorem (existence of suprema for nonempty bounded-above subsets of ℝ)
- Greatest lower bound theorem (existence of infima for nonempty bounded-below subsets of ℝ)
- Archimedean property of ℝ
- Density of ℚ in ℝ
- Density of ℝ \ ℚ in ℝ

### Core convergence theorems in ℝ and ℝ^k
- Nested interval theorem (nested closed intervals with lengths → 0 have a unique common point)
- Monotone convergence theorem (bounded monotone sequences converge)
- Cauchy criterion for convergence in ℝ^k (completeness of ℝ^k)
- Bolzano–Weierstrass theorem (every bounded sequence in ℝ^k has a convergent subsequence)
- Algebra of limits for sequences (sum/product/quotient/complex conjugation)
- Squeeze theorem (for sequences and for functions)

### Series tests and structural results
- Absolute convergence implies convergence (series)
- Comparison test (series)
- Limit comparison test (series)
- Ratio test (D'Alembert test)
- Root test (Cauchy test)
- Integral test
- Cauchy condensation test
- Alternating series test (Leibniz test)
- Dirichlet test (series)
- Abel test (series)
- Rearrangement theorem for absolutely convergent series (rearrangements preserve sum)
- Riemann rearrangement theorem (conditionally convergent series can be rearranged to arbitrary sums / divergence)
- Mertens theorem on Cauchy products (conditions ensuring convergence of Cauchy product)

### Metric-space topology (general structural facts)
- Open sets form a topology (stability under arbitrary unions and finite intersections)
- Closed sets are complements of open sets (stability under arbitrary intersections and finite unions)
- Sequential characterization of closure in metric spaces (x ∈ cl(E) iff ∃ sequence in E → x)
- Sequential characterization of closed sets in metric spaces (E closed iff it contains limits of convergent sequences in E)
- Continuity via sequences (in metric spaces: f continuous at x iff x_n→x implies f(x_n)→f(x))
- Continuity via open sets (f continuous iff preimages of open sets are open)

### Baire-category and completeness phenomena
- Cantor intersection theorem (nested nonempty closed sets with diameters → 0 have nonempty intersection; in complete metric spaces)
- Baire category theorem (complete metric spaces are not countable unions of nowhere dense sets)

### Compactness and its consequences
- Sequential compactness equals compactness (in metric spaces)
- Finite intersection property theorem (compactness equivalent to FIP for closed sets)
- Lebesgue number lemma (for open covers of compact metric spaces)
- Compactness implies completeness (in metric spaces)
- Compactness implies total boundedness (in metric spaces)
- Continuous image of compact set is compact
- Extreme value theorem (continuous function on compact set attains max and min)
- Heine–Cantor theorem (continuous function on compact set is uniformly continuous)
- Continuous bijection from compact metric space to metric space has continuous inverse (homeomorphism criterion)

### Compactness in Euclidean spaces (specialization)
- Heine–Borel theorem (in ℝ^k: compact iff closed and bounded)

### Connectedness and intermediate value structure
- Continuous image of connected set is connected
- Connected subsets of ℝ are intervals (order-connectedness characterization)
- Intermediate value theorem

### One-variable differential calculus
- Rolle's theorem
- Mean value theorem (Lagrange)
- Cauchy mean value theorem
- Fixed sign of derivative implies monotonicity (one-variable)
- Taylor's theorem with remainder (standard one-variable forms: Lagrange form, integral form)
- Darboux theorem (derivatives have the intermediate value property)
- Inverse function theorem (one-variable)
- L'Hôpital's rule (standard one-variable forms, under appropriate hypotheses)

### Riemann integration on [a,b] (and Riemann–Stieltjes)
- Existence of Riemann integral for continuous functions on [a,b]
- Riemann integrability of monotone functions on [a,b]
- Riemann integrability of functions with finitely many discontinuities
- Lebesgue criterion for Riemann integrability (bounded f on [a,b] is Riemann integrable iff its discontinuity set has measure zero)
- Mean value theorem for integrals (continuous integrand)
- Fundamental theorem of calculus, Part I (integral defines an antiderivative under standard hypotheses)
- Fundamental theorem of calculus, Part II (Newton–Leibniz formula under standard hypotheses)
- Substitution rule (change of variables) for one-variable Riemann integrals (standard hypotheses)
- Riemann–Stieltjes integrability theorem (continuous integrand with increasing integrator; standard sufficient conditions)
- Integration by parts (Riemann–Stieltjes)

### Sequences/series of functions
- Uniform limit theorem for continuity (uniform limit of continuous functions is continuous)
- Weierstrass M-test (uniform convergence of series of functions)
- Uniform convergence and integration theorem (interchange limit and integral under uniform convergence / M-test hypotheses)
- Uniform convergence and differentiation theorem (term-by-term differentiation under uniform convergence of derivatives + pointwise convergence at a point)
- Dini's theorem (monotone pointwise convergence of continuous functions to a continuous limit on a compact space implies uniform convergence)

### Approximation theorems
- Weierstrass approximation theorem (polynomials are dense in C([a,b]) in the uniform norm)
- Stone–Weierstrass theorem (standard real/complex versions for subalgebras separating points, as commonly included)

### Power series (typically after uniform convergence tools)
- Cauchy–Hadamard theorem (radius of convergence via lim sup of nth roots)
- Uniform convergence of power series on compact subsets of the open disk of convergence
- Term-by-term differentiation of power series inside the radius of convergence
- Term-by-term integration of power series inside the radius of convergence
- Abel's theorem (boundary behavior of power series at an endpoint of convergence interval, in standard one-variable forms)

### Multivariable calculus and analysis on ℝ^k
- Differentiability implies continuity (one-variable and multivariable)
- Chain rule (multivariable)
- Mean value inequality (multivariable; standard norm form)
- Sufficient condition for differentiability (continuous partial derivatives imply differentiability: C^1 ⇒ differentiable)
- Schwarz (Clairaut) theorem (equality of mixed partial derivatives under continuity assumptions)
- Taylor's theorem in several variables (with remainder; standard forms)
- Inverse function theorem (ℝ^k → ℝ^k, C^1 hypotheses)
- Implicit function theorem (C^1 hypotheses)

### Multiple integration (Riemann) and transformations
- Fubini theorem for Riemann integrals on rectangles (for continuous functions; standard extensions under integrability hypotheses)
- Change of variables formula for multiple integrals (Jacobian determinant; standard C^1 diffeomorphism hypotheses)

### Constrained optimization
- Lagrange multipliers theorem (necessary condition for constrained extrema under regularity hypotheses)


## Lemmas

### Order/completeness auxiliary facts
- Supremum approximation lemma (existence of a sequence approaching sup)

### Sequence/subsequence tools
- Monotone subsequence lemma (every sequence has a monotone subsequence)
- Basic properties of lim sup and lim inf (inequalities and subsequence characterizations)

### Norm/metric inequalities
- Triangle inequality (for Euclidean norm; and for metric spaces via metric axioms)
- Reverse triangle inequality
- Cauchy–Schwarz inequality (in ℝ^k / inner product spaces)

### Metric convergence facts
- Uniqueness of limits (in metric spaces)
- A convergent sequence is Cauchy (metric spaces)
- Every Cauchy sequence is bounded (metric spaces)

### Compactness-related routine lemmas
- Compactness implies boundedness (metric spaces)
- Compactness implies closedness (metric spaces)
- Closed subset of a compact set is compact
- Finite subcover lemma (from compactness definition)
- Lebesgue number lemma auxiliary refinement lemma (standard cover refinement step)
- Compactness of graphs lemma (graph of continuous function over compact domain is compact)

### Uniform convergence routine lemmas
- Uniform convergence implies uniform Cauchy (functions)
- Uniform Cauchy implies uniform convergence (in complete codomain; standard metric-space formulation)
- Uniform convergence preserves boundedness (under bounded approximants)
- Uniform convergence implies convergence of sup norms (in C(K) with sup norm, K compact)
- Equicontinuity + pointwise convergence on a dense set implies uniform convergence on compacta (standard auxiliary lemma used toward Arzelà–Ascoli, when included)

### Riemann / Riemann–Stieltjes technical lemmas
- Refinement lemma for upper and lower sums (monotonicity under refinement)
- Oscillation criterion lemma (integrability via oscillation sums)
- Additivity and linearity lemmas for Riemann and Riemann–Stieltjes integrals
- Bounded variation implies difference of two increasing functions (Jordan decomposition lemma, when included)

### Multivariable differentiability auxiliaries
- Mean value estimate lemma for differentiable maps (used in inverse/implicit function theorems)
- Determinant nonvanishing implies local invertibility lemma (used in inverse function theorem proofs)


## Propositions

### Sup/inf and completeness equivalences
- Uniqueness of supremum and infimum
- Basic algebraic properties of sup and inf (translation/scaling; order properties)
- Completeness equivalences (least upper bound property ⇔ nested intervals property ⇔ Cauchy completeness, as commonly developed)

### Equivalent formulations of continuity and related stability properties
- Equivalent definitions of continuity in metric spaces (ε–δ / sequences / open sets)
- Uniform continuity implies continuity
- Uniform continuity preserves Cauchy sequences

### Euclidean/product structure propositions
- Convergence in product metric spaces (coordinatewise characterization)

### Compactness and connectedness criteria in ℝ^k and ℝ
- Compactness criteria in ℝ^k (closed and bounded; via Heine–Borel)
- Connectedness criteria in ℝ (interval characterization consequences)
- Continuous functions on compact sets are bounded
- Continuous functions map compact sets to closed and bounded sets in ℝ^k

### One-variable differentiation rules and consequences
- Differentiability rules (linearity, product rule, quotient rule, chain rule in one variable)
- Derivative zero implies constant on an interval
- If f′ is bounded on an interval then f is uniformly continuous (standard consequence of MVT)

### Riemann / Riemann–Stieltjes integrability closure properties
- Riemann integrability implies boundedness (on compact intervals; standard prerequisite statement)
- If f is Riemann integrable then |f| is Riemann integrable
- Closure properties of Riemann integrable functions (sums, products)
- Composition counterexample: if f is Riemann integrable and g is continuous then g∘f need not be integrable (when included)
- If f is Riemann–Stieltjes integrable with respect to α and β, then integrable with respect to linear combinations (linearity in integrator under BV hypotheses)
- Uniform limit of integrable functions is integrable (with integral of limit = limit of integrals, under uniform convergence)
- Term-by-term integration/differentiation propositions for uniformly convergent series of functions (under standard hypotheses)

### Compactness/totally-bounded rephrasings (often used as "tools")
- Equivalence of compactness and sequential compactness (metric spaces; sometimes stated as proposition before theorem-level use)
- Total boundedness characterization via ε-nets (metric spaces)

### Multivariable differentiability and extrema tests
- Differentiability criteria via remainder estimates (multivariable)
- Sufficient conditions for constrained extrema (second derivative tests in one-variable; Hessian tests in multivariable, when covered)


## Corollaries

### Consequences of Bolzano–Weierstrass / compactness in ℝ^k
- Every bounded infinite subset of ℝ^k has a limit point (Bolzano–Weierstrass corollary)
- Every bounded sequence in ℝ^k has a convergent subsequence (Bolzano–Weierstrass corollary form)

### Consequences of series convergence/absolute convergence
- A convergent series has terms tending to 0
- Absolute convergence implies Cauchy criterion for series

### Consequences of uniform convergence
- Uniform convergence implies pointwise convergence
- Uniform limit of continuous functions is continuous

### Consequences of compactness + continuity
- Continuous function on a compact set is bounded (Extreme value theorem corollary)
- Continuous function on a compact set attains a maximum and a minimum (Extreme value theorem corollary form)
- Continuous function on a compact set is uniformly continuous (Heine–Cantor corollary form)
- Image of a compact connected set under a continuous function is a compact interval in ℝ

### Consequences of IVT / MVT / Rolle
- Intermediate value property for continuous functions on intervals (IVT corollary form)
- If f′ > 0 on an interval then f is strictly increasing (MVT corollary)
- If f′ = 0 on an interval then f is constant (Rolle/MVT corollary)

### Consequences of the FTC and integration identities
- Fundamental theorem of calculus implies integration differentiates antiderivatives (Newton–Leibniz corollary)
- Integration by parts for Riemann integrals (as a special case of Riemann–Stieltjes)

### Standard "packaged" corollaries from uniform convergence theorems
- Weierstrass M-test implies uniform convergence and hence continuity/integrability passage (standard corollary packaging)
- Uniform convergence + uniform boundedness implies interchange of limit and integral (standard corollary packaging)

### Power series and smoothness corollaries
- Power series represent analytic functions on their disk of convergence (term-by-term differentiation corollary)

### Multivariable calculus corollaries
- Equality of mixed partials under C^2 hypotheses (Schwarz theorem corollary form)
- Local diffeomorphism corollary of the inverse function theorem
- Existence of local implicit function parameterizations (implicit function theorem corollary)
- Change of variables preserves integrability and transforms integrals by Jacobian (as a corollary packaging of the change-of-variables theorem)
