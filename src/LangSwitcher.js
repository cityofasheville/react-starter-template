import React from 'react';
import { withLanguage } from './LanguageContext';
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
    <div id="langSwitcherDropdown" className={`dropdown-content ${props.language.dropdownOpen ? 'show' : ''}`}>
      <a
        href="#"
        onClick={() => props.language.switchLanguage(
          'English',
          'English',
          false)
        }
      >
        English
      </a>
      <a
        href="#"
        onClick={() => props.language.switchLanguage(
          'Spanish',
          'Espa\xF1ol',
          false)
        }
      >
        {'Espa\xF1ol'}
      </a>
    </div>
  </div>
);

export default withLanguage(LangSwitcher);
