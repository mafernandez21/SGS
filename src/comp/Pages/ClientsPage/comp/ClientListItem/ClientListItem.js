import React from 'react'
import PropTypes from 'prop-types'

const ClientListItem = ({item}) => {
  return(
    <div>
      <label>{`Nombre: item.name`}</label>
    </div>
  )
}

ClientListItem.propTypes={
  item.PropTypes.shape(
    name.string.isRequired
  )
  
}

export default ClientListItem;
