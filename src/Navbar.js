import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import {
  IM_MENU3,
} from './iconConstants';
import navbarSettings from './navbarSettings';
import './Navbar.css';
//import AuthControl from '../utilities/auth/authControl';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false,
    };

    this.toggleResponsive = this.toggleResponsive.bind(this);
  }

  toggleResponsive() {
    this.setState({ responsive: !this.state.responsive })
  }

  render() {
    return (
      <nav className={`Navbar-nav ${this.state.responsive ? 'responsive' : ''}`}>
        <div id="skip">
          <a href="#content">Skip to Main Content</a>
        </div>
        {
          navbarSettings.items.map((item) =>
            <Link
              to={item.href}
              className={item.active ? "active" : ""}
              alt={item.text}
              key={item.text}
            >{item.icon ? 
              <Icon path={item.icon} size={24} />
              :
              item.text}
            </Link>
          )
        }
        <a href="javascript:void(0);" className="icon" onClick={this.toggleResponsive}>
          <Icon path={IM_MENU3} size={32} />{/* <i class="fa fa-bars"></i> */}
        </a>
              {/*
                <AuthControl />
              */}
      </nav>
    );
  }
}
