'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5eb]/95 backdrop-blur-md transition-all duration-500 ease-in-out"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left Side: "Street Labs, Inc." + Black Street Symbol */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <span className="text-base font-light text-black font-navbar">
                Street Labs, Inc.
              </span>
              <Image
                src="/street-logo-symbol.svg"
                alt="Street Symbol"
                width={16}
                height={16}
                className="text-black"
              />
            </Link>

            {/* Right Side: Street, ERC-S Links + Apply Now Button */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex md:items-center md:gap-6">
                <a
                  href="https://www.street.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-black transition-opacity duration-200 hover:opacity-70 font-navbar"
                >
                  Street
                </a>
                <a
                  href="https://streetmemo.notion.site/The-ERC-S-Standard-v0-3-297463bea9d4811ca273cee5c378796d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-black transition-opacity duration-200 hover:opacity-70 font-navbar"
                >
                  ERC-S
                </a>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScAGpaIFDDd2rFCmpjFUdo1U2_m4F9cXPhcRRYwmIAb04-G-g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-2.5 text-sm font-medium text-black bg-transparent hover:bg-black/5 transition-all duration-200 font-navbar"
              >
                <span>Apply Now</span>
                <div className="w-5 h-5 bg-transparent border border-black rounded-full flex items-center justify-center">
                  <svg 
                    className="w-2.5 h-2.5 text-black" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-black p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Bottom black line - attached to navbar */}
        <div className="w-full h-px bg-black"></div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-80 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-200 px-6 py-4 space-y-4">
            <a
              href="https://www.street.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-light text-black transition-opacity duration-200 hover:opacity-70 py-2 font-navbar"
            >
              Street
            </a>
            <a
              href="https://streetmemo.notion.site/The-ERC-S-Standard-v0-3-297463bea9d4811ca273cee5c378796d"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-light text-black transition-opacity duration-200 hover:opacity-70 py-2 font-navbar"
            >
              ERC-S
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAGpaIFDDd2rFCmpjFUdo1U2_m4F9cXPhcRRYwmIAb04-G-g/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-black rounded-full px-6 py-3 text-base font-medium text-black bg-transparent hover:bg-black/5 transition-all duration-200 font-navbar"
            >
              <span>Apply Now</span>
              <div className="w-5 h-5 bg-transparent border border-black rounded-full flex items-center justify-center">
                <svg 
                  className="w-2.5 h-2.5 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
