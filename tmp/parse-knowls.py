#!/usr/bin/env python3
import re
import os
import sys

def parse_output(content):
    """Parse oracle output and extract knowl files."""
    knowls = []
    
    # Pattern to match **`filename.md`** followed by markdown block
    # Handles both immediate backticks and newline before backticks
    pattern = r'\*\*`([a-z0-9-]+\.md)`\*\*\s*\n+```markdown\n(---\n.*?)\n```'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    for filename, body in matches:
        knowls.append((filename, body))
    
    return knowls

def main():
    output_dir = sys.argv[1] if len(sys.argv) > 1 else "/Users/ryanpersson/anki/code/blog/content/algebra-rings"
    
    # Read all 4 output logs
    session_dirs = [
        "/Users/ryanpersson/.oracle/sessions/step-3-create-and-link/output.log",
        "/Users/ryanpersson/.oracle/sessions/step-3-create-and-link-2/output.log",
        "/Users/ryanpersson/.oracle/sessions/step-3-create-and-link-3/output.log",
        "/Users/ryanpersson/.oracle/sessions/step-3-create-and-link-4/output.log"
    ]
    
    all_knowls = []
    
    for path in session_dirs:
        with open(path, 'r') as f:
            content = f.read()
        knowls = parse_output(content)
        print(f"Parsed {len(knowls)} knowls from {os.path.basename(path)}")
        all_knowls.extend(knowls)
    
    print(f"\nTotal knowls parsed: {len(all_knowls)}")
    
    # Write each knowl file
    created = 0
    for filename, body in all_knowls:
        filepath = os.path.join(output_dir, filename)
        with open(filepath, 'w') as f:
            f.write(body)
        created += 1
    
    print(f"Created {created} knowl files in {output_dir}")
    
    # List created files
    print("\nCreated files:")
    for filename, _ in all_knowls:
        print(f"  {filename}")

if __name__ == "__main__":
    main()
