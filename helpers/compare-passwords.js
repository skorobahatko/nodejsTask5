const bcrypt = require('bcrypt');
const {ErrorHandler, errors, statusCodesEnum} = require('../errors');

module.exports = async (password, hashedPassword) => {
    const isPasswordsEqual = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordsEqual) {
        throw new ErrorHandler(errors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND_USER, errors.NOT_FOUND_USER.code)
    }
};
