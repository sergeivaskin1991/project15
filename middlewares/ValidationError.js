function ValidationError(err, req, res, next) {
  let { statusCode = 500, message } = err;

  if (err.name === 'ValidationError') {
    statusCode = 400;
  } else if (err.name === 'CasrError') {
    statusCode = 400;
    message = 'id не найден';
  } else if (err.code === 11000) {
    statusCode = 409;
    statusCode = 409;
    message = 'Этот email уже зарегестрирован';
  }
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Ошбика' : message,
  });
  next();
}

module.exports = ValidationError;
