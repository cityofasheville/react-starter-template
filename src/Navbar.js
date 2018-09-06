import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import {
  IM_MENU3,
} from './iconConstants';
import appSettings from './appSettings';
import navbarSettings from './navbarSettings';
import LangSwitcher from './LangSwitcher';
import AuthControl from './AuthControl';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleOpen(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    let position = { top: 0, right: 0 };
    if (appSettings.langSwitcher) {
      position = { top: 0, right: 90 };
    }
    if (this.state.windowWidth > 600) {
      return (
        <div className="Navbar-container">
          {navbarSettings.items.length > 0
            && (
              <nav
                className="Navbar-nav"
                style={position}
                aria-label="main-menu"
              >
                {/* <div id="skip">
                  <a href="#content">Skip to Main Content</a>
                </div> */}
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
              </nav>
            )
          }
          {appSettings.authControl && <AuthControl />}
          {appSettings.langSwitcher && <LangSwitcher />}
        </div>
      );
    }
    return (
      <div className="Navbar-container narrow">
        {appSettings.authControl && <AuthControl />}
        {appSettings.langSwitcher && <LangSwitcher />}
        {navbarSettings.items.length > 0
          && (
            <nav
              className={`Navbar-nav hamburger ${this.state.open ? 'open' : ''}`}
              style={position}
              aria-label="main-menu"
            >
              <button
                className="dropdown-toggle"
                type="button"
                aria-haspopup="true"
                aria-expanded={this.state.open}
                aria-controls="menu"
                aria-label="Navigation"
                onClick={this.toggleOpen}
              >
                <Icon path={IM_MENU3} size={32} />
              </button>
              <ul className="dropdown-menu" id="menu" tabIndex="-1">
                {
                  navbarSettings.items.map((item, index) => (
                    <li key={`item.text_${index}`}>
                      <Link
                        to={item.href}
                        className={item.active ? 'active' : ''}
                        alt={item.text}
                      >
                        {item.icon ? <Icon path={item.icon} size={24} />
                          : item.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          )}
      </div>
    );
  }
}
