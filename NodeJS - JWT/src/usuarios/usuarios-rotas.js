const usuarios = require('.');
const usuariosControlador = require('./usuarios-controlador');
const middlewareAutenticacao = require('./middleware-autenticacao');
const passport = require('passport');


module.exports = app => {

  app.route('/usuario/login')
  .post(middlewareAutenticacao.local, usuariosControlador.login)

  app
    .route('/usuario')
    .post(passport.authenticate('bearer', {session: false}),usuariosControlador.adiciona)
    .get(passport.authenticate('bearer', {session: false}),usuariosControlador.lista)

  app.route('/usuario/:id').delete(middlewareAutenticacao.bearer, usuariosControlador.deleta)
};
