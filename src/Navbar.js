import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import {
  IM_MENU3,
} from './iconConstants';
import appSettings from './appSettings';
import navbarSettings from './navbarSettings';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false,
    };

    this.toggleResponsive = this.toggleResponsive.bind(this);
  }

  toggleResponsive(e) {
    e.preventDefault();
    this.setState({ responsive: !this.state.responsive })
  }

  render() {
    let position = { top: 0, right: 0 };
    if (appSettings.langSwitcher) {
      position = { top: 0, right: 80 };
    }
    return (
      <nav className={`Navbar-nav ${this.state.responsive ? 'responsive' : ''}`} style={position}>
        <div id="skip">
          <a href="#content">Skip to Main Content</a>
        </div>
        {
          navbarSettings.items.map(item => (
            <Link
              to={item.href}
              className={item.active ? 'active' : ''}
              alt={item.text}
              key={item.text}
            >
              {item.icon ? <Icon path={item.icon} size={24} />
                : item.text}
            </Link>))
        }
        <a
          href=""
          className="icon"
          onClick={this.toggleResponsive}
        >
          <Icon path={IM_MENU3} size={32} />
        </a>
      </nav>
    );
  }
}
