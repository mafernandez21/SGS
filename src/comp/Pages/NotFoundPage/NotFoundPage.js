import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheet/NotFoundPage.scss';
import imgPanda from './stylesheet/NotFoundPage.jpg'
import MenuBar from '../../../comp/Layout/MenuBar/MenuBar';
import Header from '../../../comp/Layout/Header/Header';

class NotFoundPage extends React.Component {
  render() {
    console.log(imgPanda);
    return (
      <React.Fragment>
        <div className={ 'app-header' }>
          <div className={ 'app-nav' }><MenuBar isLogged = { false } user = {'Admin'} orientacion = { 'h' }/></div>
          <div className={ 'app-title' }><Header title = {'Sistema de Gestion de Clientes'}/></div>
        </div>
        <div className={ 'app-body' }>
          <Link to={ '/home' }>
            <p><img className = { 'imgShaker' } src = { imgPanda } alt = '404' ></img></p>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default NotFoundPage;
