function ValidationError(err, req, res, next) {
  let { statusCode = 500, message } = err;

  if (err.name === 'ValidationError') {
    statusCode = 400;
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'id не найден';
  } else if (err.code === 11000) {
    statusCode = 409;
    message = 'Этот email уже используется';
  }
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Произошла ошибка' : message,
  });
  next();
}
module.exports = ValidationError;
