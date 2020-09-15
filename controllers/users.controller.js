const userService = require('../services/users.service');

module.exports = {
    createUser: async (req, res) => {
        try {
            const user = await userService.createUser(req.body);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    }
}
