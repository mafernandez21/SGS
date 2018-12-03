import React from 'react';
import './stylesheet/Footer.scss'
//import IconButton from '@material-ui/core/IconButton';
//import HomeIcon from '@material-ui/icons/Home';
//import {Link} from 'react-router-dom';
import Clock from '../../Clock/Clock';

const Footer = () => {
  return (
    <div className={ 'AppFooter' }>
      <Clock titulo={'Hora Actual'}/>
    </div>
  );
};

export default Footer;


/*
<Link to={ '/home' }>
  <IconButton>
    <HomeIcon fontSize={'large'}/>
  </IconButton>
</Link>
*/
