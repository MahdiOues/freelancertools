const BASE_STATES = [
  { name: 'Alabama', slug: 'alabama', stateTaxRate: 0.05, notes: 'Alabama has a progressive income tax ranging from 2% to 5%.', hasNoIncomeTax: false },
  { name: 'Alaska', slug: 'alaska', stateTaxRate: 0, notes: 'Alaska has no state income tax — one of nine states that do not.', hasNoIncomeTax: true },
  { name: 'Arizona', slug: 'arizona', stateTaxRate: 0.025, notes: 'Arizona has a flat 2.5% state income tax as of 2023.', hasNoIncomeTax: false },
  { name: 'Arkansas', slug: 'arkansas', stateTaxRate: 0.039, notes: 'Arkansas has a top marginal income tax rate of 3.9%.', hasNoIncomeTax: false },
  { name: 'California', slug: 'california', stateTaxRate: 0.093, notes: 'California has the highest top marginal income tax rate in the US at 13.3%. The SDI rate is 0.9%.', hasNoIncomeTax: false },
  { name: 'Colorado', slug: 'colorado', stateTaxRate: 0.044, notes: 'Colorado has a flat 4.4% state income tax.', hasNoIncomeTax: false },
  { name: 'Connecticut', slug: 'connecticut', stateTaxRate: 0.0699, notes: 'Connecticut has a progressive income tax with rates from 3% to 6.99%.', hasNoIncomeTax: false },
  { name: 'Delaware', slug: 'delaware', stateTaxRate: 0.066, notes: 'Delaware has a top marginal income tax rate of 6.6%.', hasNoIncomeTax: false },
  { name: 'Florida', slug: 'florida', stateTaxRate: 0, notes: 'Florida has no state income tax.', hasNoIncomeTax: true },
  { name: 'Georgia', slug: 'georgia', stateTaxRate: 0.055, notes: 'Georgia has a flat 5.49% income tax rate as of 2024.', hasNoIncomeTax: false },
  { name: 'Hawaii', slug: 'hawaii', stateTaxRate: 0.11, notes: 'Hawaii has one of the highest top marginal income tax rates at 11%.', hasNoIncomeTax: false },
  { name: 'Idaho', slug: 'idaho', stateTaxRate: 0.058, notes: 'Idaho has a flat 5.8% income tax rate.', hasNoIncomeTax: false },
  { name: 'Illinois', slug: 'illinois', stateTaxRate: 0.0495, notes: 'Illinois has a flat 4.95% state income tax.', hasNoIncomeTax: false },
  { name: 'Indiana', slug: 'indiana', stateTaxRate: 0.0315, notes: 'Indiana has a flat 3.15% state income tax.', hasNoIncomeTax: false },
  { name: 'Iowa', slug: 'iowa', stateTaxRate: 0.06, notes: 'Iowa has a top marginal income tax rate of 6%.', hasNoIncomeTax: false },
  { name: 'Kansas', slug: 'kansas', stateTaxRate: 0.057, notes: 'Kansas has a top marginal income tax rate of 5.7%.', hasNoIncomeTax: false },
  { name: 'Kentucky', slug: 'kentucky', stateTaxRate: 0.04, notes: 'Kentucky has a flat 4% state income tax.', hasNoIncomeTax: false },
  { name: 'Louisiana', slug: 'louisiana', stateTaxRate: 0.03, notes: 'Louisiana has a top marginal income tax rate of 3%.', hasNoIncomeTax: false },
  { name: 'Maine', slug: 'maine', stateTaxRate: 0.0715, notes: 'Maine has a top marginal income tax rate of 7.15%.', hasNoIncomeTax: false },
  { name: 'Maryland', slug: 'maryland', stateTaxRate: 0.0575, notes: 'Maryland has income tax rates from 2% to 5.75%, plus county taxes.', hasNoIncomeTax: false },
  { name: 'Massachusetts', slug: 'massachusetts', stateTaxRate: 0.05, notes: 'Massachusetts has a flat 5% income tax with an additional 4% on incomes over $1 million.', hasNoIncomeTax: false },
  { name: 'Michigan', slug: 'michigan', stateTaxRate: 0.0425, notes: 'Michigan has a flat 4.25% state income tax.', hasNoIncomeTax: false },
  { name: 'Minnesota', slug: 'minnesota', stateTaxRate: 0.0985, notes: 'Minnesota has a top marginal income tax rate of 9.85%.', hasNoIncomeTax: false },
  { name: 'Mississippi', slug: 'mississippi', stateTaxRate: 0.047, notes: 'Mississippi has a flat income tax rate transitioning to 4.7%.', hasNoIncomeTax: false },
  { name: 'Missouri', slug: 'missouri', stateTaxRate: 0.048, notes: 'Missouri has a top marginal income tax rate of 4.8%.', hasNoIncomeTax: false },
  { name: 'Montana', slug: 'montana', stateTaxRate: 0.059, notes: 'Montana has a top marginal income tax rate of 5.9%.', hasNoIncomeTax: false },
  { name: 'Nebraska', slug: 'nebraska', stateTaxRate: 0.0584, notes: 'Nebraska has a top marginal income tax rate of 5.84%.', hasNoIncomeTax: false },
  { name: 'Nevada', slug: 'nevada', stateTaxRate: 0, notes: 'Nevada has no state income tax.', hasNoIncomeTax: true },
  { name: 'New Hampshire', slug: 'new-hampshire', stateTaxRate: 0, notes: 'New Hampshire does not tax wages or salaries (only interest/dividends, being phased out).', hasNoIncomeTax: true },
  { name: 'New Jersey', slug: 'new-jersey', stateTaxRate: 0.1075, notes: 'New Jersey has income tax rates from 1.4% to 10.75%.', hasNoIncomeTax: false },
  { name: 'New Mexico', slug: 'new-mexico', stateTaxRate: 0.059, notes: 'New Mexico has income tax rates from 1.7% to 5.9%.', hasNoIncomeTax: false },
  { name: 'New York', slug: 'new-york', stateTaxRate: 0.0685, notes: 'New York has income tax rates from 4% to 10.9%. NYC residents pay an additional city tax.', hasNoIncomeTax: false },
  { name: 'North Carolina', slug: 'north-carolina', stateTaxRate: 0.045, notes: 'North Carolina has a flat 4.5% income tax rate.', hasNoIncomeTax: false },
  { name: 'North Dakota', slug: 'north-dakota', stateTaxRate: 0.025, notes: 'North Dakota has a flat 2.5% income tax rate.', hasNoIncomeTax: false },
  { name: 'Ohio', slug: 'ohio', stateTaxRate: 0.035, notes: 'Ohio has a top marginal income tax rate of 3.5%.', hasNoIncomeTax: false },
  { name: 'Oklahoma', slug: 'oklahoma', stateTaxRate: 0.0475, notes: 'Oklahoma has income tax rates from 0.25% to 4.75%.', hasNoIncomeTax: false },
  { name: 'Oregon', slug: 'oregon', stateTaxRate: 0.099, notes: 'Oregon has income tax rates from 4.75% to 9.9%.', hasNoIncomeTax: false },
  { name: 'Pennsylvania', slug: 'pennsylvania', stateTaxRate: 0.0307, notes: 'Pennsylvania has a flat 3.07% state income tax.', hasNoIncomeTax: false },
  { name: 'Rhode Island', slug: 'rhode-island', stateTaxRate: 0.0599, notes: 'Rhode Island has income tax rates from 3.75% to 5.99%.', hasNoIncomeTax: false },
  { name: 'South Carolina', slug: 'south-carolina', stateTaxRate: 0.064, notes: 'South Carolina has income tax rates from 0% to 6.4%.', hasNoIncomeTax: false },
  { name: 'South Dakota', slug: 'south-dakota', stateTaxRate: 0, notes: 'South Dakota has no state income tax.', hasNoIncomeTax: true },
  { name: 'Tennessee', slug: 'tennessee', stateTaxRate: 0, notes: 'Tennessee has no state income tax on wages (Hall tax on investment income was repealed).', hasNoIncomeTax: true },
  { name: 'Texas', slug: 'texas', stateTaxRate: 0, notes: 'Texas has no state income tax.', hasNoIncomeTax: true },
  { name: 'Utah', slug: 'utah', stateTaxRate: 0.0465, notes: 'Utah has a flat 4.65% state income tax.', hasNoIncomeTax: false },
  { name: 'Vermont', slug: 'vermont', stateTaxRate: 0.0875, notes: 'Vermont has income tax rates from 3.35% to 8.75%.', hasNoIncomeTax: false },
  { name: 'Virginia', slug: 'virginia', stateTaxRate: 0.0575, notes: 'Virginia has income tax rates from 2% to 5.75%.', hasNoIncomeTax: false },
  { name: 'Washington', slug: 'washington', stateTaxRate: 0, notes: 'Washington has no state income tax.', hasNoIncomeTax: true },
  { name: 'West Virginia', slug: 'west-virginia', stateTaxRate: 0.065, notes: 'West Virginia has income tax rates from 3% to 6.5%.', hasNoIncomeTax: false },
  { name: 'Wisconsin', slug: 'wisconsin', stateTaxRate: 0.0765, notes: 'Wisconsin has income tax rates from 3.5% to 7.65%.', hasNoIncomeTax: false },
  { name: 'Wyoming', slug: 'wyoming', stateTaxRate: 0, notes: 'Wyoming has no state income tax.', hasNoIncomeTax: true },
];

const SOURCE_OVERRIDES = {
  california: ['https://www.ftb.ca.gov/', 'California Franchise Tax Board', '$5,202 (single filer, 2025)'],
  texas: ['https://comptroller.texas.gov/', 'Texas Comptroller of Public Accounts', 'N/A - no state income tax'],
  'new-york': ['https://www.tax.ny.gov/', 'New York State Department of Taxation and Finance', '$8,000 (single filer, 2025)'],
  florida: ['https://floridarevenue.com/', 'Florida Department of Revenue', 'N/A - no state income tax'],
};

function stateSource(state) {
  if (SOURCE_OVERRIDES[state.slug]) return SOURCE_OVERRIDES[state.slug];
  const query = encodeURIComponent(`${state.name} state department of revenue income tax`);
  return [
    `https://www.google.com/search?q=${query}`,
    `${state.name} state tax authority`,
    state.hasNoIncomeTax ? 'N/A - no state income tax' : 'Varies by filing status; verify with the state tax authority',
  ];
}

export const STATES = BASE_STATES.map((state) => {
  const [officialSource, officialSourceName, stateStandardDeduction] = stateSource(state);
  const localTaxStates = new Set(['Indiana', 'Kentucky', 'Maryland', 'New York', 'Ohio', 'Pennsylvania']);
  return {
    ...state,
    uniqueFacts: [
      state.hasNoIncomeTax
        ? `${state.name} does not withhold state income tax from wages, but employees still pay federal income tax, Social Security, and Medicare.`
        : `${state.name} employers generally withhold state income tax from wages based on state withholding forms and payroll tables.`,
      state.hasNoIncomeTax
        ? `${state.name} may rely more heavily on sales, property, severance, or business taxes instead of wage income tax.`
        : `${state.name} taxpayers should compare paycheck withholding against their annual return because deductions and credits can change the effective rate.`,
      `${state.name} payroll calculations can differ when employees have pre-tax benefits, retirement contributions, supplemental wages, or multiple jobs.`,
    ],
    localTaxNote: localTaxStates.has(state.name)
      ? `${state.name} may have local income, county, city, school district, or occupational taxes depending on where you live or work.`
      : state.hasNoIncomeTax
        ? `No statewide wage income tax applies in ${state.name}; check local rules for employer-specific payroll charges.`
        : `Local income tax is not modeled in this calculator unless specifically noted by the state tax authority.`,
    officialSource,
    officialSourceName,
    filingDeadline: state.hasNoIncomeTax ? 'No state wage income tax return required for most employees' : 'Generally April 15, unless the state announces a different deadline',
    stateStandardDeduction,
  };
});
