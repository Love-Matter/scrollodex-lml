<!-- Document Instructions, DO NOT ERASE -->
# Changelog

All notable changes to this project will be documented in this file. All values must be machine-readable with zero historical data narrative prose or subjective commentary. Log to begin after line 20 of changelog.md

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# Log Template
## [hash] timestamp
## [🚧]: breaking changes / [🧱]: added / [♻️]: changed / [🔧]: fixed

## Example Log Entry
### [l9m0n1o] 2025-08-25 22:16
- [🔧]: Fixed this issue in [line 23]
- [🧱]: Added this new feature in [document]
- [♻️]: Changed from this to this in [line 77]
- [🚧]: broke front end by doing this in [line 90]
<!-- Document Instructions, DO NOT ERASE -->

## [e7f8g9h] 2025-09-15 16:22
- [♻️]: Adjusted card height and added shop/description separators in css/style.css (lines 100-107, 120-127)
- [🔧]: Resolved line-clamp compatibility warning in css/style.css (lines 124-124)
- [♻️]: Implemented vertical shop icon centering for 1-4 shops in css/style.css (lines 142-149)

## [a3b4c5d] 2025-09-15 15:38
- [🔧]: Fixed filter dropdown positioning to align with pills in js/main.js (lines 45-52, 55-62)
- [♻️]: Increased neighborhood panel width to prevent text cutoff in css/style.css (lines 161-163)

## [x7y8z9a] 2025-09-12 17:55
- [🔧]: Filtered shop types to exclude unavailable types in js/main.js (lines 15-22)

## [z1a2b3c] 2025-09-08 22:24
- [🔧]: Removed link underline/color from .location a in css/style.css (lines 87-92)
- [♻️]: Restructured contact section into left/middle/right in js/main.js (lines 125-131)
- [♻️]: Consolidated contact styling under single .contact class in css/style.css (lines 65-78)

## [l9m0n1o] 2025-08-25 22:16
- [🔧]: Fixed .extra-shops-popup visibility in css/style.css (lines 157-177) by separating from .filter-panel
- [🔧]: Restored original filter-panel styling per PRD §UI requirements
- [🔧]: Fixed SHOP_EMOJI_MAP scope issue causing ReferenceError by moving declaration to global scope in main.js (lines 15-16, 132-145)

## [k8l9m0n] 2025-08-25 22:16
- [🔧]: Fixed .extra-shops-popup visibility in css/style.css (lines 157-177) by separating from .filter-panel
- [🔧]: Restored original filter-panel styling per PRD §UI requirements
- [🧱]: Added critical event delegation in js/main.js (lines 58-72) for hover persistence
- [🔧]: Fixed SHOP_EMOJI_MAP scope issue causing ReferenceError by moving declaration to global scope in main.js (lines 15-16, 132-145)
- [🔧]: Resolved class name inconsistency between CSS/JS for overflow popup in css/style.css (lines 172-226) and js/main.js (lines 111-117)
- [🔧]: Fixed 2-column grid layout conflict by consolidating duplicate .extra-shops-popup definitions in css/style.css
- [🔧]: Corrected vertical stacking of emoji/label via display: block in css/style.css (lines 220-225)
- [🔧]: Fixed popup display-on-load issue through proper event delegation in js/main.js (lines 58-72)
- [♻️]: Refined shop overflow logic to maintain 7+2 display pattern for 9+ shops in js/main.js (lines 94-95) per PRD §DISPLAY
- [🔧]: Fixed shop filtering logic to correctly match case-insensitive labels in js/main.js (lines 83-87)
- [🧱]: Implemented shop sorting: filtered shops first (alphabetical), then non-filtered (alphabetical) in js/main.js (lines 78-87) per PRD §SORTING
- [🧱]: Added .trim() to label comparisons to handle whitespace inconsistencies in js/main.js (lines 78-87, 212-215) per PRD §DATA_INTEGRITY
- [♻️]: Changed shop filter logic from OR to AND for multiple selections in js/main.js (lines 212-215) per PRD §FILTER_LOGIC

## [j1k2l3m] 2025-08-25 22:15
- [♻️]: Consolidated redundant read_file protocols in [_BRAIN/MEMORY.md]
- [🔧]: Restored critical step_by_step server command in [_BRAIN/MEMORY.md], line 52
- [♻️]: Implemented single-concept documentation structure across MEMORY.md sections

## [h8i9j1k] 2025-08-25 21:45
- [♻️]: Restructured control panels module into dual-column layout in [index.html], lines 65-88
- [♻️]: Converted rate display from ms to seconds with proper formatting in [index.html], lines 158-162
- [🔧]: Fixed CSS lint error for cross-browser range input compatibility in [css/style.css], lines 263-273

## [g7h8i9j] 2025-08-25 20:15
- [♻️]: Renamed 'active webs' module to 'control panels' in [index.html], lines 62-82
- [🧱]: Implemented rate limit slider with real-time feedback in [index.html], lines 76-85
- [🧱]: Added socket emission for rate limit configuration in [index.html], lines 155-164

## [f6a7b8c] 2025-08-25 19:30
- [🧱]: Toggle switches for scraper activation in [index.html], lines 65-75
- [🧱]: Pill delete functionality with trashcan icon in [index.html], lines 140-144
- [🧱]: Pill styling for target entries in [css/style.css], lines 150-160
- [🧱]: Enter key support for input fields in [index.html], lines 120-123

## [e5f6a7b] 2025-08-25 19:15
- [♻️]: Enforced CHANGELOG structure: CURRENT HASH strictly at line 8
- [♻️]: Verified all historical logs contain timestamps below line 11
- [♻️]: Removed obsolete status dot elements per user instruction

## [d4e5f6a] 2025-08-25 19:01
- [♻️]: Enforced CHANGELOG protocol: Each modification creates new version entry with unique hash
- [🧱]: Added timestamp requirement for all non-current entries per MEMORY.md protocol
- [♻️]: Verified CHANGELOG now follows strict machine-readable format

## [c3d4e5f] 2025-08-25 18:45
- [🧱]: Added CHANGELOG protocol enforcement in [_BRAIN/MEMORY.md], line 5
- [♻️]: Verified CHANGELOG entries now follow strict timestamped versioning

## [b2c3d4e] 2025-08-25 18:32
- [🔧]: Resolved nested flex container overflow with min-width:0 in [index.html], lines 41-48
- [🔧]: Constrained button padding to prevent module boundary overflow in [index.html], lines 44-47

## [a1b2c3d] 2025-08-25 17:21
- [♻️]: Documented column width fix protocol in [_BRAIN/MEMORY.md], line 18
- [🧱]: Added grid-container width verification command in [_BRAIN/MEMORY.md], line 36
- [🔧]: Fixed input group overflow with width:100% constraint in [index.html], line 38