

module.exports = class AuthController {
    static mostrarLogin(req, res) {
        res.render('auth/login');
    }

    static mostrarCadastro(req, res){
        res.render('auth/cadastro');
    }
}