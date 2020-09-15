const {Sequalize} = require('sequelize');

module.exports = new Sequalize(
    'localhost',
    'root',
    'root1',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);
