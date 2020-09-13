const signup = require('express').Router();
const signin = require('express').Router();

const { celebrate, Joi } = require('celebrate');
const { createUser, login } = require('../controllers/auth');
const validatorUrlErr = require('./validatorUrlErr');

signup.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.required().custom((v) => validatorUrlErr(v)),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(
      new RegExp('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!&$%#? "])(?=\\S+$).*$'),
    ).message('Пароль должен содержать строчные, прописные буквы, цифры, спецсимволы. Минимальное значение 8 символов'),
    repeat_password: Joi.ref('password'),
  }),
}), createUser);

signin.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

module.exports = { signup, signin };
