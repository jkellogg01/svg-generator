const { Shape, Square, Triangle, Circle } = require("../lib/shapes");

describe("Shape", () => {
  it("should throw an error if render() is called from the parent class", () => {
    const myShape = new Shape("text", "blue", "green");

    expect(myShape.render).toThrow();
  });
});

describe("subShapes", () => {
  describe("Triangle", () => {
    it("render() should return a string", () => {
      const myShape = new Triangle("text", "blue", "green");

      const result = myShape.render();

      expect(typeof result).toEqual("string");
    });
  });

  describe("Square", () => {
    it("render() should return a string", () => {
      const myShape = new Square("text", "blue", "green");

      const result = myShape.render();

      expect(typeof result).toEqual("string");
    });
  });

  describe("Circle", () => {
    it("render() should return a string", () => {
      const myShape = new Circle("text", "blue", "green");

      const result = myShape.render();

      expect(typeof result).toEqual("string");
    });
  });
});
