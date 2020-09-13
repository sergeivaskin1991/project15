/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const AuthorisationError = require('../errors/authorisation-err');
require('dotenv').config();

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthorisationError('Пожалуйста, авторизуйтесь');
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    const { NODE_ENV, JWT_SECRET = 'dev-key' } = process.env;

    payload = jwt.verify(token,
      NODE_ENV === 'production' ? JWT_SECRET : 'some-strong-secret');
  } catch (err) {
    throw new AuthorisationError('Пожалуйста, авторизуйтесь');
  }

  req.user = payload;

  next();
};
