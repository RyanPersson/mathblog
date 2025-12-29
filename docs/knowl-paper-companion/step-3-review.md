# Step 3: Review Companion Knowls

## Your Task

Briefly review the knowls from Step 2 to ensure they serve their purpose: helping a reader efficiently "unknowl" concepts while reading the paper.

## Input

You will receive:
- **Knowls from Step 2**
- **Original paper** (for context)
- **Prerequisite analysis from Step 1**

## Review Criteria

### 1. Fitness for Purpose

Each knowl should answer: *"What was that again?"* in 10 seconds.

| Check | Pass | Fail |
|-------|------|------|
| Length | 5-15 lines | 30+ lines of dense text |
| Definition | Immediately clear | Requires re-reading |
| Relevance | Matches paper's usage | Generic textbook definition |

### 2. Correctness (Quick Check)

- Is the definition mathematically accurate?
- Are the key properties actually true?
- Is the example valid?

### 3. Coverage

- Are all High Priority items from Step 1 covered?
- Are Medium Priority items covered?
- Any critical gaps?

### 4. Cross-Link Validity

- Do all `{{</* knowl */>}}` links point to knowls in this set?
- Are links helpful or distracting?

## Output Format

```markdown
# Companion Knowl Review: [Paper Title]

## Summary
- Knowls reviewed: [N]
- Pass: [X]
- Needs revision: [Y]
- Coverage: [Complete / Missing: list]

## Issues Found

### [slug].md
**Issue:** [Description]
**Fix:** [Suggested correction]

---

## Revised Knowls

**`[slug].md`** *(revised)*
```markdown
[corrected content]
```

## Passed Knowls
- [slug].md
- [slug].md
...
```

## Common Issues to Watch For

### Too Long
**Problem:** Knowl reads like a textbook section.
**Fix:** Cut to essential definition + 2-3 key properties + 1 example.

### Wrong Emphasis
**Problem:** Knowl emphasizes aspects irrelevant to the paper.
**Fix:** Reframe key properties for paper's context.

### Missing Link
**Problem:** Knowl uses term that has its own knowl but doesn't link.
**Fix:** Add `{{</* knowl */>}}` shortcode.

### Circular Definition
**Problem:** Knowl A links to B, which requires A to understand.
**Fix:** Ensure base concepts stand alone.

## Final Checklist

Before approving the companion set:

- [ ] Reader can understand paper's main theorem statements with this set
- [ ] No knowl requires more than 30 seconds to read
- [ ] Cross-links form a coherent web, not a tangle
- [ ] Notation knowl covers paper's conventions
- [ ] No critical prerequisite missing

## Output

Provide:
1. List of knowls that pass
2. Revised versions of knowls that need fixes
3. Any recommended additions (if critical gaps found)

The final set is ready to accompany the paper.
