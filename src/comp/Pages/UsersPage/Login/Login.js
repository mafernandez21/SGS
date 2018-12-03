import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './stylesheet/Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pass:''
    }
  }

  handleInputValueChange = (oldState,ev) => {
    ev.preventDefault();
    this.setState( { ...oldState, [ev.target.name]:ev.target.value } );
  }

  handleLoginClick = (ev) => {
    ev.preventDefault();
    this.props.OnLogin(this.state);    
  }

  render() {
    const {user,pass}=this.state;
    return (
      <div>
        <div className={`${(this.props.errorLogin)?'LoginErrorForm':'LoginForm'}`}>
          <label className={' LoginLabel '}>
            Usuario <input className={' LoginInput '} type =  { 'text' }  name = { 'user' } value = { user } onChange = { (ev) => {this.handleInputValueChange (this.state,ev)} }></input>
          </label>
          <br/>
          <label className={' LoginLabel '}>
            Password <input className={' LoginInput '} type = { 'password' } name = { 'pass' } value = { pass } onChange = { (ev) => {this.handleInputValueChange (this.state,ev)}  }></input>
          </label>
          <br/>
            <button className={' LoginButton '} onClick = { this.handleLoginClick }>Ingresar</button>
          <br/>
            <Link className={`${(this.props.errorLogin)?'LoginLinkVisible':'LoginLinkHidden'}`} to='/reset-pass'>¿Olvido su contraseña?</Link>
        </div>
      </div>
    )
  }
}

Login.prototypes={
  errorLogin:PropTypes.bool,
  OnLogin:PropTypes.func.isRequired
}

Login.prototypes={
  errorLogin:true
}
