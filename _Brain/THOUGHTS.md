<!-- Document Instructions, DO NOT ERASE -->
# THOUGHTS (Product Requirements Document): [Scrollodex]

This document records project essence and boundaries.

## Product Overview

**Product Vision:** 
[a digital Rolodex for Brooklyn makers to discover creative studios where they can work without login barriers or scattered information. a centralized database for makers]

**Target Users:** 
[artist or crafts people who need to find studios in their area to work out of or get a membership for specific shops. also hobbyists who want to deepen their practice in a near by studio.]

**Business Objectives:** 
[no direct business model. provide a public goods resource with very little upkleep and maintenance.]

**Success Metrics:** 
[artist can quickly connect with studios near them that have the shops they are looking for and reach out for a membership.]

## User Personas

### Persona 1: [Audrey]
- **Goals:** [wants to find a local studio with a ceramic shop to spin clay and fire it.]
- **Pain Points:** [hard to search online and verify shops exist and sift through their website for prices]
- **User Journey:** [She goes to the site, filters by studios with a ceramic shop and then filters by the neighborhood she lives in or nearby ones]

### Persona 2: [Theodora]
- **Goals:** [wants to blow glass, but current studio space doesn't have the tools, wants to find another one best suited for that work.]
- **Pain Points:** [cannot search online for specific local shop in an easy way]
- **User Journey:** [enters the site, filters by glass shop, can see all her options nearby]

## Feature Requirements

| Feature | Description | User Stories | Priority | Acceptance Criteria | Dependencies |
|---------|-------------|-------------|----------|---------------------|--------------|
| **[filter by shop]** | [only show cards of studios with specific shops] | [As a user, I want to see studios with specific shops near me] | [Must] | [show cards of studios with selected shops. display selected shop first in the studio card] | [shop is selected] |
| **[filter by neighborhood]** | [show cards of studios located in a specific neighborhood] | [As a user, I want to see the studios in my neighborhood] | [Must] | [show cards of studios in selected neighborhood] | [neighborhood is selected] |
| **[filter by shop and neighborhood]** | [only show cards of studios that fit both shop fitlering and neighborhood filtering] | [As a user, I want to find a specific shop in a specific neighborhood] | [Must] | [show cards of studios with selected shops and in selected neighborhood] | [both shop and studio filters are selected] |

## User Flows

### Flow 1: [Name, e.g., User Registration]
1. [Step 1]
2. [Step 2]
3. [Step 3]
   - [Alternative path]
   - [Error state]

### Flow 2: [Name]
1. [Step 1]
2. [Step 2]
3. [Step 3]
   - [Alternative path]
   - [Error state]

## Non-Functional Requirements

### Performance
- **Load Time:** [<=800ms on broadband]
- **Concurrent Users:** [30]
- **Response Time:** [fast]

### Compatibility
- **Devices:** [desktop, mobile in V2]
- **Browsers:** [all]
- **Screen Sizes:** [all]

## Technical Specifications

### Frontend
- **Technology Stack:** [vanilla js (no frameworks, no dependancies)]
- **Design System:** [vibe coding using Void Editor on mac, with venice api.]
- **Responsive Design:** []

### Backend
- **Technology Stack:** [HTML]
- **API Requirements:** []
- **Database:** [json only database]

### Infrastructure
- **Hosting:** [Github Pages]

## Analytics & Monitoring

- **Key Metrics:** [Metrics to track]
- **Events:** [User events to capture]
- **Dashboards:** [Required dashboards]
- **Alerting:** [Alert thresholds]

## Appendix

### Glossary
- **studio:** [A physical location with tools and equipment to make a range of physical objects]
- **shop:** [A specific area in a studio with specialized tools and equipment to make specific physical objects]
- **brooklyn:** [the best city this side of the milkyway]
<!-- Document Instructions, DO NOT ERASE -->