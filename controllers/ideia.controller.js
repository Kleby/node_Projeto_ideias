const Ideia = require('../models/Ideia');
const Usuario = require('../models/Usuario');

module.exports = class IdeiaController {
    static async mostrarTodasAsIdeias(req, res){
        res.render('ideias/inicial');   
    }
}