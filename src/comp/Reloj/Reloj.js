import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Reloj.css'

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toTimeString()
    }
  }
  render() {
    return (
      <div className={'reloj'}>
        <label><p>{ this.props.titulo } : { this.state.hora }</p></label>
      </div>
    )
  }

  componentDidMount() {
    console.log('Se monto');
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
    console.log('Se va a desmontar');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({hora: new Date().toTimeString()});
  }


}


Reloj.protoTypes={
  titulo: PropTypes.string
}

Reloj.defaultProps={
  titulo: 'Hora del Sistema'
}

export default Reloj;
