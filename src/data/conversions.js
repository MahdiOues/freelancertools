export const CONVERSION_PAIRS = [
  { slug: 'cm-to-inches', from: 'cm', to: 'inches', fromFull: 'centimeters', toFull: 'inches', factor: 0.393701, category: 'length', volume: '2.4M/mo', examples: [1,5,10,15,20,25,30,50,100,170,180,190] },
  { slug: 'kg-to-lbs', from: 'kg', to: 'lbs', fromFull: 'kilograms', toFull: 'pounds', factor: 2.20462, category: 'weight', volume: '1.8M/mo', examples: [1,5,10,20,30,40,50,60,70,80,90,100] },
  { slug: 'celsius-to-fahrenheit', from: '°C', to: '°F', fromFull: 'Celsius', toFull: 'Fahrenheit', formula: 'c2f', reverseFormula: 'f2c', category: 'temperature', volume: '1.5M/mo', examples: [0,10,20,25,30,35,37,40,100] },
  { slug: 'miles-to-km', from: 'miles', to: 'km', fromFull: 'miles', toFull: 'kilometers', factor: 1.60934, category: 'length', volume: '900K/mo', examples: [1,5,10,20,26.2,50,100,200,500] },
  { slug: 'lbs-to-kg', from: 'lbs', to: 'kg', fromFull: 'pounds', toFull: 'kilograms', factor: 0.453592, category: 'weight', volume: '800K/mo', examples: [1,5,10,20,50,100,120,150,200] },
  { slug: 'feet-to-meters', from: 'ft', to: 'm', fromFull: 'feet', toFull: 'meters', factor: 0.3048, category: 'length', volume: '600K/mo', examples: [1,2,3,4,5,6,10,20,50,100] },
  { slug: 'fahrenheit-to-celsius', from: '°F', to: '°C', fromFull: 'Fahrenheit', toFull: 'Celsius', formula: 'f2c', reverseFormula: 'c2f', category: 'temperature', volume: '550K/mo', examples: [32,50,68,77,86,98.6,100,212] },
  { slug: 'oz-to-ml', from: 'oz', to: 'ml', fromFull: 'fluid ounces', toFull: 'milliliters', factor: 29.5735, category: 'volume', volume: '480K/mo', examples: [1,2,4,6,8,12,16,24,32,64] },
  { slug: 'liters-to-gallons', from: 'L', to: 'gal', fromFull: 'liters', toFull: 'gallons', factor: 0.264172, category: 'volume', volume: '350K/mo', examples: [1,2,5,10,20,50,100] },
  { slug: 'km-to-miles', from: 'km', to: 'miles', fromFull: 'kilometers', toFull: 'miles', factor: 0.621371, category: 'length', volume: '320K/mo', examples: [1,5,10,20,50,100,200] },
  { slug: 'inches-to-cm', from: 'inches', to: 'cm', fromFull: 'inches', toFull: 'centimeters', factor: 2.54, category: 'length', volume: '300K/mo', examples: [1,2,3,4,5,6,10,12,24,36,72] },
  { slug: 'ml-to-oz', from: 'ml', to: 'oz', fromFull: 'milliliters', toFull: 'fluid ounces', factor: 0.033814, category: 'volume', volume: '280K/mo', examples: [100,200,250,300,500,750,1000] },
  { slug: 'grams-to-ounces', from: 'g', to: 'oz', fromFull: 'grams', toFull: 'ounces', factor: 0.035274, category: 'weight', volume: '250K/mo', examples: [1,5,10,25,50,100,200,500,1000] },
  { slug: 'meters-to-feet', from: 'm', to: 'ft', fromFull: 'meters', toFull: 'feet', factor: 3.28084, category: 'length', volume: '240K/mo', examples: [1,2,3,5,10,20,50,100] },
  { slug: 'mph-to-kph', from: 'mph', to: 'kph', fromFull: 'miles per hour', toFull: 'kilometers per hour', factor: 1.60934, category: 'speed', volume: '200K/mo', examples: [30,40,50,55,60,65,70,75,80,100] },
];

export function getFormulaFn(formula) {
  if (formula === 'c2f') return (v) => (v * 9/5) + 32;
  if (formula === 'f2c') return (v) => (v - 32) * 5/9;
  return null;
}

export function convertValue(value, pair, direction) {
  if (direction === 'forward') {
    if (pair.formula) {
      const fn = getFormulaFn(pair.formula);
      return fn ? fn(value) : null;
    }
    return value * pair.factor;
  }
  if (direction === 'reverse') {
    if (pair.formula) {
      const fn = getFormulaFn(pair.reverseFormula);
      return fn ? fn(value) : null;
    }
    return value / pair.factor;
  }
  return null;
}
