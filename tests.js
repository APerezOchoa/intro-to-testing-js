// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function(){
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed.', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed.', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World! when executed.', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given true as input.', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given false as input.', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given null as input.', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given an empty string as input.', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given 2.3 as input.', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World! when given an array as input.', function () {
        expect(sayHello([1,2,3,4])).toBe("Hello, World!");
    });
});

describe("isFive", function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return true when given 5 as input', function () {
       expect(isFive(5)).toBe(true);
    });
    it('should return true when given "5" as input', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when given 3 as input', function () {
        expect(isFive(3)).toBe(false);
    });
    it('should return false when given "3" as input', function () {
        expect(isFive("3")).toBe(false);
    });
    it('should return false when given false input', function () {
        expect(isFive(false)).toBe(false);
    });
    it('should return false when given null as input', function () {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when the function call is empty', function () {
        expect(isFive()).toBe(false);
    });
    it('should return false when given an empty string input', function () {
        expect(isFive("")).toBe(false);
    });
    it('should return false when given an array as input', function () {
        expect(isFive([5,6,7,8])).toBe(false);
    });
});

describe("isEven", function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(isEven([3,4,5,6])).toBe(false);
    });
    it('should return true when given 2 as a number input', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when given -4 as a number input', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when given 3 as a number input', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when given "banana" as input', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when given "8" as input', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when given Infinity as input', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when given true as input', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when given false as input', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when the function call is empty', function () {
        expect(isEven()).toBe(false);
    });
});