const {Circle, Triangle, Square } = require('./shapes');

describe('shapes', () => {

    describe('Circle', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const circle = new Circle('blue','white', 'EKO');
            expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
        </svg>
        `
            );
        });
    });

    describe('Square', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const circle = new Square('blue','white', 'EKO');
            expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
        </svg>
        `
            );
        });
    });
    describe('Triangle', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const circle = new Triangle('blue','white', 'EKO');
            expect(circle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">EKO</text>
        </svg>
        `
            );
        });
    });
})