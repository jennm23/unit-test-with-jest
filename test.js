test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen",  function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1.07);
    expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(1000);
    expect(fromYenToPound(1000)).toBeCloseTo(5.55910);
})