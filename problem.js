let s = 'MCMXCIVIII';

// we want to breakdown the string from greatest to least and output the value

var romanToInt = function (s) {
	let total = 0;
	let arrayOfNumerals = s.split('');

	for (let i = 0; i < arrayOfNumerals.length; ) {
		if (arrayOfNumerals[i] === 'C' && arrayOfNumerals[i + 1] === 'M') {
			total += 900;
			i += 2;
		} else if (
			arrayOfNumerals[i] === 'C' &&
			arrayOfNumerals[i + 1] === 'D'
		) {
			total += 400;
			i += 2;
		} else if (
			arrayOfNumerals[i] === 'X' &&
			arrayOfNumerals[i + 1] === 'C'
		) {
			total += 90;
			i += 2;
		} else if (
			arrayOfNumerals[i] === 'X' &&
			arrayOfNumerals[i + 1] === 'L'
		) {
			total += 40;
			i += 2;
		} else if (
			arrayOfNumerals[i] === 'I' &&
			arrayOfNumerals[i + 1] === 'X'
		) {
			total += 9;
			i += 2;
		} else if (
			arrayOfNumerals[i] === 'I' &&
			arrayOfNumerals[i + 1] === 'V'
		) {
			total += 4;
			i += 2;
		} else if (arrayOfNumerals[i] === 'M') {
			total += 1000;
			i += 1;
		} else if (arrayOfNumerals[i] === 'D') {
			total += 500;
			i += 1;
		} else if (arrayOfNumerals[i] === 'C') {
			total += 100;
			i += 1;
		} else if (arrayOfNumerals[i] === 'L') {
			total += 50;
			i += 1;
		} else if (arrayOfNumerals[i] === 'X') {
			total += 10;
			i += 1;
		} else if (arrayOfNumerals[i] === 'V') {
			total += 5;
			i += 1;
		} else if (arrayOfNumerals[i] === 'I') {
			total += 1;
			i += 1;
		}
		console.log(total);
	}

	return total;
};

romanToInt(s);
