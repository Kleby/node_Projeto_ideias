const express = require('express');
const ehb = require ('express-handlebars');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const flash = require('express-flash');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

// import conexão
const conn = require('./db/conn');

// Recebendo os models
const Ideia = require('./models/Ideia');
const Usuario = require('./models/Usuario');

// import Rotas
const ideiasRotas = require('./routers/ideias.router');
const IdeiaController = require('./controllers/ideia.controller');

// configurando a engine
app.engine('handlebars', ehb.engine());
app.set('view engine', 'handlebars');

// configurando resposta doi template
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//definindo arquivos publicos
app.use(express.static('public'));

// session middleware para indicar onde salvar as sessões
app.use(
    session(
        {
            secret: 'nosso_secret',
            resave: false,
            saveUninitialized: false,
            store: new fileStore({
                logFn: ()=>{},
                path: path.join(require('os').tmpdir(), 'sessions' ), // serão salvas na pasta sessions
            }),
            cookie: {
                secure: false,
                maxAge: 360000,
                httpOnly: true,
            }
        }
    )
)

// confirando as flash message( menssagens modals)
app.use(flash());

//definindo as resposta caso o usuário esteja logado
app.use(( req, res, next) => {
    //se existir usuário, será enviado os dados dele para a resposta
    if(req.session.userId){
        res.locals.session = req.session;
    }

    // caso não exista a aplicação continuará
    next();
});


//rotas
app.use('/ideias', ideiasRotas);

app.get('/', IdeiaController.mostrarTodasAsIdeias);


// conexão com o banco
conn.sync()
    .then( () => {
        app.listen(
            port, 
            console.log(`Servidor escutando na porta ${port}`)
        )
    }) 
    .catch(e => console.error(error)
);