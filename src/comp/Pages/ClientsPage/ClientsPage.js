import React from 'react';
import './ClientsPage.css';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import MenuBar from '../../Layout/MenuBar/MenuBar';
import ClientsList from './comp/ClientsList/ClientsList';
import {ClientsData} from './ClientsData';


class ClientsPage extends React.Component {
  render() {
    return (
      <div className={'AppClientsPage'}>
        <MenuBar/>
        <Header title={'Sistema de Gestion de Seguros'}/>
        <h2>Area de Clientes</h2>
        <ClientsList clients={ClientsData}/>
        <Footer/>
      </div>
    )
  }
}

export default ClientsPage;   
