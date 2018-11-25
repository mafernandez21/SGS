import React from 'react';
import PropTypes from 'prop-types';
import './ClientListItem.css';
import {Cliente} from '../../../../Modelos/Cliente';

const ClientListItem = ({cliente}) => {
  return(
    <div className='client-list-item'>
      <p><label>{`Nombre: ${cliente.nombre}`}</label></p>
      <p><label>{`Apellido: ${cliente.apellido}`}</label></p>
      <p><label>{`Dominio: ${cliente.dominio}`}</label></p>
      <p><label>{`Pagos: ${cliente.pagos.length}`}</label></p>
    </div>
  )
}

ClientListItem.protoTypes={
  cliente: PropTypes.objectOf(Cliente).isRequired
}

/*
ClientListItem.propTypes={
  client:PropTypes.shape(
    {
      idCliente: PropTypes.number.isRequired,
      numero: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      dominio: PropTypes.string.isRequired, //Regxp ([a-z | A-Z]){2}([0-9]){3}([a-z | A-Z]){2}|([a-z | A-Z]){3}([0-9]){3}
      polizas: PropTypes.arrayOf(
        PropTypes.shape(
          {
            idPoliza: PropTypes.number.isRequired,
            number: PropTypes.number.isRequired,
            fechaInicioVigencia: PropTypes.DateTime.isRequired,
            fechaFinVigencia:  PropTypes.DateTime.isRequired,
            pagos: PropTypes.arrayOf(
              PropTypes.shape(
                {
                  idPago: PropTypes.number.isRequired,
                  monto: PropTypes.string.isRequired,
                  cupon: PropTypes.string.isRequired,
                  numeroPago: PropTypes.number.isRequired,
                  fechaPago: PropTypes.DateTime.isRequired,
                  fechaIngreso: PropTypes.DateTime.isRequired
                }
              )
            )
          }
        ).isRequired    
      ).isRequired
    }
  ).isRequired
}
*/
export default ClientListItem;
