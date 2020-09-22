const { ErrorHandler, errors, statusCodesEnum } = require ('../../errors');
const { user: { newUserValidator } } = require ('../../validators');

module.exports = (req, res, next) => {
    try {
        const user = req.body;
        const { error } = newUserValidator.validate (user);

        if (error) {
            return next (new ErrorHandler (error.details[0].message, statusCodesEnum.BAD_REQUEST, errors.BAD_REQUEST_NOT_VALID_USER.code))
        }

        next ()
    } catch (e) {
        next (e)
    }
};
