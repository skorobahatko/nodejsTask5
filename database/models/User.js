module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            notNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.VARCHAR,
            notNull: true
        },
        surname: {
            type: DataTypes.VARCHAR,
            notNull: true
        }
    }, {
      tableName: 'users',
      timestamps: false
    });
    return User;
};
