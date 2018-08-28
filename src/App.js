import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className="App">
          {/* <LanguageProvider> */}
            <header className="App-header">
              <Link to="/">
                <img className="App-logo" src={logo} alt="City of Asheville logo"></img>
                <div className="App-title-container">
                  <h1 className="App-title">{this.props.appTitle}</h1>
                  <div className="App-intro">{this.props.appIntro}</div>
                </div>
              </Link>    
              <div id="skip">
                <a href="#content">Skip to Main Content</a>
              </div>
              <Navbar />
            </header>
            <div className="container" id="content">
              {this.props.children}
            </div>
            {/* <Footer /> */}
            {/* <AuthProviderModal /> */}
          {/* </LanguageProvider> */}
        </div>
      </main>
    );
  }
}

App.propTypes  = {
  appTitle: PropTypes.string,
  appIntro: PropTypes.string,
}

App.defaultProps = {
  appTitle: 'A react app',
  appIntro: 'City of Asheville, NC',
}

export default App;
