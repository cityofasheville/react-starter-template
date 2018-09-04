import React from 'react';
import Icon from './Icon';
import { IM_GITHUB } from './iconConstants';
import footerSettings from './footerSettings';
import './Footer.css';

const Footer = () => (
  <div>
    <div className="clear-footer"></div>
    <footer className="footer">
      <div className="container">
        <div className="col-sm-12">
          {footerSettings.hasFeedbackForm
            && (
              <div>
                We strive for full accessibility. Report issues with our&nbsp;
                <a
                  className="inText"
                  href={footerSettings.feedbackURL}
                  target="_blank"
                  title="website feedback form"
                >
                  feedback form
                </a>
                .
              </div>
            )
          }
          {footerSettings.hasGitHubURL
            && (
              <div>
                It&apos;s open source! Fork it on&nbsp;
                <a
                  href={footerSettings.gitHubURL}
                  target="_blank"
                >
                  GitHub
                  <span style={{ marginLeft: '2px' }}>
                    <Icon
                      path={IM_GITHUB}
                      size={23}
                    />
                  </span>
                </a>
              </div>)
          }
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
