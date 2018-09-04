import React from 'react';
import { withLanguage } from './LanguageContext';
import langSwitcherSettings from './langSwitcherSettings';
import './LangSwitcher.css';

const LangSwitcher = props => (
  <div className="LangSwitcher-dropdown">
    <button
      type="button"
      onClick={() => props.language.switchLanguage(
        props.language.language,
        props.language.label,
        !props.language.dropdownOpen)
      }
      className="dropbtn"
    >
      {props.language.label}
      <i className="arrow-down"></i>
    </button>
    <div
      id="langSwitcherDropdown"
      className={`dropdown-content ${props.language.dropdownOpen ? 'show' : ''}`}
    >
      {langSwitcherSettings.languages.map(lang => (
        <a
          href="#"
          onClick={() => props.language.switchLanguage(
            lang.language,
            lang.label,
            false)
          }
        >
          {lang.label}
        </a>
      ))}
    </div>
  </div>
);

export default withLanguage(LangSwitcher);
