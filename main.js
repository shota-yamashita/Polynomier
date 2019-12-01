function getRandomIntInclusive(min=1, max=9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIntegers(num) {
    var integers = [];
    for (var i=1; i<=num; i++) { integers.push(getRandomIntInclusive()); }
    return integers;
}

function beginLatex() {
    $("#problem").html("\\begin\{align\} \n");
}

function endLatex() {
    $("#problem").append("\\end\{align\}");
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "problem"]);
}

function sign() {
    var signArr = ["+", "−"];
    return signArr[Math.floor(Math.random() * signArr.length)];
}

function xSign(xTerm) {
    if (xTerm === 0) { return ""; }
    if (xTerm === 1) { return "x"; }
    return `x^${xTerm}`
}

function buildPolynomial(degree) {
    var polynomial;
    var integersCount = degree + 1;
    var [a, b, c, d] = getIntegers(integersCount);
    switch(degree) {
        case 0:
            var axTerm = getRandomIntInclusive(min=0, max=4);
            if (a === 1 && axTerm <= 1) { a = ""; }
            polynomial = `${a}${xSign(axTerm)}`;
            break;
        case 1:
            var axTerm = getRandomIntInclusive(min=1, max=4);
            var bxTerm = getRandomIntInclusive(min=0, max=axTerm - 1);
            if (a === 1) { a = ""; }
            if (b === 1 && bxTerm <= 1) { b = ""; }
            polynomial = `${a}${xSign(axTerm)} ${sign()} ${b}${xSign(bxTerm)}`;
            break;
        case 2:
            var axTerm = getRandomIntInclusive(min=2, max=4);
            var bxTerm = getRandomIntInclusive(min=1, max=axTerm - 1);
            var cxTerm = getRandomIntInclusive(min=0, max=bxTerm - 1);
            if (a === 1) { a = ""; }
            if (b === 1) { b = ""; }
            if (c === 1 && cxTerm <= 1) { c = ""; }
            polynomial = `${a}${xSign(axTerm)} ${sign()} ${b}${xSign(bxTerm)} ${sign()} ${c}${xSign(cxTerm)}`;
            break;
        case 3:
            var axTerm = getRandomIntInclusive(min=3, max=4);
            var bxTerm = getRandomIntInclusive(min=2, max=axTerm - 1);
            var cxTerm = getRandomIntInclusive(min=1, max=bxTerm - 1);
            var dxTerm = getRandomIntInclusive(min=0, max=cxTerm - 1);
            if (a === 1) { a = ""; }
            if (b === 1) { b = ""; }
            if (c === 1) { c = ""; }
            if (d === 1 && dxTerm <= 1) { d = ""; }
            polynomial = `${a}${xSign(axTerm)} ${sign()} ${b}${xSign(bxTerm)} ${sign()} ${c}${xSign(cxTerm)} ${sign()} ${d}${xSign(dxTerm)}`;
            break;
    }
    return polynomial;
}

// 四則演算
function buildArithmeticOperation(sign) {
    var [a, b] = getIntegers(2);
    beginLatex();
    $("#problem").append(`${a} ${sign} ${b}`);
    endLatex();
}

// 不定積分
function buildIntegral() {
    var term = getRandomIntInclusive(min=0, max=3);

    beginLatex();
    $("#problem").append(`\\int (${buildPolynomial(term)}) \\, dx`);
    endLatex();
}

// 定積分
function buildDefiniteIntegral() {
    var a = getRandomIntInclusive(min=1, max=3);
    var b = getRandomIntInclusive(min=1, max=3);
    var term = getRandomIntInclusive(min=0, max=3);

    beginLatex();
    $("#problem").append(`\\int_{-${a}}^{${b}} (${buildPolynomial(term)}) \\, dx`);
    endLatex();
}
