#!/usr/bin/env python3
import re

# Read decomposition.md
with open("/Users/ryanpersson/anki/code/blog/docs/knowl-modules/decomposition.md", 'r') as f:
    content = f.read()

# Find the algebra-rings section and add checkmarks to all items
# Pattern: "- Name → `slug.md`" becomes "- ✓ Name → `slug.md`"
# Only modify lines in the algebra-rings section

# Find start and end of algebra-rings section
start_match = re.search(r'^### `algebra-rings`', content, re.MULTILINE)
end_match = re.search(r'^### `algebra-modules`', content, re.MULTILINE)

if start_match and end_match:
    before = content[:start_match.start()]
    section = content[start_match.start():end_match.start()]
    after = content[end_match.start():]
    
    # Add checkmarks to all "- " lines that don't already have them
    # Pattern: lines starting with "- " followed by text (not starting with ✓)
    modified_section = re.sub(
        r'^- (?!✓)(.+? → `[a-z0-9-]+\.md`)$',
        r'- ✓ \1',
        section,
        flags=re.MULTILINE
    )
    
    # Count changes
    original_count = len(re.findall(r'^- [^✓]', section, re.MULTILINE))
    new_count = len(re.findall(r'^- ✓', modified_section, re.MULTILINE))
    print(f"Added checkmarks to {new_count} items in algebra-rings section")
    
    # Write back
    with open("/Users/ryanpersson/anki/code/blog/docs/knowl-modules/decomposition.md", 'w') as f:
        f.write(before + modified_section + after)
    
    print("Updated decomposition.md")
else:
    print("Could not find algebra-rings section boundaries")
