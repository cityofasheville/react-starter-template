import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import {
  IM_MENU3,
  IM_SEARCH,
} from './iconConstants';
import './Navbar.css';
//import Icon from '../shared/Icon';
//import { IM_SEARCH } from '../shared/iconConstants';
//import AuthControl from '../utilities/auth/authControl';
//import LangSwitcher from '../utilities/lang/LangSwitcher';

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
      // <div style={{ display: this.state.navbarDisplay }}>
        <nav className={`Navbar-nav ${this.state.responsive ? 'responsive' : ''}`}>
          {
            this.props.items.map((item) =>
              <Link
                to={item.href}
                className={item.active ? "active" : ""}
                alt={item.text}
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
                  <LangSwitcher />
                */}
        </nav>
      // </div>
    );
  }
}

const linkShape = {
  href: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string,
  iconPath: PropTypes.string,
}

Navbar.propTypes  = {
    appTitle: PropTypes.string,
    authControl: PropTypes.bool,
    langSwitch: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape(linkShape)),
}

Navbar.defaultProps = {
    appTitle: 'A react app',
    authControl: true,
    langSwitcher: true,
    search: true,
    items: [
      {
        href: '/',
        active: true,
        text: 'test',
      },
      {
        href: '/',
        active: false,
        text: 'hello',
      },
      {
        href: '/',
        active: false,
        text: 'another item',
      },
      {
        href: '/',
        active: false,
        text: 'search',
        icon: IM_SEARCH,
      }
    ],
}