import React from 'react';
import './HomePage.css';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import MenuBar from '../../Layout/MenuBar/MenuBar';

class HomePage extends React.Component {
  render() {
    return (
      <div className={'AppHomePage'}>
        <MenuBar/>
        <Header title={'Sistema de Gestion de Seguros'}/>
        <h2>Inicio</h2>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;            
