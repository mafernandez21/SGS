import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => (
  <div className={'AppMenuBar'}>
    <ul>
        <Link to={'/home'}><li className={'menu'}>Home</li></Link>
        <Link to={'/clients'}><li className={'menu'}>Clientes</li></Link>
          <ul>
            <Link to={'/clients/manager'}><li className={'menu'}>Gestion de Clientes</li></Link>
            <Link to={'/clients/informs'}><li className={'menu'}>Informes de Clientes</li></Link>
            <Link to={'/clients/list'}><li className={'menu'}>Listado de Clientes</li></Link>
          </ul>
        <Link to={'/providers'}><li className={'menu'}>Proveedores</li></Link>
        <Link to={'/help'}><li className={'menu'}>Ayuda</li></Link>
    </ul>
  </div>
);

export default MenuBar;

//<Link to={'/contact-search'}><li>Buscar</li></Link>

/*
 <div className={'AppMenuBar'}>
    <ul>
        <Link to={'/home'}><li className={'menu'}>Home</li></Link>
        <li className={'dropdown-menu'}>
            <Link to={'/clients'} className={'dropdown-menu-btn'}>Clientes</Link>
              <div className={'dropdown-submenu'}>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Gestión de Clientes</Link>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Listado de Clientes</Link>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Informes de Clientes</Link>
              </div>
        </li>
        <li className={'dropdown-menu'}>
            <Link to={'/providers-area'} className={'dropdown-menu-btn'}>Proveedores</Link>
              <div className={'dropdown-submenu'}>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Gestión de Proveedores</Link>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Listado de Proveedores</Link>
                <Link to={'/#'} className={'dropdown-submenu-item'}>Informes de Proveedores</Link>
              </div>
        </li>
        <Link to={'/#'}><li className={'menu'}>Ayuda</li></Link>
    </ul>
  </div>
 */
