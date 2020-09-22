const { userService } = require ('../../services');
const { ErrorHandler, errors, statusCodesEnum } = require ('../../errors');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        const isUser = await userService.findUserByParams ({ email });

        if (!isUser) {
            return next (new ErrorHandler (errors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND_USER, errors.NOT_FOUND_USER.code))
        }
        req.user = isUser;
        next ();
    } catch (e) {
        next (e)
    }
}
