import React, { useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  link?: string;
  text: string;
  items?: MenuItem[];
};

type MobileMenuProps = {
  items: MenuItem[];
};

const MobileMenu = ({ items }: MobileMenuProps) => {
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const handleMobileClick = (text: string) => {
    setOpenMobileSubmenu((prev) => (prev === text ? null : text));
  };

  return (
    <div className="sm:hidden flex justify-center">
      <div className="w-full max-w-xs">
        {items.map((item) => (
          <div key={item.text} className="relative border-b border-[var(--toggle-bg)]">
            <div className="flex justify-between items-center px-4 py-2">
              <button
                className="flex justify-between items-center w-full text-sm font-medium text-[var(--secondary-link-color)] hover:text-[var(--link-hover)] hover:bg-[var(--toggle-hover)] hover:rounded-lg mt-2 mx-2 px-4"
                onClick={() => {
                  if (item.link) {
                    window.location.href = item.link;
                  } else if (item.items) {
                    handleMobileClick(item.text);
                  }
                }}
              >
                <span>{item.text}</span>
                {item.items && (
                  <span className="ml-2">{openMobileSubmenu === item.text ? '-' : '+'}</span>
                )}
              </button>
            </div>

            {item.items && openMobileSubmenu === item.text && (
              <div className="pl-8">
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
