# Modular Knowl Decomposition

This document decomposes the source lists into focused modules. Items appearing in multiple modules are marked with occurrence counts. Highly shared items form the **shared pools**; focused modules are **additions** to the relevant shared pools.

---

## Shared Pools

### `shared-foundations` (×2+)
Basic set theory, logic, and function concepts used across all mathematics.

**Definitions:**
- Set (×2)
- Subset (×2)
- Proper subset (×1, but foundational)
- Empty set (×1, but foundational)
- Union (×1, but foundational)
- Intersection (×1, but foundational)
- Set difference (×1)
- Complement (×1)
- Cartesian product (×2)
- Ordered pair (×1)
- Partition of a set (×2)
- Function (map) (×2)
- Composition of functions (×2)
- Identity function (×1, but foundational)
- Domain (×1)
- Codomain (×1)
- Image of a function (×2)
- Preimage of a function (×2)
- Injective function (×2)
- Surjective function (×2)
- Bijective function (×2)
- Inverse function (×1)
- Relation (×2)
- Equivalence relation (×2)
- Equivalence class (×2)
- Quotient set (×1)
- Partial order (poset) (×2)
- Total order (linear order) (×2)
- Upper bound (×2)
- Lower bound (×2)
- Well-ordered set (×1)
- Cardinality (×1)
- Countable set (×1)
- Binary operation (×2)

**Axioms:**
- Zermelo–Fraenkel axioms with Choice (ZFC) (×1, but foundational)
- Axiom of Choice (×1)
- Principle of mathematical induction (×1)

**Theorems:**
- Well-ordering theorem (×1)
- Well-ordering principle for ℕ (×1)

**Lemmas:**
- Zorn's lemma (×1, but foundational across algebra)

---

### `shared-linear-algebra` (×2)
Vector spaces, linear maps, and matrix theory used in both analysis and algebra.

**Definitions:**
- Vector space (×2)
- Linear map (×2)
- Linear operator (×1)
- Eigenvalue (×1)
- Eigenvector (×1)
- Eigenspace (×1)
- Determinant (×1)
- Trace (linear algebra) (×1)
- Characteristic polynomial (×1)
- Minimal polynomial (linear operator) (×1)
- Euclidean space ℝ^k (×1)
- Euclidean norm (×1)
- Inner product on ℝ^k (×1)
- Orthogonality (×1)
- Operator norm (×1)

**Theorems:**
- Cayley–Hamilton theorem (×1)
- Rank–nullity theorem (×1)
- Existence of a basis for every vector space (×1)

---

## Analysis Modules

### `analysis-order-completeness`
The ordered field structure of ℝ and completeness properties.

*Depends on:* `shared-foundations`

**Definitions:**
- Supremum (least upper bound)
- Infimum (greatest lower bound)
- Maximum
- Minimum
- Bounded above
- Bounded below
- Bounded set (in an ordered set)
- Real numbers ℝ (as a complete ordered field)
- Complex numbers ℂ
- Complex conjugate
- Absolute value on ℝ
- Modulus (absolute value) on ℂ

**Axioms:**
- Field axioms (for ℝ, ℂ)
- Order axioms (for ℝ as an ordered field)
- Completeness axiom of ℝ (least upper bound / supremum property)

**Theorems:**
- Least upper bound theorem
- Greatest lower bound theorem
- Archimedean property of ℝ
- Density of ℚ in ℝ
- Density of ℝ \ ℚ in ℝ
- Nested interval theorem

**Lemmas:**
- Supremum approximation lemma

**Propositions:**
- Uniqueness of supremum and infimum
- Basic algebraic properties of sup and inf
- Completeness equivalences

---

### `analysis-metric-topology`
Metric spaces and point-set topology in the metric context.

*Depends on:* `shared-foundations`, `analysis-order-completeness`

**Definitions:**
- Distance (metric)
- Metric space
- Open ball
- Closed ball
- Sphere (metric sphere)
- Neighborhood
- Open set (in a metric space)
- Closed set (in a metric space)
- Interior of a set
- Closure of a set
- Boundary of a set
- Limit point (accumulation point)
- Isolated point
- Derived set
- Dense subset
- Diameter of a set
- Bounded set (in a metric space)

**Theorems:**
- Open sets form a topology
- Closed sets are complements of open sets
- Sequential characterization of closure
- Sequential characterization of closed sets

**Lemmas:**
- Triangle inequality
- Reverse triangle inequality

---

### `analysis-sequences-series`
Sequences, series, and convergence in ℝ and ℝ^k.

*Depends on:* `analysis-order-completeness`, `analysis-metric-topology`

**Definitions:**
- Convergent sequence
- Limit of a sequence
- Bounded sequence
- Monotone sequence
- Subsequence
- Limit superior (lim sup)
- Limit inferior (lim inf)
- Cauchy sequence
- Complete metric space
- Summable family / series
- Partial sums
- Convergent series
- Divergent series
- Absolutely convergent series
- Conditionally convergent series
- Rearrangement of a series
- Cauchy product

**Theorems:**
- Monotone convergence theorem (sequences)
- Cauchy criterion for convergence
- Bolzano–Weierstrass theorem
- Algebra of limits for sequences
- Squeeze theorem
- Absolute convergence implies convergence
- Comparison test
- Limit comparison test
- Ratio test
- Root test
- Integral test
- Cauchy condensation test
- Alternating series test
- Dirichlet test
- Abel test
- Rearrangement theorem (absolutely convergent)
- Riemann rearrangement theorem
- Mertens theorem

**Lemmas:**
- Monotone subsequence lemma
- Basic properties of lim sup and lim inf
- Uniqueness of limits
- A convergent sequence is Cauchy
- Every Cauchy sequence is bounded

**Corollaries:**
- Every bounded sequence in ℝ^k has a convergent subsequence
- A convergent series has terms tending to 0

---

### `analysis-continuity`
Limits and continuity of functions.

*Depends on:* `analysis-metric-topology`, `analysis-sequences-series`

**Definitions:**
- Limit of a function at a point (ε–δ)
- One-sided limit
- Limit at infinity
- Continuity at a point
- Continuity on a set
- Uniform continuity
- Lipschitz continuity
- Hölder continuity
- Isometry
- Homeomorphism

**Theorems:**
- Continuity via sequences
- Continuity via open sets

**Propositions:**
- Equivalent definitions of continuity
- Uniform continuity implies continuity
- Uniform continuity preserves Cauchy sequences

---

### `analysis-compactness-connectedness`
Compactness and connectedness in metric spaces.

*Depends on:* `analysis-metric-topology`, `analysis-continuity`

**Definitions:**
- Compact set (open-cover)
- Sequentially compact set
- Totally bounded set
- Connected set
- Separated sets
- Component (connected component)
- Path
- Path-connected set
- Interval (in ℝ)
- Curve (parametrized curve)
- Nowhere dense set
- Meager set
- Residual set

**Theorems:**
- Sequential compactness equals compactness (metric spaces)
- Finite intersection property theorem
- Lebesgue number lemma
- Compactness implies completeness
- Compactness implies total boundedness
- Continuous image of compact set is compact
- Extreme value theorem
- Heine–Cantor theorem
- Continuous bijection from compact to metric space is homeomorphism
- Heine–Borel theorem
- Continuous image of connected set is connected
- Connected subsets of ℝ are intervals
- Intermediate value theorem
- Cantor intersection theorem
- Baire category theorem

**Lemmas:**
- Compactness implies boundedness
- Compactness implies closedness
- Closed subset of compact is compact

**Corollaries:**
- Continuous function on compact is bounded
- Continuous function on compact attains max and min
- Continuous function on compact is uniformly continuous

---

### `analysis-differentiation-1d`
One-variable differentiation.

*Depends on:* `analysis-continuity`

**Definitions:**
- Differentiability at a point
- Difference quotient
- Derivative
- Right/left derivative
- Higher derivatives
- Class C^k function
- Critical point
- Local maximum / local minimum
- Global maximum / global minimum
- Taylor polynomial
- Remainder term in Taylor's theorem

**Theorems:**
- Rolle's theorem
- Mean value theorem (Lagrange)
- Cauchy mean value theorem
- Fixed sign of derivative implies monotonicity
- Taylor's theorem with remainder
- Darboux theorem
- Inverse function theorem (1D)
- L'Hôpital's rule

**Propositions:**
- Differentiability rules (linearity, product, quotient, chain)
- Derivative zero implies constant
- Bounded derivative implies uniformly continuous

**Corollaries:**
- f′ > 0 implies strictly increasing
- f′ = 0 implies constant

---

### `analysis-riemann-integration`
Riemann and Riemann–Stieltjes integration.

*Depends on:* `analysis-differentiation-1d`, `analysis-compactness-connectedness`

**Definitions:**
- Step function
- Partition of an interval
- Refinement
- Mesh (norm) of partition
- Upper sum / Lower sum
- Tagged partition
- Riemann sum
- Riemann integrable function
- Riemann integral
- Oscillation of a function
- Set of measure zero
- Content (Jordan content)
- Riemann–Stieltjes integral
- Integrator function

**Theorems:**
- Existence of Riemann integral for continuous functions
- Riemann integrability of monotone functions
- Riemann integrability with finitely many discontinuities
- Lebesgue criterion for Riemann integrability
- Mean value theorem for integrals
- Fundamental theorem of calculus (Part I)
- Fundamental theorem of calculus (Part II)
- Substitution rule
- Riemann–Stieltjes integrability theorem
- Integration by parts (R-S)

**Lemmas:**
- Refinement lemma for upper/lower sums
- Oscillation criterion lemma
- Additivity and linearity lemmas

**Propositions:**
- Riemann integrability implies boundedness
- |f| integrable if f integrable
- Closure properties (sums, products)

**Corollaries:**
- FTC corollary: integration differentiates antiderivatives

---

### `analysis-function-sequences`
Sequences and series of functions, uniform convergence, power series.

*Depends on:* `analysis-riemann-integration`, `analysis-compactness-connectedness`

**Definitions:**
- Pointwise convergence
- Uniform convergence
- Uniform Cauchy sequence of functions
- Uniform convergence on compact sets
- Series of functions
- Equicontinuity (family of functions)

**Theorems:**
- Uniform limit theorem for continuity
- Weierstrass M-test
- Uniform convergence and integration theorem
- Uniform convergence and differentiation theorem
- Dini's theorem
- Weierstrass approximation theorem
- Stone–Weierstrass theorem
- Cauchy–Hadamard theorem (radius of convergence)
- Uniform convergence of power series on compact subsets
- Term-by-term differentiation of power series
- Term-by-term integration of power series
- Abel's theorem

**Lemmas:**
- Uniform convergence implies uniform Cauchy
- Uniform Cauchy implies uniform convergence (complete codomain)
- Uniform convergence preserves boundedness

**Corollaries:**
- Uniform convergence implies pointwise convergence
- Uniform limit of continuous functions is continuous
- Power series are analytic on disk of convergence

---

### `analysis-multivariable`
Multivariable differentiation and integration.

*Depends on:* `shared-linear-algebra`, `analysis-differentiation-1d`, `analysis-riemann-integration`

**Definitions:**
- Partial derivative
- Mixed partial derivative
- Directional derivative
- Gradient
- Jacobian matrix
- Jacobian determinant
- Hessian matrix
- Total derivative (Fréchet derivative)
- Differentiable map (ℝ^k → ℝ^m)
- Class C^k map
- Diffeomorphism
- Implicitly defined function
- Regular point / critical point
- Regular value / critical value
- Multiple integral over a rectangle
- Iterated integral
- Change of variables
- Constraint set
- Lagrange multiplier condition

**Theorems:**
- Differentiability implies continuity (multivariable)
- Chain rule (multivariable)
- Mean value inequality
- C^1 implies differentiable
- Schwarz (Clairaut) theorem
- Taylor's theorem (several variables)
- Inverse function theorem (ℝ^k)
- Implicit function theorem
- Fubini theorem (Riemann)
- Change of variables formula
- Lagrange multipliers theorem

**Lemmas:**
- Mean value estimate lemma
- Determinant nonvanishing implies local invertibility

**Corollaries:**
- Equality of mixed partials under C^2
- Local diffeomorphism corollary
- Implicit function parameterization corollary

---

## Algebra Modules

### `algebra-groups`
Group theory through Sylow theorems and structure.

*Depends on:* `shared-foundations`

**Definitions:**
- Semigroup
- Monoid
- Group
- Abelian group
- Subgroup
- Trivial subgroup
- Proper subgroup
- Cyclic subgroup
- Generated subgroup
- Normal subgroup
- Characteristic subgroup
- Simple group
- Solvable group
- Nilpotent group
- Perfect group
- Center of a group
- Centralizer
- Normalizer
- Conjugate element
- Conjugacy class
- Class function
- Commutator of elements
- Commutator subgroup (derived subgroup)
- Derived series
- Lower central series
- Upper central series
- p-group
- Sylow p-subgroup
- Hall subgroup
- Composition series (group)
- Subnormal series
- Chief series
- Group homomorphism
- Group monomorphism
- Group epimorphism
- Group isomorphism
- Kernel (group homomorphism)
- Image (group homomorphism)
- Coset (left/right)
- Index of a subgroup
- Quotient group
- Direct product of groups
- Direct sum of groups
- Internal direct product
- Semidirect product
- Internal semidirect product
- Group action
- Orbit
- Stabilizer
- Fixed-point set
- Kernel of an action
- Faithful action
- Free action
- Transitive action
- Regular action
- Permutation representation
- Conjugation action
- Automorphism group
- Inner automorphism
- Outer automorphism group
- Group presentation
- Generating set
- Free group
- Normal closure
- Group extension
- Split extension
- Central extension
- Exact sequence of groups

**Axioms:**
- Group axioms

**Theorems:**
- First isomorphism theorem (groups)
- Second isomorphism theorem (groups)
- Third isomorphism theorem (groups)
- Correspondence theorem (groups)
- Cayley's theorem
- Lagrange's theorem
- Cauchy's theorem (finite groups)
- Orbit–stabilizer theorem
- Class equation
- Burnside's lemma
- Sylow's first theorem
- Sylow's second theorem
- Sylow's third theorem
- Jordan–Hölder theorem (groups)
- Schreier refinement theorem
- Fundamental theorem of finitely generated abelian groups
- Nielsen–Schreier theorem
- Schur–Zassenhaus theorem
- Burnside's p^a q^b theorem
- Krull–Remak–Schmidt theorem (groups)

**Lemmas:**
- Subgroup test (one-step)
- Subgroup test (two-step)
- Normal subgroup criterion
- Subgroup of index 2 is normal
- p-group has nontrivial center
- Orbit decomposition lemma
- Conjugacy class size lemma
- Sylow conjugacy lemma
- Frattini argument
- Schreier's lemma
- Cosets partition a group
- Universal property of quotient groups
- Kernels are normal subgroups

**Propositions:**
- Uniqueness of identity
- Uniqueness of inverses
- Cancellation laws
- Subgroups closed under inverses and products
- Intersection of subgroups is a subgroup
- Product of normal subgroups is normal
- Center is characteristic
- Kernel is normal
- Image is a subgroup
- G/ker(f) ≅ im(f)
- Conjugation preserves order
- Subgroups of cyclic groups are cyclic
- Finite cyclic group ≅ ℤ/nℤ
- Aut(cyclic of order n) ≅ (ℤ/nℤ)×
- Group acts on itself by left multiplication
- Group acts on itself by conjugation
- Class equation decomposition
- |G| prime implies G cyclic
- |G| = p² implies G abelian
- Abelian implies all subgroups normal
- Finite p-group has subgroups of every order p^k
- n_p = 1 implies Sylow p-subgroup is normal
- Semidirect product from splitting exact sequence

**Corollaries:**
- Fermat's little theorem
- Euler's theorem
- Order of element divides order of group
- Finite p-group has nontrivial center
- n_p ≡ 1 mod p
- Classification of finite abelian groups
- Jordan–Hölder uniqueness

---

### `algebra-rings`
Ring theory and ideal structure.

*Depends on:* `shared-foundations`, `algebra-groups` (abelian groups)

**Definitions:**
- Ring
- Ring with identity (unital ring)
- Commutative ring
- Subring
- Ring homomorphism
- Ring monomorphism
- Ring epimorphism
- Ring isomorphism
- Kernel (ring homomorphism)
- Image (ring homomorphism)
- Ideal (left/right)
- Two-sided ideal
- Principal ideal
- Ideal generated by a subset
- Sum of ideals
- Product of ideals
- Intersection of ideals
- Quotient ring
- Unit (invertible element)
- Group of units
- Zero divisor
- Regular element
- Nilpotent element
- Idempotent element
- Reduced ring
- Nil ideal
- Nilradical
- Jacobson radical
- Annihilator ideal
- Prime ideal
- Maximal ideal
- Radical of an ideal
- Primary ideal
- Integral domain
- Field
- Division ring (skew field)
- Prime ring
- Simple ring
- Semiprime ideal
- Semisimple ring
- Artinian semisimple ring
- Center of a ring
- Opposite ring
- Matrix ring
- Characteristic of a ring/field
- Polynomial ring
- Laurent polynomial ring
- Formal power series ring
- Content of a polynomial
- Primitive polynomial
- Irreducible polynomial
- Minimal polynomial (over a field)
- Euclidean domain
- Principal ideal domain (PID)
- Unique factorization domain (UFD)
- Prime element
- Irreducible element
- Associated elements
- Greatest common divisor
- Least common multiple
- Fraction field
- Total ring of fractions

**Axioms:**
- Ring axioms
- Unital ring axiom
- Commutative ring axiom
- Field axioms

**Theorems:**
- First isomorphism theorem (rings)
- Second isomorphism theorem (rings)
- Third isomorphism theorem (rings)
- Correspondence theorem (rings)
- Chinese remainder theorem
- Existence of maximal ideals (Zorn)
- Wedderburn's little theorem
- Artin–Wedderburn theorem
- Hilbert basis theorem
- Hilbert's Nullstellensatz (weak)
- Hilbert's Nullstellensatz (strong)
- Gauss's lemma (content)
- Eisenstein's criterion
- Unique factorization theorem
- Euclidean domain ⇒ PID
- PID ⇒ UFD
- Gauss's theorem (UFD ⇒ polynomial ring is UFD)

**Lemmas:**
- Gauss lemma (content multiplicativity)
- Maximal ideals are prime
- Fields are exactly commutative division rings
- Maximal ideal iff quotient is field
- Prime ideal iff quotient is integral domain
- Universal property of quotient rings
- Kernels are two-sided ideals

**Propositions:**
- Ring homomorphisms preserve 0, 1, +, ×
- Kernel is an ideal
- Image is a subring
- Ideal correspondence (ideals containing I ↔ ideals of R/I)
- Units map to units
- Commutative ring is field iff only ideals are (0) and (1)
- Cancellation in integral domains
- Characteristic of integral domain is 0 or prime
- UFD implies GCDs exist
- Euclidean algorithm yields gcd and Bézout identity
- Content formula
- Nilradical = intersection of prime ideals
- Idempotents ↔ product decompositions
- Chinese remainder decomposition (comaximal ideals)

**Corollaries:**
- Every nontrivial commutative ring with 1 has a maximal ideal
- Every field has prime subfield ≅ ℚ or 𝔽_p
- Every finite integral domain is a field
- Every finite division ring is commutative (Wedderburn)

---

### `algebra-modules`
Module theory over rings.

*Depends on:* `algebra-rings`, `shared-linear-algebra`

**Definitions:**
- Module (left/right)
- Bimodule
- Submodule
- Quotient module
- Module homomorphism
- Kernel (module homomorphism)
- Image (module homomorphism)
- Cokernel (module)
- Exact sequence of modules
- Short exact sequence
- Split exact sequence
- Direct sum of modules
- Direct product of modules
- Cyclic module
- Finitely generated module
- Free module
- Basis (of a free module)
- Rank (of a free module)
- Torsion element
- Torsion module
- Torsion-free module
- Annihilator of an element
- Annihilator of a module
- Simple module
- Semisimple module
- Composition series (module)
- Length (Jordan–Hölder length)
- Noetherian module
- Artinian module
- Projective module
- Injective module
- Flat module
- Tensor product of modules
- Bilinear map
- Universal property of tensor product
- Hom module
- Dual module
- Tensor–Hom adjunction data
- Algebra over a commutative ring
- Algebra homomorphism
- Tensor product of algebras
- Graded ring
- Graded module
- Filtered ring
- Associated graded ring

**Axioms:**
- Module axioms
- Vector space axioms

**Theorems:**
- First isomorphism theorem (modules)
- Second isomorphism theorem (modules)
- Third isomorphism theorem (modules)
- Correspondence theorem (modules)
- Structure theorem for f.g. modules over PID
- Elementary divisor theorem
- Smith normal form theorem
- Rational canonical form theorem
- Jordan canonical form theorem
- Krull–Schmidt–Azumaya theorem

**Lemmas:**
- Splitting lemma
- Projective iff every s.e.s. ending in it splits
- Projective is direct summand of free
- Baer's criterion (injectivity)
- Tensor product preserves direct sums
- Tensor–Hom adjunction lemma
- Universal property of quotient modules
- Kernels are submodules

**Propositions:**
- Submodule criterion
- Kernel and image are submodules
- M/ker(f) ≅ im(f)
- Exactness via kernels and images
- Direct sum universal property
- Free module universal property
- Tensor product universal property
- Tensor commutes with direct limits/sums
- Hom turns sums into products
- Projective ⇒ flat
- f.g. projective are locally free
- Semisimple ⇔ every submodule is direct summand
- Artinian + Noetherian ⇒ finite length

**Corollaries:**
- f.g. torsion-free over PID is free
- Classification of f.g. abelian groups
- Rational canonical form from structure theorem
- Jordan canonical form from RCF
- Smith normal form invariants
- Chinese remainder for modules

---

### `algebra-fields-galois`
Field extensions and Galois theory.

*Depends on:* `algebra-rings`, `algebra-groups`

**Definitions:**
- Field extension
- Intermediate field
- Degree of a field extension
- Simple field extension
- Tower of fields
- Algebraic element
- Transcendental element
- Algebraic extension
- Transcendental extension
- Finitely generated field extension
- Splitting field
- Algebraic closure
- Normal extension
- Separable element
- Separable extension
- Inseparable extension
- Perfect field
- Galois extension
- Galois group
- Fixed field
- Field embedding
- Field automorphism
- Trace (field extension)
- Norm (field extension)
- Discriminant (field extension)
- Finite field
- Frobenius endomorphism
- Cyclotomic polynomial
- Primitive root of unity
- Cyclotomic extension

**Theorems:**
- Tower law (degree formula)
- Existence and uniqueness of splitting fields
- Existence of algebraic closures
- Primitive element theorem
- Fundamental theorem of symmetric polynomials
- Fundamental theorem of Galois theory
- Artin's theorem on fixed fields
- Existence and uniqueness of finite fields
- Cyclicity of multiplicative group of finite field
- Galois group of finite field is cyclic (Frobenius)

**Lemmas:**
- Dedekind's independence lemma
- Separable polynomial has distinct roots
- Separability preserved under towers
- Normality = being a splitting field

**Propositions:**
- Finite extension over perfect field is separable
- Finite fields are perfect
- Separable + normal ⇔ Galois
- Trace/norm in towers
- Splitting field degree bounds

**Corollaries:**
- Uniqueness of splitting fields up to K-isomorphism
- Uniqueness of algebraic closures
- Galois correspondence (subgroups ↔ intermediate fields)
- |Gal(L/K)| = [L:K] for Galois extensions
- Finite field Galois groups are cyclic
- Existence and uniqueness of 𝔽_{p^n}
- Multiplicative group of finite field is cyclic

---

### `algebra-commutative`
Commutative algebra: localization, Noetherian rings, primary decomposition.

*Depends on:* `algebra-rings`, `algebra-modules`

**Definitions:**
- Localization of a ring
- Multiplicative set
- Localization at a prime ideal
- Local ring
- Maximal ideal of a local ring
- Residue field
- Localization of a module
- Extension of scalars
- Restriction of scalars
- Prime spectrum (Spec R)
- Maximal spectrum (MaxSpec R)
- Zariski topology
- Krull dimension
- Height of a prime ideal
- Integral element (over a subring)
- Integral extension
- Integral closure
- Integrally closed domain
- Primary decomposition (ideal-theoretic)
- Noetherian ring (ACC on ideals)
- Artinian ring (DCC on ideals)
- Dedekind domain
- Discrete valuation ring (DVR)

**Theorems:**
- Correspondence of primes under localization
- Krull's principal ideal theorem
- Lasker–Noether primary decomposition theorem
- Going-up theorem
- Lying-over theorem
- Going-down theorem
- Nullstellensatz (ideal–variety correspondence)

**Lemmas:**
- Localization inverts precisely the multiplicative set
- Nakayama lemma
- Prime avoidance lemma
- Noether normalization lemma
- Jacobson radical = intersection of maximal ideals

**Propositions:**
- Localization is exact (flatness)
- Localization of Noetherian is Noetherian
- Localization preserves primality/maximality
- Jacobson radical annihilates simple modules
- Simple Artinian = matrix ring over division ring
- Semisimple Artinian = product of matrix rings

**Corollaries:**
- Every ideal in Noetherian ring has primary decomposition
- Hilbert basis theorem corollary (k[x₁,...,x_n] Noetherian)
- Nullstellensatz corollary (radical ideals ↔ affine algebraic sets)
- Localization corollary (localizations of Noetherian are Noetherian)
- Nakayama corollary (M f.g., IM = M, I ⊆ Jac(R) ⇒ M = 0)

---

### `algebra-homological`
Homological algebra: chain complexes, derived functors.

*Depends on:* `algebra-modules`, `algebra-category-theory`

**Definitions:**
- Chain complex
- Cochain complex
- Chain map
- Homotopy of chain maps
- Exact complex
- Homology module
- Cohomology module
- Projective resolution
- Injective resolution
- Derived functor
- Ext^n
- Tor_n
- Long exact sequence (of derived functors)

**Theorems:**
- Tensor product is right exact
- Hom functor is left exact
- Long exact sequence of Tor
- Long exact sequence of Ext

**Lemmas:**
- Snake lemma
- Five lemma
- Four lemma
- Nine lemma (3×3 lemma)
- Horseshoe lemma
- Connecting homomorphism yields long exact sequence
- Ext and Tor are derived functors of Hom and ⊗

**Propositions:**
- Exactness of Hom and ⊗ in short exact sequences
- Projective resolutions exist
- Injective resolutions exist

**Corollaries:**
- Snake lemma corollary (long exact sequence from s.e.s. of chain complexes)
- Five lemma corollary (isomorphism criterion)
- Ext^1 classifies extensions

---

### `algebra-representation-theory`
Representation theory of finite groups.

*Depends on:* `algebra-groups`, `algebra-modules`, `shared-linear-algebra`

**Definitions:**
- (Linear) representation of a group
- Subrepresentation
- Irreducible representation
- Completely reducible representation
- Group algebra
- Character of a representation
- Irreducible character
- Induced representation
- Restricted representation
- Regular representation

**Theorems:**
- Maschke's theorem
- Character orthogonality relations

**Lemmas:**
- Schur's lemma

**Propositions:**
- Character of direct sum = sum of characters
- Character of tensor product = product of characters
- Number of irreducibles = number of conjugacy classes
- Sum of squares of degrees = |G|

**Corollaries:**
- Maschke corollary (group algebra semisimple when char ∤ |G|)
- Complete reducibility over ℂ
- Schur corollary (End of irreducible over ℂ is ℂ)
- Orthogonality corollary (irreducible characters are orthonormal basis)

---

### `algebra-category-theory`
Category theory foundations.

*Depends on:* `shared-foundations`

**Definitions:**
- Category
- Object (of a category)
- Morphism (arrow)
- Composition (in a category)
- Identity morphism
- Isomorphism (in a category)
- Monomorphism
- Epimorphism
- Endomorphism (categorical)
- Automorphism (categorical)
- Subcategory
- Full subcategory
- Opposite category
- Functor (covariant)
- Contravariant functor
- Natural transformation
- Natural isomorphism
- Equivalence of categories
- Product (categorical)
- Coproduct
- Equalizer
- Coequalizer
- Pullback (fiber product)
- Pushout
- Limit
- Colimit
- Representable functor
- Yoneda embedding
- Adjoint functors
- Unit of an adjunction
- Counit of an adjunction
- Additive category
- Kernel (categorical)
- Cokernel (categorical)
- Exact sequence (in an additive/abelian category)
- Abelian category
- Left exact functor
- Right exact functor
- Exact functor

**Axioms:**
- Category axioms
- Axioms of an abelian category

**Lemmas:**
- Yoneda lemma

---

## Module Dependency Graph

```
shared-foundations
    │
    ├── shared-linear-algebra
    │       │
    │       ├── analysis-multivariable
    │       ├── algebra-modules
    │       └── algebra-representation-theory
    │
    ├── analysis-order-completeness
    │       │
    │       └── analysis-metric-topology
    │               │
    │               ├── analysis-sequences-series
    │               │       │
    │               │       └── analysis-continuity
    │               │               │
    │               │               └── analysis-compactness-connectedness
    │               │                       │
    │               │                       ├── analysis-differentiation-1d
    │               │                       │       │
    │               │                       │       └── analysis-riemann-integration
    │               │                       │               │
    │               │                       │               └── analysis-function-sequences
    │               │                       │
    │               │                       └── analysis-multivariable
    │               │
    │               └── (topology courses would branch here)
    │
    ├── algebra-groups
    │       │
    │       ├── algebra-fields-galois
    │       └── algebra-representation-theory
    │
    ├── algebra-rings
    │       │
    │       ├── algebra-modules
    │       │       │
    │       │       ├── algebra-commutative
    │       │       ├── algebra-homological
    │       │       └── algebra-representation-theory
    │       │
    │       └── algebra-fields-galois
    │
    └── algebra-category-theory
            │
            └── algebra-homological
```

---

## Usage

To generate knowls for a specific course:

**Baby Rudin Analysis:**
```
shared-foundations + shared-linear-algebra +
analysis-order-completeness + analysis-metric-topology +
analysis-sequences-series + analysis-continuity +
analysis-compactness-connectedness + analysis-differentiation-1d +
analysis-riemann-integration + analysis-function-sequences +
analysis-multivariable
```

**Undergraduate Group Theory (300-level):**
```
shared-foundations + algebra-groups (core only, exclude Schur–Zassenhaus, Burnside p^a q^b, etc.)
```

**Graduate Algebra I (Groups + Rings):**
```
shared-foundations + algebra-groups + algebra-rings
```

**Graduate Algebra II (Modules + Fields):**
```
shared-foundations + shared-linear-algebra + algebra-groups +
algebra-rings + algebra-modules + algebra-fields-galois
```

**Commutative Algebra:**
```
shared-foundations + algebra-rings + algebra-modules + algebra-commutative
```

**Homological Algebra:**
```
shared-foundations + algebra-category-theory + algebra-rings +
algebra-modules + algebra-homological
```
