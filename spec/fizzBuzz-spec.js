const fizzBuzz = require("../src/fizzBuzz")

describe("A number", () => {
    it("cannot be divisible by 3,5,7 should be present as itself", () => {
        expect(fizzBuzz(1)[0]).toEqual("1");
    })
    it("can be divisible by 3 should be present as fizz", () => {
        expect(fizzBuzz(3)[2]).toEqual("Fizz");
    })
    it("can be divisible by 5 should be present as Buzz", () => {
        expect(fizzBuzz(5)[4]).toEqual("Buzz");
    })
    it("can be divisible by 7 should be present as Whizz", () => {
        expect(fizzBuzz(7)[6]).toEqual("Whizz");
    })
    it("can be divisible by 3 and 5 should be present as FizzBuzz", () => {
        expect(fizzBuzz(15)[14]).toEqual("FizzBuzz");
    })
    it("can be divisible by 3 and 7 should be present as FizzWhizz", () => {
        expect(fizzBuzz(21)[20]).toEqual("FizzWhizz");
    })
    it("can be divisible by 5 and 7 should be present as BuzzWhizz", () => {
        expect(fizzBuzz(35)[34]).toEqual("BuzzWhizz");
    })
    it("can be divisible by 3,5,7 should be present as FizzBuzzWhizz", () => {
        expect(fizzBuzz(105)[104]).toEqual("FizzBuzzWhizz");
    })

    it("can return correct result", () => {
        const expectResult = ["1", "2", "Fizz","4", "Buzz", "Fizz", "Whizz",
            "8", "Fizz", "Buzz", "11", "Fizz", "13", "Whizz", "FizzBuzz",
            "16", "17", "Fizz", "19", "Buzz", "FizzWhizz"];
        expect(fizzBuzz(21)).toEqual(expectResult);
    })
})