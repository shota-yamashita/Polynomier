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
    var [a, b, c] = getIntegers(integersCount);
    switch(degree) {
        case 1:
            polynomial = `${a}x ${sign()} ${b}`;
            break;
         case 2:
            polynomial = `${a}x^{2} ${sign()} ${b}x ${sign()} ${c}`;
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
    beginLatex();
    $("#problem").append(`\\int (${buildPolynomial(2)}) \\, dx`);
    endLatex();
}

// 定積分
function buildDefiniteIntegral() {
    var [a, b] = getIntegers(2);

    beginLatex();
    $("#problem").append(`\\int_{-${a}}^{${b}} (${buildPolynomial(2)}) \\, dx`);
    endLatex();
}
