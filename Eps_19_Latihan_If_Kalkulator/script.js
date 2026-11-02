function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const op = document.getElementById('operator').value.trim();
    let hasil;

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('hasil').textContent = 'Please enter valid numbers.';
        return;
    }

    // gunakan if untuk operasi kalkulatornya
	if ( op === "+"){
		hasil = number1 + number2;
	} else if ( op === "-"){
		hasil = number1 - number2;
	} else if ( op === "*"){
		hasil = number1 * number2;
	} else if ( op === "/"){
		if (number2 === 0){
			hasil = "hasil tak hingga, karena pembagi nol";
		} else {
			hasil = number1/number2;
		}
	} else {
		hasil = 'operator tidak dikenali';
	}

	document.getElementById('hasil').textContent = `Hasil: ${hasil}`;

}