module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
      tableName: 'users',
      timestamps: false
    });
    return User;
};
