import React from 'react';
import { withLanguage } from './LanguageContext';
import langSwitcherSettings from './langSwitcherSettings';
import './LangSwitcher.css';

const LangSwitcher = props => (
  <div className="LangSwitcher-dropdown">
    <select onChange={(e) => {
      let language;
      let label;
      [language, label] = e.target.value.split(':');
      props.language.switchLanguage(
        language,
        label,
        false,
      );
    }}
    >
      {
        langSwitcherSettings.languages.map(lang => (
          <option key={lang.language} value={`${lang.language}:${lang.label}`}>{lang.label}</option>
        ))}
    </select>


    {/* <button
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
    </div> */}
  </div>
);

export default withLanguage(LangSwitcher);
