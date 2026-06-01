//1. Function called 'multiply' - takes 3 parameters and multiplies them
function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}

// 2. Function expression called 'convertToSeconds' - minutes to seconds
const convertToSeconds = function(minutes) {
    return minutes * 60;
}

// 3. Function called 'fahrenheitToCelsius' - converts Fahrenheit to Celsius
function fahrenheitToCelsius(tempF) {
    return (tempF - 32) * 5 / 9;
}

// 4. Function that takes a string and returns it reversed
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 5. Function that counts vowels in a string
function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }   
    }
    return count;
}

// 6. Function 'isPrime' - return  true if number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}