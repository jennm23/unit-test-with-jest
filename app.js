const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(dolarCant) {
    let valEuro = dolarCant / 1.07;
    let valYen = valEuro * 156.5;
    return valYen;
}

const fromYenToPound = function(yenCant) {
    let valEur = yenCant / 156.5;
    let valPound = valEur * 0.87;
    return valPound;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}