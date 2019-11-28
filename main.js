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

// 四則演算
function buildArithmeticOperation(sign) {
	var [a, b] = getIntegers(2);
	beginLatex();
	$("#problem").append(`${a} ${sign} ${b}`);
	endLatex();
}

// 一次方程式
function buildLinearEquation() {
	var [a, b, c] = getIntegers(3);

	beginLatex();
	$("#problem").append(`${a} ${sign()} ${b}x = ${c}`);
	endLatex();
}

// 二次方程式
function buildQuadraticEquation() {
	var [a, b, c] = getIntegers(3);

	beginLatex();
	$("#problem").append(`${a}x^{2} ${sign()} ${b}x ${sign()} ${c} = 0`);
	endLatex();
}
