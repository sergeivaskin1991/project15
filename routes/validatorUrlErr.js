const validator = require('validator');
const BadRequestError = require('../errors/bad-request-err');

module.exports = (v) => {
  if (!validator.isURL(v)) {
    throw new BadRequestError('Недопустимый адрес');
  } else {
    return v;
  }
};
