const express = require('express');
const ehb = require ('express-handlebars');
const session = require('express-session');
const fireStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();


const conn = require('./db/conn');

conn.sync()
    .then( () => {
        console.log('Servidor escutando na porta 3000');
    }) 
    .catch(e => console.error(error));