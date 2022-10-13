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
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when executed.', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return the string "Hello, Alex!" when executed.', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat! when executed.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World! when executed.', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given true as input.', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given false as input.', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given null as input.', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given an empty string as input.', function () {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given 2.3 as input.', function () {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World! when given an array as input.', function () {
        expect(sayHello([1,2,3,4])).toBe("Hello, World!")
    });
});