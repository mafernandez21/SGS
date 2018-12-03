var config = require ('../config/config');

module.exports = {
  listar: function (req, res) {
    //res.send(JSON.stringify(config.clientes));
    var n=Math.floor((Math.random() * config.app.maxrestime) + config.app.minrestime);
    console.log('n='+n);
    setTimeout(function(){
      res.send(config.clientes);
      res.end();
    },(n));
  },
  auth: function(req,res){
    if(req.body.user==='admin' && req.body.pass==='qweasd'){
      res.send({token:'a9564ebc3289b7a14551baf8ad5ec60a',isLogged:true});  
    }else{
      res.send({token:'',isLogged:false});  
    }
    res.end();
  }
}
