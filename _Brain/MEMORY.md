<!-- Document Instructions, DO NOT ERASE -->
# MEMORY
This document records critical failure patterns and verification protocols, and tool workflows. All values must be machine-readable with zero historical data narrative prose or subjective commentary.

The format follows strict documentation standards for development continuity and error prevention.

# TOOL PROTOCOL (READ BEFORE ANY FILE MODIFICATION)
- [read_file] Reads file contents
- [ls_dir] Lists directory contents
- [get_dir_tree] Returns directory tree
- [search_pathnames_only] Searches file names
- [search_for_files] Searches file contents
- [edit_file] Applies **search and replace** blocks to a file - use for specific changes, not for general editing. MUST use read command before using this command
- [rewrite_file] **Modifies** file contents - use for general editing
- [run_command] Runs a terminal command (temporary)
- [open_persistent_terminal] Opens a persistent terminal
- [run_persistent_command] Runs a command in a persistent terminal
- [kill_persistent_terminal] Kills a persistent terminal

# STEP-BY-STEP WORKFLOW
1. READ AND INTERNALIZE:
   - [THOUGHTS.md] - Project essence and boundaries
   - [MEMORY.md] - Failure patterns and protocols
   - [CHANGELOG.md] - Recent changes and fixes
   (Complete documentation review BEFORE any action)

2. PREPARE DEVELOPMENT ENVIRONMENT:
   - Start local server, use persistent terminal: python3 -m http.server 8002
   - Verify JSON structure: jq '.[0]' data/studios.json
   - Check UI references: grep -r 'studio\\.' .

3. FILE MODIFICATION PROTOCOL:
   FOR SIMPLE LINE EDITS (<10 CHARACTERS):
   - use [read_file] to capture current state of code
   - Use [edit_file] with precise diff block
   - VERIFY change with [read_file]
   - IF FAILED, switch to [rewrite_file] immediately
   
   FOR ALL OTHER CHANGES:
   - Use [rewrite_file] with complete file contents
   - DO NOT attempt multiple [edit_file] operations

4. POST-MODIFICATION:
   - Document change in [CHANGELOG.md] with specific line references
   - Confirm no edit_file usage: grep -q 'edit_file' last_action.log && echo "VIOLATION"
<!-- Document Instructions, DO NOT ERASE -->

## failure_patterns
- Data structure change without template update: When JSON field changes (location → neighborhood+city), must update all dependent files simultaneously
- Verification: for field in neighborhood city; do grep -r "studio\.$field" . || echo "MISSING REFERENCE"; done
- Fix pattern: sed -i '' 's/studio\.location/studio\.neighborhood, studio\.city/g' index.html
- Prevention: grep -q 'edit_file' last_action.log && echo "VIOLATION" && exit 1
- Shop type corruption: Adding art disciplines instead of physical shop types (Painting vs wood)
- Verification: grep -o '"shops": \[[^]]\]' data/studios.json | tr ',' '\n' | sed 's/. //;s/"//g' | sort -u
- Valid types: wood metal glass ceramic textile machine leather laser "3d print" sculpt print digital paint
- Padding symmetry failure: Asymmetric padding with max-content width causes overflow
- Correct pattern: padding: 20px 20px (symmetrical) not 20px 10px
- Verification: Test with shortest (DUMBO) and longest (Williamsburg) neighborhood names
- Over-engineering simple changes: Adding debugging layers when only line edit needed
- Correct protocol: When line number specified, change ONLY that line
- Verification: diff against previous version before committing
- Class name inconsistency between CSS/JS: Mismatched class names cause layout/functionality failures
- Verification: grep -r "extra-shops-popup" ./css ./js
- Fix pattern: Standardize class names across files before implementation
- Prevention: Always run verification command before finalizing changes
- Edit tool protocol violation: Multiple edit_file attempts instead of switching to rewrite_file after first failure
- Verification: Check for consecutive edit_file operations in logs
- Fix pattern: Immediately use rewrite_file after first edit_file failure
- Prevention: Implement pre-commit check: grep -q 'edit_file' last_action.log && echo "VIOLATION" && exit 1
- Overflow count miscalculation: Incorrect visible/overflow split for 8+ shops
- Verification: Check shop count thresholds in js/main.js (lines 94-95)
- Fix pattern: visibleCount = count <= 8 ? count : 7
- Prevention: Add test cases for 7/8/9 shop counts before PR

- Persistent UI elements without structural container: When conditional content causes layout shifts
- Verification: Check for conditional rendering directly in HTML without container
- Fix pattern: Create structural container in HTML with persistent styling
- Prevention: Always use container for elements needing consistent layout

## prompting_lessons
- When requesting line-specific changes: Original prompt: "Change line 69 in index.html"
- Failure: Added cache-busting, debug layers, file rewrites
- Correct prompt: "REPLACE line 69: - <div>📍{studio.neighborhood}, ${studio.city}</div>"
- When changing data structure: Original prompt: "Update location to neighborhood"
- Failure: Only updated JS, missed HTML templates
- Correct prompt: "UPDATE ALL FILES: Change location → neighborhood+city in data/studios.json index.html script.js"
- When fixing visual issues: Original prompt: "Shrink font size for long names"
- Failure: Modified layout instead of font size
- Correct prompt: "ADJUST ONLY font-size in .text-container[data-long]: calc(1.65rem - 0.2rem)"

## verification_commands
- Data structure sync: for field in neighborhood city; do grep -r "studio\.$field" .; done
- Shop type validation: jq '.[].shops' data/studios.json | sort -u
- Longest name test: jq '.[].name' data/studios.json | awk '{print length}' | sort -nr | head -1

## critical_protocols
- UPDATE ALL files simultaneously when data structure changes
- CHECK HTML templates FIRST when data shows "undefined"
- ADJUST ONLY specified elements in visual changes
- VERIFY with terminal commands before testing in browser
- RUN development server exclusively on localhost:8002