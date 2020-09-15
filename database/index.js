const {Sequalize} = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;
    function InitConnection () {
        const client = new Sequalize('users', 'root', 'root1', {
            dialect: 'mysql',
            host: 'localhost'
        });
        let models = {};

        function getModels () {
            fs.readdir(path.join(process.cwd(), 'database', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    const model = (require(path.join(process.cwd(), 'database', 'models', modelName))(client, DataTypes));
                    models[modelName] = model;
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
