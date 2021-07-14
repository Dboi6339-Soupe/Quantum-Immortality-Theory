// scientific notation of the population
const population = 7.874965825 * 10^9

//  a =the current human population (as of 10:10AM PST, 7/14/2021)
var a = population;

// the exponent; must be equal to a
const b = a;

// the equation (c = a^b)
const c = Math.pow(a, b);

// prints c in console
console.log(c);