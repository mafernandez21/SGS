import React from 'react';
import './stylesheet/Body.scss';
import {Redirect,Route,Switch} from 'react-router-dom';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import HomePage from '../../Pages/HomePage/HomePage';
import UsersPage from '../../Pages/UsersPage/UsersPage';
import ClientsPage from '../../Pages/ClientsPage/ClientsPage';
//import ClientCRUDPage from '../../clientCRUD/clientCRUD';

const AppBody = () => (
  <div className={'AppBody'}>
    <Switch>
      <Redirect from={'/home'} to={'/'}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/users" component={UsersPage}/>
      <Route exact path="/clients" component={ClientsPage}/>
      <Route exact path="/clients/list" component={ClientsPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
);

export default AppBody;

//<Route exact path="/client-area" component={ClientCRUDPage}/>
//<Route path="/contact-search" component={ ContactListPage } />
//<Route path="/contact-detail" component={ ContactDetailPage } />
      