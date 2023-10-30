const setShape = require('./generateSVG');
const { Circle, Triangle, Square } = require('./shapes');

describe('setShape', () => {
  it('should return the rendered Circle shape', () => {
    const response = {
      Shapes: 'circle',
      shapeColor: 'blue',
      textColor: 'white',
      text: 'EKO',
    };
    const result = setShape(response);

    const expectedCircle = new Circle('blue', 'white', 'EKO');
    expect(result).toEqual(expectedCircle.render());
  });

  it('should return the rendered Triangle shape', () => {
    const response = {
      Shapes: 'triangle',
      shapeColor: 'red',
      textColor: 'black',
      text: 'SVG',
    };
    const result = setShape(response);

    const expectedTriangle = new Triangle('red', 'black', 'SVG');
    expect(result).toEqual(expectedTriangle.render());
  });

  it('should return the rendered Square shape', () => {
    const response = {
      Shapes: 'square',
      shapeColor: 'green',
      textColor: 'yellow',
      text: 'SQL',
    };
    const result = setShape(response);

    const expectedSquare = new Square('green', 'yellow', 'SQL');
    expect(result).toEqual(expectedSquare.render());
  });
});
