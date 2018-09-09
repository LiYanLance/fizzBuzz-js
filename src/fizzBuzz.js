const fizzBuzz = (count) => {
    return inputValidate(count) ?
        [...Array(count)].map((val, index) => singleNumberFizzBuzz(index + 1)) : "";
}

const inputValidate = (count) => {
    return /\d+/.test(count) && count > 0;
}

const singleNumberFizzBuzz = (number) => {
    const result = Fizz(number) + Buzz(number) + Whizz(number);
    return result === "" ? number.toString() : result;
}

const Fizz = (number) => {
    return number % 3 === 0 ? "Fizz" : "";
}

const Buzz = (number) => {
    return number % 5 === 0 ? "Buzz" : "";
}

const Whizz = (number) => {
    return number % 7 === 0 ? "Whizz" : "";
}

module.exports = fizzBuzz;