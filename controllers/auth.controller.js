const { comparePasswords } = require ('../helpers');

module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body;

            await comparePasswords (password, user.password);
            res.json ('Success');
        } catch (e) {
            next (e)
        }
    }
};
