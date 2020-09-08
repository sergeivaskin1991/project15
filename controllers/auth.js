/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const escape = require('escape-html');
const User = require('../models/user');
require('dotenv').config();

module.exports.createUser = async (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  try {
    const hash = await bcrypt.hash(escape(password), 10);
    const user = await User.create({
      name: escape(name),
      about: escape(about),
      avatar: escape(avatar),
      email: escape(email),
      password: hash,
    });
    return res.send({
      name: user.name, about: user.about, avatar: user.avatar, email: user.email,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = User.findUserByCredentials(email, password);
    const { NODE_ENV, JWT_SECRET = 'dev-key' } = process.env;
    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === 'production' ? JWT_SECRET : 'some-strong-secret',
      { expiresIn: '7d' },
    );

    res
      .cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      });
    return res.send({ token });
  } catch (err) {
    return next(err);
  }
};
