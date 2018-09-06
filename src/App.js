import React from 'react';
import { Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Navbar from './Navbar';
import logo from './logo.svg';
import appSettings from './appSettings';
import LanguageProvider from './LanguageContext';
import UserProvider from './UserContext';
import Footer from './Footer';
import client from './AppClient';
import './App.css';

const App = props => (
  <ApolloProvider client={client}>
    <main>
      <div className="App">
        <LanguageProvider>
          <UserProvider>
            <header className="App-header">
              <Link to="/">
                <img className="App-logo" src={logo} alt="City of Asheville logo"></img>
                <div className="App-title-container">
                  <h1 className="App-title">{appSettings.appTitle}</h1>
                  <div className="App-intro">{appSettings.appIntro}</div>
                </div>
              </Link>
              <Navbar />
            </header>
            <div className="container" id="content">
              {/* {props.children} */}
              {appSettings.mainRoutes}
            </div>
            {appSettings.footer && <Footer />}
          </UserProvider>
        </LanguageProvider>
      </div>
    </main>
  </ApolloProvider>
);

export default App;
