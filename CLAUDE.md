# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rooster is a Cloudflare Worker application that transforms KU Leuven schedule data into clean, readable calendar events. The application fetches ICS calendar data from TimeEdit, enriches it with course information (subject names, teachers), and returns properly formatted ICS files that can be imported into calendar applications.

## Common Development Commands

- **Development**: `npm run dev` or `wrangler dev` - Start local development server
- **Deployment**: `npm run deploy` or `wrangler deploy` - Deploy to Cloudflare Workers
- **Type Generation**: `npm run cf-typegen` or `wrangler types` - Generate Cloudflare Worker types

## Architecture

### Core Components

1. **Main Handler** (`src/index.ts`):
   - Cloudflare Worker request handler with routes for `/`, `/calendar`, and `/inappbrowser`
   - Processes TimeEdit URLs and transforms ICS calendar data
   - Applies extensive special lecture keyword transformations (weblecture, workshop, guest lecture, etc.)

2. **Programme Data** (`src/programmes/`):
   - Contains course data for different academic programmes (currently `bba.ts`)
   - Maps ECTS codes to subject names and teacher information
   - Structured as arrays of objects with `ectsCode`, `subjectName`, and `teachers` (string array) fields

3. **UI Components**:
   - `src/webpage.ts`: Main landing page with instructions and clipboard integration
   - `src/inappbrowser.ts`: Special page for in-app browsers (Instagram, etc.) that redirects to proper browser

### Data Flow

1. User provides TimeEdit calendar URL via clipboard
2. Application validates URL (must be from `cloud.timeedit.net/be_kuleuven/`)
3. Fetches original ICS data from TimeEdit
4. Parses ICS data using `ical.js` library
5. Enriches events by:
   - Extracting ECTS codes from event summaries
   - Looking up course information in programme data
   - Replacing generic summaries with proper subject names
   - Adding teacher information to descriptions as simple comma-separated list
   - Handling special lecture keywords
6. Returns transformed ICS data

### Special Features

- **Expanded Special Lecture Keywords**: Automatically detects and transforms many keywords including:
  - `weblecture` → `Online Lecture`
  - `workshop` → `Workshop`
  - `guest lecture` → `Guest Lecture`
  - `practical lecture` → `Practice`
  - `tutorial`/`werkcollege` → `Tutorial`
  - `hoorcollege` → `Lecture`
  - And many more (see `specialLectureKeywords` object in `src/index.ts`)

- **In-app Browser Detection**: Detects Instagram and other in-app browsers and provides instructions to open in proper browsers

- **Teacher Information**: Enriches calendar events with teacher names as a simple comma-separated list when programme data is available

### GitHub Integration

- **Code Review Workflow**: Automated code review using Claude for pull requests
- **Issue Templates**: Template for requesting programme additions at `.github/ISSUE_TEMPLATE/request-programme-addition.md`

## Testing

The project uses Vitest with Cloudflare Workers integration:
- Test files should use `.test.ts` extension
- Use `@cloudflare/vitest-pool-workers` for Worker-specific testing

## Adding New Programmes

To add support for a new academic programme:

1. Use Playwright MCP to navigate to the KU Leuven Onderwijsaanbod programme page
2. Execute the JavaScript extraction script from the README (found in the manual method section) to extract course data
3. Create a new file in `src/programmes/` (e.g., `economics.ts`)
4. Structure the data as an array of objects with the required fields:
   ```typescript
   const subjects = [
     {
       ectsCode: 'ABC123',
       subjectName: 'Course Name',
       teachers: ['Teacher Name 1', 'Teacher Name 2']
     }
   ];
   ```
5. Import and integrate the new programme data in `src/index.ts`

The JavaScript extraction script handles the current KU Leuven webpage structure and extracts teacher names as simple strings rather than objects with profile URLs.