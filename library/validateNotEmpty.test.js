const validateNotEmpty = require('./ValidateNotEmpty')

describe('validateNotEmpty', () => {
    it('should return as false if the input is equal to a empty string',() => { 
    const input = ''
    const test = validateNotEmpty(input);
     expect(test).toEqual('HEY, Input cannot be empty');
    })
})