// 1 UŽDUOTIS:
const answer1 = document.querySelector('.answer1');
const myName = 'Eglė';
const myLastName = 'Juočienė';
const myBirthYear = 1990;
const currentYear = 2022;

let calculateAge = (birthyear, currentYear) => {
	const age = currentYear - birthyear;
	return age;
};

answer1.innerHTML = `Aš esu ${myName} ${myLastName}. Man yra ${calculateAge(myBirthYear, currentYear)} metai`;

// 2 UŽDUOTIS:
const answer2 = document.querySelector('.answer2');

const randomNumber1 = Math.floor(Math.random() * 9000 + 1000);
const randomNumber2 = Math.floor(Math.random() * 9000 + 1000);
const randomNumber3 = Math.floor(Math.random() * 9000 + 1000);
const randomNumber4 = Math.floor(Math.random() * 9000 + 1000);
const randomNumber5 = Math.floor(Math.random() * 9000 + 1000);
const randomNumber6 = Math.floor(Math.random() * 9000 + 1000);

const allNumbers = [ randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5, randomNumber6 ].sort();
answer2.innerHTML = `6 atsitiktiniai kintamieji: ${allNumbers.join(' ')}`;

// 3 UŽDUOTIS:

const lengthInput = document.querySelector('#string_length');
const excludedChartInput = document.querySelector('#excluded_chars');
const generateBtn = document.querySelector('.generate_btn');
const answer3 = document.querySelector('.answer3');

const allLetters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];
const generateString = (length, exclude = []) => {
	let string = '';
	while (string.length < length) {
		let randomLetter = allLetters[Math.floor(Math.random() * 26)];
		if (!exclude.includes(randomLetter)) {
			string = string + randomLetter;
		}
	}
	return string;
};

generateBtn.addEventListener('click', () => {
	if (!excludedChartInput.value) {
		answer3.innerHTML = generateString(lengthInput.value);
	} else {
		answer3.innerHTML = generateString(lengthInput.value, excludedChartInput.value);
	}
});

// 4 UŽDUOTIS:

const answer4 = document.querySelector('.answer4');
const answer4Extended = document.querySelector('.answer4_extended');
const selectedLetters = [ 'A', 'B', 'C', 'D' ];
const letterArray = [];

for (let i = 0; i < 200; i++) {
	letterArray.push(selectedLetters[Math.floor(Math.random() * 4)]);
}

const count = letterArray.reduce((accumulator, value) => {
	return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});

answer4.innerHTML = `Atsitiktinis raidžių masyvas: ${letterArray}`;
answer4Extended.innerHTML = `Raidžių kiekis: A: ${count.A}, B: ${count.B}, C: ${count.C}, D: ${count.D}`;

// 5 UŽDUOTIS:

const answer5 = document.querySelector('.answer5');

const sortedArray = letterArray.sort();
answer5.innerHTML = `Išrūšiuotas 4 užduoties masyvas: ${sortedArray}`;

// 6 UŽDUOTIS:

const answer6 = document.querySelector('.answer6');

const createdArray = [];

for (i = 0; i < 2; i++) {
	createdArray.push(Math.floor(Math.random() * 21 + 5));
}

for (i = 0; i < 8; i++) {
	createdArray.push(createdArray[i] + createdArray[i + 1]);
}

answer6.innerHTML = `Dešimties skaičių masyvas: ${createdArray}`;

// 7 UŽDUOTIS:
const answer7 = document.querySelector('.answer7');
const answer7Extended = document.querySelector('.answer7_extended');
let array7 = [];

while (array7.length < 50) {
	let randomNumber = Math.floor(Math.random() * 200 + 1);
	if (!array7.includes(randomNumber)) {
		array7.push(randomNumber);
	}
}

answer7.innerHTML = `50 unikalių skaičių stringas nuo 1 iki 200: ${array7.join(' ')}`;

const isPrime = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return num !== 1;
};

const primeArray = array7.filter((element) => isPrime(element));
primeArray.sort(function(a, b) {
	return a - b;
});

let sortedPrimeArray = primeArray.join(' ');

answer7Extended.innerHTML = `Iš jų pirminiai: ${sortedPrimeArray}`;

// 8 UŽDUOTIS:

// 9 UŽDUOTIS:

const answer9 = document.querySelector('.answer9');

let resultObject = {};
let key = 1;

function getValue() {
	setInterval(async function() {
		const response = await fetch('https://blockchain.info/tobtc?currency=EUR&value=1');
		const result = await response.json();
		resultObject[key] = result;
		key++;
	}, 1000);
}

getValue();

console.log(resultObject);
