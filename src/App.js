import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './logo.svg';
import appSettings from './appSettings';
import LanguageProvider from './LanguageContext';
import LangSwitcher from './LangSwitcher';
import './App.css';

const App = props => (
  <main>
    <div className="App">
      <LanguageProvider>
        <header className="App-header">
          <Link to="/">
            <img className="App-logo" src={logo} alt="City of Asheville logo"></img>
            <div className="App-title-container">
              <h1 className="App-title">{appSettings.appTitle}</h1>
              <div className="App-intro">{appSettings.appIntro}</div>
            </div>
          </Link>
          <div className="App-nav">
            <Navbar />
            {appSettings.langSwitcher && <LangSwitcher />
            }
          </div>
        </header>
        <div className="container" id="content">
          {props.children}
        </div>
        {/* <Footer /> */}
        {/* <AuthProviderModal /> */}
      </LanguageProvider>
    </div>
  </main>
);

export default App;
