import React from 'react';
import { FooterProps } from './FooterTypes';
import FooterLinks from './Legal';
import Copyright from './Copyright';
import Address from './Address';
import Contacts from './Contacts';
import Funding from './Funding';
import ProjectFunding from './ProjectFunding';
import ThemeToggle from './ThemeToggle';

import { 
  navigation,
  copyright,
  address,
  contactData,
  // projectText,
  fundingLogos 
} from '../constants/footer';

const Footer = ({ className = "" }: FooterProps) => {
  return (
      <footer className={`bg-[var(--navbar-bg)] border-t border-[var(--navbar-border)] ${className}`}>
          <Funding
            logo={fundingLogos}
            // description={projectText}
            description={<ProjectFunding />}
          />
          <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Address address={address} />
                  <Contacts data={contactData} subtitle="Project Office"/>
              </div>
              <div className="pt-2 border-t border-[var(--navbar-border)] flex flex-col md:flex-row md:justify-between">
                <Copyright text={copyright} />
                <ThemeToggle className="footer-theme-switcher" />
                <FooterLinks links={navigation} />
              </div>
          </div>
      </footer>
  );
};

export default Footer;
