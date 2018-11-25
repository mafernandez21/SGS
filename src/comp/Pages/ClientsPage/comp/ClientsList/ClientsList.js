import React from 'react';
import PropTypes from 'prop-types';
import ClientListItem from '../ClientListItem/ClientListItem';

const ClientsList = ({title,clientes}) => {
  return(
    <div className={'client-list'}>
      <div>
        <h2><label>{title}</label></h2>
      </div>
      {
        clientes.map(
          (clientes) => (
            <ClientListItem key={clientes.id} cliente={clientes}/>
          )
        )
      }
    </div>
  );
};

ClientsList.propTypes = {
  title: PropTypes.string,
  clients: PropTypes.array
};

ClientsList.defaultProps = {
  title:'Listado sin titulo',
  clients:[]
};

export default ClientsList;
