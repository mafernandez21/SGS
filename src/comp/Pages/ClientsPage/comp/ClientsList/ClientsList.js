import React from 'react';
import PropTypes from 'prop-types';

const ClientsList = ({clients}) => {
  return(
    <div>
      <ul>
        <li>{clients[0].name}
        </li>
      </ul> 
    </div>
  );
};


ClientsList.propTypes = {
  clients: PropTypes.array
};

ClientsList.defaultProps = {
  clients:[]
};

export default ClientsList;
