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
              <Navbar />
              <Link to="/">
                <img className="App-logo" src={logo} alt="City of Asheville logo"></img>
                <h1 className="App-title">{this.props.appTitle}</h1>
                <p className="App-intro">{this.props.appIntro}</p>
              </Link>    
              <div id="skip">
                <a href="#content">Skip to Main Content</a>
              </div>
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
