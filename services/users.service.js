const connection = require('../database').getInstance();

module.exports = {
    createUser: async (data) => {
        const user = connection.getModel('User');
        return user.create(data, {new: true});
    }
}
