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
