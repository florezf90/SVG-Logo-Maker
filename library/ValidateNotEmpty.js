// This function serves input validation and make sure that the user inputs at least an answer

function validateNotEmpty(input) {
    if (input.trim() === '') {
      return 'HEY, Input cannot be empty';
    }
    return true;
  }


  module.exports = validateNotEmpty