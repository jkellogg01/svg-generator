class Shape {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }
  render() {
    throw new Error(
      'The method "render()" must be implemented by the subclass!'
    );
  }
}

class Square extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {}
}

class Triangle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {}
}

class Circle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {}
}

const renderSVG = (data) => {
  let shape;
  const { text, color, background } = data;
  switch (data.shape) {
    case "Square":
      shape = new Square(text, color, background);
      break;
    case "Triangle":
      shape = new Triangle(text, color, background);
      break;
    case "Circle":
      shape = new Circle(text, color, background);
      break;
    default:
      throw new Error(
        "This literally should not ever happen unless you messed up your test case or something"
      );
  }
  return shape.render();
};

module.exports = renderSVG;
