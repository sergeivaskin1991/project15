const User = require('../models/user');
// eslint-disable-next-line no-unused-vars
const NotFoundError = require('../errors/not-found-err');

module.exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find({});
    return res.send(user);
  } catch (err) {
    return next(err);
  }
};

module.exports.getUserId = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId)
      .orFail(() => new NotFoundError('Такого пользователя не существет'));
    return res.send(user);
  } catch (err) {
    return next(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  const { name, about } = req.body;
  const owner = req.user._id;

  try {
    const user = await User.findByIdAndUpdate(
      owner,
      { name, about },
      { new: true, runValidators: true },
    )
      .orFail(() => new NotFoundError('Такого пользователя не существет'));
    return res.send(user);
  } catch (err) {
    return next(err);
  }
};

module.exports.updateAvatar = async (req, res, next) => {
  const { avatar } = req.body;
  const owner = req.user._id;

  try {
    const user = await User.findByIdAndUpdate(
      owner,
      { avatar },
      { new: true, runValidators: true },
    )
      .orFail(() => new NotFoundError('Такого пользователя не существет'));
    return res.send(user);
  } catch (err) {
    return next(err);
  }
};
