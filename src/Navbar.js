import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import Icon from '../shared/Icon';
//import { IM_SEARCH } from '../shared/iconConstants';
//import AuthControl from '../utilities/auth/authControl';
//import LangSwitcher from '../utilities/lang/LangSwitcher';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarCollapse: 'collapse',
      navbarDisplay: 'block',
    };

    this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
  }

  toggleNavbarCollapse() {
    if (this.state.navbarCollapse === 'collapse') {
      this.setState({ navbarCollapse: 'collapsed' });
    } else {
      this.setState({ navbarCollapse: 'collapse' });
    }
  }

  render() {
    return (
      <div style={{ display: this.state.navbarDisplay }}>
        <nav className="Navbar-nav">
          {
            this.props.items.map((item) =>
              <Link
                to={item.href}
                className={item.active ? "active" : ""}
              >{item.text}
              </Link>
            )
          }
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            BARS{/* <i class="fa fa-bars"></i> */}
          </a>
                {/* {(window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('dev-simplicity') > -1) &&
                  <LangSwitcher />
                } */}
        </nav>
      </div>
    );
  }
}

const linkShape = {
  href: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string,
}

Navbar.propTypes  = {
    appTitle: PropTypes.string,
    showAuthControl: PropTypes.bool,
    showLangSwitch: PropTypes.bool,
    showSearch: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape(linkShape)),
}

Navbar.defaultProps = {
    appTitle: 'A react app',
    showAuthControl: true,
    showLangSwitcher: true,
    showSearch: true,
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
      }
    ],
}