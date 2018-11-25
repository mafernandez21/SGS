import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import Reloj from '../../Reloj/Reloj';

const Header = ({title}) => {
  return (
    <div className={'AppHeader'}>
      <div className={'AppHeader'} id={'AppHeaderTitle'}>
        {`${ title }`}
      </div>
    </div>
  );
};

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: ''
};

export default Header;

/*
          <div className={'AppHeader'} id={'AppHeaderTitle'}>
            {`${ title }`}
          </div>
*/
/*
          <div className={'AppHeader'} id={'AppHeaderClock'}>
            <Reloj/>
          </div>

/*
            <IconButton>
                <MenuIcon fontSize={'small'} />
            </IconButton>
*/
