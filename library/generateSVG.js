const {Triangle, Circle, Square} = require('./shapes')

function setShape(response) {
    if (response.Shapes === 'circle') {
        let UserShape = new Circle(response.shapeColor, response.textColor, response.text);
        return UserShape.render()
    }
    if (response.Shapes === 'triangle') {
        let UserShape = new Triangle(response.shapeColor, response.textColor, response.text);
        return UserShape.render()
    }
    if (response.Shapes === "square") {
    let UserShape = new Square (response.shapeColor, response.textColor, response.text);
    return UserShape.render()
    }
}

module.exports = setShape;