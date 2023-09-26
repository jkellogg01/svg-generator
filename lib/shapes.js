class Shape {
  constructor(text, color, background) {
    if (!(text && color && background)) {
      throw new Error("Not all constructor parameters have been provided!");
    }
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
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" x="50" fill="${this.background}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">
    ${this.text}
  </text>
</svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="0 200, 150 0, 300 200" fill="${this.background}"/>
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">
    ${this.text}
  </text>
</svg>
    `;
  }
}

class Circle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.background}"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">
    ${this.text}
  </text>
</svg>
    `;
  }
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

module.exports = {
  renderSVG,
  Shape,
  Square,
  Triangle,
  Circle,
};
