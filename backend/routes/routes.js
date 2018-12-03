const MainController = require ('../controllers/MainController');

function routes(app){
  app.get('/listar', MainController.listar);
  app.post('/login',MainController.auth);
}

module.exports=routes;
