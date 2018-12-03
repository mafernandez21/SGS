import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import './stylesheet/MenuBar.css';
import './stylesheet/MenuBar.scss';

const MenuBar = ( { user, isLogged, orientacion } ) => {
  const menuOrientation=(orientacion && orientacion==='v')?'V':'H';
  return (
    <React.Fragment>
      <ul className = { `${ menuOrientation }Menu` }>
        <li className = { `${ menuOrientation }MenuItem` }><Link to = { '/home' }>Inicio</Link></li>
        <li className = { `${ menuOrientation }MenuItem` }><Link to = { '/users' }>Usuarios</Link></li>
        <li className = { `${ menuOrientation }MenuContainer` }>
          <Link to={'/clients'}>Clientes</Link>
          <div className = { `${ menuOrientation }MenuContainerItem` } >
            <Link to={'/clients/manager'}>Gestion de Clientes</Link>
            <Link to={'/clients/informs'}>Informes de Clientes</Link>
            <Link to={'/clients/list'}>Listado de Clientes</Link>
          </div>
        </li>
        <li className = { `${ menuOrientation }MenuItem` }><Link to={'/providers'}>Proveedores</Link></li>
        <li className = { `${ menuOrientation }MenuItem` }><Link to={'/logout'}>{ `Salir ${(isLogged)?`(${ user })`:`${''}`}` }</Link></li>
      </ul>
    </React.Fragment>
  );
}

MenuBar.prototypes={
  orientacion:PropTypes.string.isRequired,
  user:PropTypes.string.isRequired,
  isLogged:PropTypes.bool.isRequired,
}

MenuBar.defaultprops ={
  orientacion:'h',
  user:'',
  isLogged:false
}

export default MenuBar;
