const userService = require ('../services/users.service');
const { hashPassword } = require ('../helpers');

module.exports = {
    createUser: async (req, res) => {
        try {
            const user = req.body;
            user.password = await hashPassword (user.password);
            const newUser = await userService.createUser (user);
            res.json (newUser);
        } catch (e) {
            res.json (e.message);
        }
    }
}
