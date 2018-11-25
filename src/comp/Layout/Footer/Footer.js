import React from 'react';
import './Footer.css'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import Reloj from '../../Reloj/Reloj';

const Footer = () => {
  return (
    <div className={ 'AppFooter' }>
      <Link to={ '/home' }>
        <IconButton>
          <HomeIcon fontSize={'large'}/>
        </IconButton>
      </Link>
      <Reloj titulo={'Hora Actual'}></Reloj>
    </div>
  );
};

export default Footer;
