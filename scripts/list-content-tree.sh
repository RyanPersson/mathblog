#!/bin/bash
# List all files under content/ in a tree structure
# Output: tmp/content-tree.txt

OUTPUT="tmp/content-tree.txt"
mkdir -p tmp

echo "Content directory structure ($(date))" > "$OUTPUT"
echo "========================================" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# Summary by section
echo "## Summary by Section" >> "$OUTPUT"
echo "" >> "$OUTPUT"
for dir in content/*/; do
    if [ -d "$dir" ]; then
        section=$(basename "$dir")
        count=$(find "$dir" -name "*.md" ! -name "_index.md" | wc -l | tr -d ' ')
        echo "$section: $count knowls" >> "$OUTPUT"
    fi
done

echo "" >> "$OUTPUT"
echo "Total: $(find content -name "*.md" ! -name "_index.md" | wc -l | tr -d ' ') knowls" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# Full tree
echo "## Full Tree" >> "$OUTPUT"
echo "" >> "$OUTPUT"
tree content -I '__pycache__|*.pyc' --noreport >> "$OUTPUT" 2>/dev/null || \
    find content -type f -name "*.md" | sort >> "$OUTPUT"

echo "Written to $OUTPUT"
echo ""
head -30 "$OUTPUT"
echo "..."
echo "($(wc -l < "$OUTPUT" | tr -d ' ') total lines)"
