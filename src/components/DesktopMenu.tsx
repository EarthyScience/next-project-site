import React, { useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  link?: string;
  text: string;
  items?: MenuItem[];
};

type NavigationProps = {
  items: MenuItem[];
};

const DesktopMenu = ({ items }: NavigationProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (text: string) => {
    setOpenSubmenu(text);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
        {items.map((item) => (
          <div
            key={item.text}
            className="relative flex items-center h-16"
            onMouseEnter={() => handleMouseEnter(item.text)}
            onMouseLeave={handleMouseLeave}
          >
            {item.link ? (
              <Link
                href={item.link}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--secondary-link-color)] hover:text-[var(--link-hover)]"
              >
                {item.text}
                {item.items && (
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ) : (
              <span className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--secondary-link-color)]">
                {item.text}
                {item.items && (
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            )}

            {item.items && openSubmenu === item.text && (
              <div className="absolute top-[80%] left-0 mt-1 w-48 rounded-md shadow-lg bg-[var(--navbar-bg)] ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.text}
                      href={subItem.link || '#'}
                      className="block px-4 py-2 text-sm text-[var(--secondary-link-color)] hover:text-[var(--link-hover)] hover:bg-[var(--navbar-border)]"
                      role="menuitem"
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default DesktopMenu;