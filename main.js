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

function buildPolynomial(degree) {
    var polynomial;
    var integersCount = degree + 1;
    var [a, b, c, d] = getIntegers(integersCount);
    switch(degree) {
        case 0:
            var axTerm = getRandomIntInclusive(min=0, max=4);
            if (axTerm === 0) { polynomial = `${a}`; break; }
            if (a === 1) { a = ""; }
            if (axTerm === 1) { polynomial = `${a}x`; }
            else if ([2, 3, 4].includes(axTerm)) { polynomial = `${a}x^${axTerm}`; }
            break;
        case 1:
            if (a === 1) { a = ""; }
            polynomial = `${a}x ${sign()} ${b}`;
            break;
        case 2:
            if (a === 1) { a = ""; }
            if (b === 1) { b = ""; }
            polynomial = `${a}x^{2} ${sign()} ${b}x ${sign()} ${c}`;
            break;
        case 3:
            if (a === 1) { a = ""; }
            if (b === 1) { b = ""; }
            if (c === 1) { c = ""; }
            polynomial = `${a}x^{3} ${sign()} ${b}x^{2} ${sign()} ${c}x ${sign()} ${d}`;
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

// 一次方程式
function buildLinearEquation() {
    var a = getIntegers(1);

    beginLatex();
    $("#problem").append(`${buildPolynomial(1)} = ${a}`);
    endLatex();
}

// 二次方程式
function buildQuadraticEquation() {
    beginLatex();
    $("#problem").append(`${buildPolynomial(2)} = 0`);
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
