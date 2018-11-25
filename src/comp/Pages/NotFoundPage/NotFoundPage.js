import React from 'react';
import './NotFoundPage.css'
import LogoImg from './NotFoundLogo.jpg';
import {Link} from 'react-router-dom';


class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Link to={ '/home' }>
          <p><img className = { 'PandaImg' } src = {LogoImg} alt = '404' ></img></p>
        </Link>
      </div>
    )
  }
}

export default NotFoundPage;
