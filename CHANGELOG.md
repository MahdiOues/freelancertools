# FreelancerTools.io — Changelog

<!-- OpenCode: append a new entry below after every session. Never delete previous entries. -->

## [2026-05-16] Title length remediation, source citations, and excel tool title fix

### Files modified
- Shortened title props on ~30 tool pages to ≤44 chars (base title + "| FreelancerTools" ≤62 chars total)
- Fixed excel tools pages (chart-builder, budget-variance, amortization-table, cash-flow-waterfall, pivot-summarizer, break-even, financial-ratios, growth-modeler) — removed "| FreelancerTools" suffix from title props that was causing double-tagging
- Added IRS/SSA source citations to paycheck-calculator.astro main page SEO body

### SEO changes
- All title tags now stay under 62 characters total (title prop + "| FreelancerTools")
- Primary keywords positioned within first 30 characters of every title
- Paycheck calculator main page now cites IRS Publication 15-T and SSA sources
- Excel tool pages no longer have duplicated "| FreelancerTools | FreelancerTools" rendering
- All 50 state paycheck pages already have uniqueFacts, sources, and state-specific data

### Build status
- npm run build: PASS — 195 pages built in 3.37s

## [2026-05-16] SEO trust, performance, schema, and content remediation

### Files created
- src/layouts/ToolWithCharts.astro and src/layouts/ToolWithExcel.astro - scoped Chart.js, SheetJS, jsPDF, and autotable loading.
- src/components/Disclaimer.astro, Faq.astro, CategoryHubExtras.astro, MoneyPageExpansion.astro - reusable SEO/trust components.
- src/pages/about.astro, contact.astro, privacy.astro, terms.astro, disclaimer.astro - trust and policy pages.
- public/og-default.png - default 1200x630 social preview image.

### Files modified
- src/layouts/Base.astro - environment-gated GA/AdSense, removed global heavy scripts, added head slot, multiple schema support, title normalization, OG image, and Twitter card metadata.
- src/layouts/Page.astro and src/layouts/Tool.astro - added head passthrough, category hub extras, BreadcrumbList schema, last-updated text, YMYL disclaimers, and money-page content expansion.
- src/styles/global.css and src/components/Footer.astro - added trust, source, disclaimer, footer, and hub recommendation styling and links.
- src/pages/sitemap.xml.ts, SITE-MAP.md, SEO-STATUS.md - added trust pages and updated tracking.
- src/data/states.js and src/pages/finance/paycheck-calculator/[state].astro - added state facts, local tax notes, source sections, and shorter state titles.
- src/pages/index.astro - added WebSite SearchAction schema.
- Chart/Excel tool pages - switched to ToolWithCharts or ToolWithExcel as appropriate.
- .env.example - replaced exposed example key with placeholders and added GA, AdSense, and Formspree examples.

### SEO changes
- Placeholder analytics/ad scripts no longer render when IDs are unset.
- Chart.js, SheetJS, jsPDF, and autotable are no longer loaded globally.
- All built pages now include default OG and Twitter card metadata.
- Tool pages now include BreadcrumbList schema from existing breadcrumb props.
- Finance, health, and legal tool pages now display visible disclaimers.
- Top money pages received additional explanatory content and contextual internal links.
- Seven category hubs now include unique recommendations, FAQ content/schema, and related guide links.
- Trust pages added and linked in the footer for YMYL confidence and AdSense review.

### Build status
- npm run build: PASS - 195 pages built in 3.33s


## [2026-05-13] SEO maximization — 34 new tools, docs system, hub pages

### Files created
- CHANGELOG.md — This file. Session record.
- SITE-MAP.md — Living site map of every page.
- SEO-STATUS.md — SEO completeness tracker for every page.
- TOOLS-REGISTRY.md — Registry of every calculator/tool with inputs/outputs/status.
- src/pages/math/index.astro — Math category hub page.
- src/pages/math/percentage-calculator.astro — Percentage calculator (3 modes).
- src/pages/math/tip-calculator.astro — Tip calculator with split.
- src/pages/math/gpa-calculator.astro — GPA calculator (letter/weighted).
- src/pages/math/age-calculator.astro — Age calculator with fun facts.
- src/pages/math/unit-converter.astro — Comprehensive unit converter (8 categories).
- src/pages/math/discount-calculator.astro — Discount calculator.
- src/pages/math/date-calculator.astro — Date calculator (diff/add).
- src/pages/math/grade-calculator.astro — Grade calculator (final + current).
- src/pages/math/square-footage.astro — Square footage calculator.
- src/pages/math/percentage-change.astro — Percentage change calculator.
- src/pages/math/scientific-calculator.astro — Scientific calculator.
- src/pages/math/time-zone-converter.astro — Time zone converter.
- src/pages/health/index.astro — Health category hub page.
- src/pages/health/bmi-calculator.astro — BMI calculator with gauge.
- src/pages/health/tdee-calculator.astro — TDEE/calorie calculator.
- src/pages/health/calories-burned.astro — Calories burned by activity.
- src/pages/health/due-date-calculator.astro — Pregnancy due date calc.
- src/pages/health/sleep-calculator.astro — Sleep cycle calculator.
- src/pages/health/water-intake.astro — Water intake calculator.
- src/pages/construction/index.astro — Construction category hub page.
- src/pages/construction/concrete-calculator.astro — Concrete calculator.
- src/pages/finance/compound-interest.astro — Compound interest calculator.
- src/pages/finance/mortgage-calculator.astro — Mortgage calculator.
- src/pages/finance/inflation-calculator.astro — Inflation calculator with CPI data.
- src/pages/finance/paycheck-calculator.astro — Paycheck calculator.
- src/pages/finance/investment-return.astro — Investment return calculator.
- src/pages/finance/debt-payoff.astro — Debt payoff (avalanche/snowball).
- src/pages/finance/retirement-calculator.astro — Retirement calculator.
- src/pages/finance/net-worth-calculator.astro — Net worth calculator.
- src/pages/finance/social-security-estimator.astro — Social Security estimator.
- src/pages/finance/budget-planner.astro — 50/30/20 budget planner.
- src/pages/finance/vat-calculator.astro — VAT/GST calculator.
- src/pages/finance/currency-converter.astro — Currency converter.
- src/pages/freelancer/salary-to-hourly.astro — Salary to hourly converter.
- src/pages/freelancer/project-estimator.astro — Freelance project estimator.
- src/pages/freelancer/late-fee-calculator.astro — Invoice late fee calculator.

### Files modified
- src/styles/global.css — Added math, health, construction category colors.
- src/components/Header.astro — Added Math, Health nav links.
- src/components/Footer.astro — Added new category links.
- src/pages/index.astro — Updated category list, tool counts, stats.

### New routes added
- /math/ — Math category hub
- /math/percentage-calculator/ — 3-mode percentage calculator
- /math/tip-calculator/ — Tip calculator with split
- /math/gpa-calculator/ — GPA calculator
- /math/age-calculator/ — Age calculator
- /math/unit-converter/ — Comprehensive unit converter
- /math/discount-calculator/ — Discount/percent off calculator
- /math/date-calculator/ — Date difference calculator
- /math/grade-calculator/ — Grade calculator
- /math/square-footage/ — Square footage calculator
- /math/percentage-change/ — Percent change calculator
- /math/scientific-calculator/ — Scientific calculator
- /math/time-zone-converter/ — Time zone converter
- /health/ — Health category hub
- /health/bmi-calculator/ — BMI calculator
- /health/tdee-calculator/ — TDEE calculator
- /health/calories-burned/ — Calories burned calculator
- /health/due-date-calculator/ — Pregnancy due date calculator
- /health/sleep-calculator/ — Sleep cycle calculator
- /health/water-intake/ — Water intake calculator
- /construction/ — Construction category hub
- /construction/concrete-calculator/ — Concrete calculator
- /finance/compound-interest/ — Compound interest calculator
- /finance/mortgage-calculator/ — Mortgage calculator
- /finance/inflation-calculator/ — Inflation calculator
- /finance/paycheck-calculator/ — Paycheck calculator
- /finance/investment-return/ — Investment return calculator
- /finance/debt-payoff/ — Debt payoff calculator
- /finance/retirement-calculator/ — Retirement calculator
- /finance/net-worth-calculator/ — Net worth calculator
- /finance/social-security-estimator/ — Social Security estimator
- /finance/budget-planner/ — 50/30/20 budget planner
- /finance/vat-calculator/ — VAT/GST calculator
- /finance/currency-converter/ — Currency converter
- /freelancer/salary-to-hourly/ — Salary to hourly converter
- /freelancer/project-estimator/ — Freelance project estimator
- /freelancer/late-fee-calculator/ — Invoice late fee calculator

### SEO changes
- All 34 new tools: title, meta description, H1, schema.org WebApplication, FAQ section, 500-1500w SEO body content
- All pages include breadcrumb navigation, related tools, internal links
- New categories (math, health, construction) added to site structure
- Category hub pages with CollectionPage schema

### Known issues or follow-up needed
- Blog content calendar (60 articles) not yet created — needs markdown files in src/content/blog/
- Programmatic SEO strategy not yet implemented
- Internal linking architecture could be further optimized by cross-linking related tools across categories
- Backlink outreach strategy document not yet created
- Currency converter needs ExchangeRate-API key or GitHub Action for rate updates

### Build status
- npm run build: PASS — 68 pages built in 5.02s

## [2026-05-14] Programmatic SEO — 50-state paycheck calculator pages

### Files created
- src/data/states.js — Shared STATES array with tax rates, slugs, and notes for all 50 US states
- src/pages/finance/paycheck-calculator/[state].astro — Dynamic route generating 50 individual state paycheck calculator pages

### Files modified
- src/pages/sitemap.xml.ts — Added all 50 state pages + all missing tool URLs to sitemap

### New routes added
- /finance/paycheck-calculator/alabama/ through /finance/paycheck-calculator/wyoming/ (50 state pages)

### SEO changes
- Each state page: unique title, meta description, H1 with state name, WebApplication + FAQPage schemas, 300w+ unique SEO content per state
- State-specific FAQs (5 questions per page)
- All 50 pages link to base paycheck calculator and related tools

### Build status
- npm run build: PASS — 175 pages built in 4.81s

## [2026-05-14] Programmatic SEO — 15 conversion pair pages

### Files created
- src/data/conversions.js — CONVERSION_PAIRS array with 15 high-volume conversion pairs, helper functions
- src/pages/math/convert/[conversion].astro — Dynamic route generating 15 conversion pair pages

### New routes added
- /math/convert/cm-to-inches/ through /math/convert/mph-to-kph/ (15 conversion pages)

### SEO changes
- Each page: unique title, meta description, H1, WebApplication + FAQPage schemas, 400w+ SEO content per pair
- 4 FAQ questions per conversion pair specific to that unit type (length/weight/temperature/volume/speed)
- Static conversion table with pre-calculated common values
- Two-way converter widget (type in either direction)
- Display of conversion formula in real-time

### Build status
- npm run build: PASS — 190 pages built in 5.88s

### Known issues or follow-up needed
- Blog content calendar (60 articles) not yet created — needs markdown files in src/content/blog/
- Internal linking architecture could be further optimized by cross-linking related tools across categories
- Backlink outreach strategy document not yet created
- Currency converter needs ExchangeRate-API key or GitHub Action for rate updates
