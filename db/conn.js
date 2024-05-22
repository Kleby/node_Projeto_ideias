const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ideias', 'root', '', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

try {
    sequelize.authenticate()
    console.log("Conectado ao banco com sucesso!");
} catch(e){ 
    console.error("Não foi possivel conectar ao banco!")
}

module.exports = sequelize;