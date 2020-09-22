const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;
    function InitConnection () {
        const client = new Sequelize('users', 'root', 'root1', {
            dialect: 'mysql',
            host: 'localhost'
        });
        let models = {};

        function getModels () {
            fs.readdir(path.join(process.cwd(), 'database', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    console.log ('****')
                    console.log (modelName + 'model')
                    console.log ('****')
                    models[modelName] = require(path.join(process.cwd(), 'database', 'models', modelName))(client, Sequelize.DataTypes);
                    console.log (models)
                })
            });
            console.log (models);
        }
        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = InitConnection();
            }
            return instance
        }
    }
})();
