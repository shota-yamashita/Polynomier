function getRandomIntInclusive(min = 1, max = 9) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIntegers(num) {
	var integers = [];
	for (var i = 1; i <= num; i++) { integers.push(getRandomIntInclusive()); }
	return integers;
}

function beginLatex() {
	$("#problem").html("\\begin\{align\} \n");
}

function endLatex() {
	$("#problem").append("\\end\{align\}");
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, "problem"]);
}

// 四則演算
function createArithmeticOperation(sign) {
	var [a, b] = getIntegers(2);
	document.getElementById('problem').innerText = `${a} ${sign} ${b}`;
}

// 一次方程式
function createFirstDegreePolynomial() {
	var [a, b, c] = getIntegers(3);
	var signArr = ["+", "-"];
	var sign = signArr[Math.floor(Math.random() * signArr.length)];

	beginLatex();
	$("#problem").append(`${a} ${sign} ${b}x = ${c}` + "\n");
	endLatex();
}

function solve() {
	var problem = document.getElementById("problem").innerText;
	if (problem === "") { alert("問題を作った後にしてください。"); }
	var arr = problem.split(' ');
	// 今後、複数パターンの項に対応すると思う。今は2つ。
	var num1 = parseInt(arr[0]);
	var sym = arr[1];
	var num2 = parseInt(arr[2]);
	if (sym === "+") {
		document.getElementById('answer').innerHTML = num1 + num2;
	} else if (sym === "-") {
		document.getElementById('answer').innerHTML = num1 - num2;
	} else if (sym === "×") {
		document.getElementById('answer').innerHTML = num1 * num2;
	} else if (sym === "÷") {
		document.getElementById('answer').innerHTML = num1 / num2;
	} else {
		alert("この機能は未実装です。");
	}
}
