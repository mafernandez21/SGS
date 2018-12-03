import React from 'react'
import PropTypes from 'prop-types';
import './stylesheet/Clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTimeStr: new Date().toTimeString()
    }
  }
  
  componentDidMount() {
    //Cuando el componente se monta, establece un timer
    this.timerID = setInterval(() => this.updateTime(),1000);
  }

  componentWillUnmount() {
    //Cuando el componente se desmonta, elimina el timer
    clearInterval(this.timerID);
  }

  updateTime() {
    //Funcion que ejecuta el timer, en el intervalo seleccionado
    this.setState({dateTimeStr: new Date().toTimeString()});
  }

  render() {
    return (
      <React.Fragment>
        <label className='clock-face-text'>{ this.props.titulo } : { this.state.dateTimeStr }</label>
      </React.Fragment>
    )
  }
}

Clock.protoTypes={
  titulo: PropTypes.string
}

Clock.defaultProps={
  titulo: 'Hora del Sistema'
}

export default Clock;

/*
<div className={'Clock'}>
</div>
*/
