import React from 'react';
import Login from './Login/Login';
import {DataBase} from '../../Shared/DataBase';

const { Usuarios } = DataBase; 

class UserPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      isLogged:false,
      errorLogin:false
    }
  }
  
  handleOnLogin = ({user,pass}) => {
    console.log('Usuario: '+user+' Password: '+pass);
    const LoggedUser =Usuarios.filter(usuario => {
      console.log(usuario);
      return usuario.user===user && usuario.pass===pass;
    });
    if(LoggedUser[0]){
      this.setState(
        {
          userName:LoggedUser[0].user,
          isLogged:true,
          errorLogin:false
        }
      );  
    }else{
      this.setState(
        {
          userName:'',
          isLogged:false,
          errorLogin:true
        }
      );  
    }
  }
  
  render(){
    if(!this.state.isLogged){
      return(
        <div>
          Login Usuarios
          <Login errorLogin = { this.state.errorLogin } OnLogin = { this.handleOnLogin } />
        </div>
      );
    }else{
      return(
        <div>
          <label> { `Hola, ${this.state.userName}!` } </label>
        </div>
      );
    }
  }
}

export default UserPage;
