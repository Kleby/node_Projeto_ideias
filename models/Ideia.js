const { DataTypes, STRING } = require('sequelize');

const db = require('../db/conn');

//Usuario para fazer a ligação
const Usuario = require('./Usuario');

const Ideia = db.define('ideia', {
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    ideia:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    dataPostagem: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

Ideia.belongsTo(Usuario);
Usuario.hasMany(Ideia);

module.exports = Ideia;