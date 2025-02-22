'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import Socials from '@/components/Socials'
import { FaLinkedinIn } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaBluesky } from "react-icons/fa6";

const socialLinks = [
  { icon: FaBluesky, link: "https://bsky.app/profile/mpi-bgc.bsky.social" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/max-planck-institute-for-biogeochemistry/" },
  { icon: FaSquareXTwitter, link: "https://x.com/mpi_bgc" },
  // { icon: FaGithub, link: "https://github.com/xxu-sA-123" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Links */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Your Logo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--link-color)] hover:text-[var(--link-hover)]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--secondary-link-color)] hover:text-[var(--link-hover)]"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[var(--secondary-link-color)] hover:text-[var(--link-hover)]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="hidden sm:flex items-center space-x-4">
            <Socials socialLinks={socialLinks} />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--secondary-link-color)] hover:text-[var(--link-hover)] hover:bg-[var(--toggle-hover)]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-[var(--navbar-bg)]">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 text-base font-medium text-[var(--link-color)] hover:bg-[var(--toggle-hover)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-[var(--secondary-link-color)] hover:bg-[var(--toggle-hover)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-[var(--secondary-link-color)] hover:bg-[var(--toggle-hover)]"
            >
              Contact
            </Link>
          </div>
            <Socials socialLinks={socialLinks} />
            <ThemeToggle />
        </div>
        
      )}
    </nav>
  )
}
