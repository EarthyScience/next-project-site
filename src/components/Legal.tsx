import React from 'react';
import { FooterLinkProps, FooterLinksProps } from './FooterTypes';

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-[var(--secondary-link-color)] hover:text-[var(--link-hover)] transition-colors text-sm"
  >
    {children}
  </a>
);

const FooterLinks = ({ links, className = ''}: FooterLinksProps) => {
  if (!links || !Array.isArray(links)) {
    return null;
  }

  return (
    <ul className={`flex flex-row flex-wrap space-x-4 gap-y-2 mt-2 md:mt-0 ${className}`}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <FooterLink href={href}>{label}</FooterLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;