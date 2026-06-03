import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const STATES = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware',
  'florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky',
  'louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi',
  'missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico',
  'new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania',
  'rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont',
  'virginia','washington','west-virginia','wisconsin','wyoming'
];

const CONVERSION_SLUGS = [
  'cm-to-inches','kg-to-lbs','celsius-to-fahrenheit','miles-to-km','lbs-to-kg',
  'feet-to-meters','fahrenheit-to-celsius','oz-to-ml','liters-to-gallons','km-to-miles',
  'inches-to-cm','ml-to-oz','grams-to-ounces','meters-to-feet','mph-to-kph'
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const base = 'https://megalancer.online';

  const staticPages = [
    '/', '/about/', '/contact/', '/privacy/', '/terms/', '/disclaimer/',
    '/finance/', '/finance/credit-score-simulator/',
    '/finance/loan-comparison/', '/finance/tax-deduction-finder/',
    '/finance/compound-interest/', '/finance/mortgage-calculator/',
    '/finance/inflation-calculator/', '/finance/paycheck-calculator/',
    '/finance/investment-return/', '/finance/debt-payoff/',
    '/finance/retirement-calculator/', '/finance/net-worth-calculator/',
    '/finance/social-security-estimator/', '/finance/budget-planner/',
    '/finance/vat-calculator/', '/finance/currency-converter/',
    '/math/', '/math/percentage-calculator/', '/math/tip-calculator/',
    '/math/gpa-calculator/', '/math/age-calculator/', '/math/unit-converter/',
    '/math/discount-calculator/', '/math/date-calculator/', '/math/grade-calculator/',
    '/math/square-footage/', '/math/percentage-change/', '/math/scientific-calculator/',
    '/math/time-zone-converter/',
    '/health/', '/health/bmi-calculator/', '/health/tdee-calculator/',
    '/health/calories-burned/', '/health/due-date-calculator/',
    '/health/sleep-calculator/', '/health/water-intake/',
    '/construction/', '/construction/concrete-calculator/',
    '/legal/', '/legal/contract-generator/', '/legal/contract-summarizer/',
    '/legal/nda-generator/', '/saas/', '/saas/pricing-calculator/',
    '/saas/mrr-calculator/', '/saas/roi-calculator/', '/marketing/',
    '/marketing/ad-profit-calculator/', '/marketing/hook-analyzer/',
    '/freelancer/', '/freelancer/rate-calculator/', '/freelancer/invoice-generator/',
    '/freelancer/proposal-generator/', '/freelancer/salary-to-hourly/',
    '/freelancer/project-estimator/', '/freelancer/late-fee-calculator/',
    '/finance/excel-tools/', '/finance/excel-tools/chart-builder/',
    '/finance/excel-tools/amortization-table/', '/finance/excel-tools/budget-variance/',
    '/finance/excel-tools/cash-flow-waterfall/', '/finance/excel-tools/pivot-summarizer/',
    '/finance/excel-tools/break-even/', '/finance/excel-tools/financial-ratios/',
    '/finance/excel-tools/growth-modeler/',
    '/blog/', '/search/',
  ];

  const statePages = STATES.map(s => `/finance/paycheck-calculator/${s}/`);
  const conversionPages = CONVERSION_SLUGS.map(c => `/math/convert/${c}/`);
  const blogUrls = posts.map(p => `/blog/${p.id}/`);
  const allUrls = [...staticPages, ...blogUrls, ...statePages, ...conversionPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url><loc>${base}${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
