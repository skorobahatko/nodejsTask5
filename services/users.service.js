const connection = require('../database').getInstance();

module.exports = {
    createUser: async (data) => {
        const user = connection.getModel('User');
        console.log (user);
        return user.create(data, {new: true});
    },
    findUserByParams: (obj) => {
        const User = connection.getModel('User');
        return User.findOne({
            where: obj
        })
    }
};
