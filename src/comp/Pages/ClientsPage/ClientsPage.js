import React from 'react';
import './stylesheet/ClientsPage.scss';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import MenuBar from '../../Layout/MenuBar/MenuBar';
import ClientsList from './comp/ClientsList/ClientsList';
import {DataBase} from '../../Shared/DataBase';

const {Clientes} = DataBase;

class ClientsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={ 'app-header' }>
          <div className={ 'app-nav' }><MenuBar isLogged = { false } user = {'Admin'} orientacion = { 'h' }/></div>
          <div className={ 'app-title' }><Header title = {'Sistema de Gestion de Clientes'}/></div>
        </div>
        <div className={ 'app-body' }>
          <div className={ 'app-aside-left' }>
          </div>
          <div className={ 'app-aside-right' }>
          </div>
          <div className={ 'app-content' }>
            <ClientsList title={'Clientes Registrados'} clientes={ Clientes } />
          </div>
          </div>
        <div className={ 'app-footer' }><Footer/></div>
      </React.Fragment>
    )
  }
}

export default ClientsPage;   

