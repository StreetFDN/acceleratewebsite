'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
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
    }
  };

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/street-logo-symbol.svg"
                alt="Street Logo"
                width={40}
                height={40}
                className="invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              The Growth Program for Early-Stage Startups. Accelerate your startup's growth with our comprehensive program.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[1.3125rem] font-bold uppercase tracking-wider mb-4 !text-gray-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#program"
                  onClick={(e) => handleLinkClick(e, '#program')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  The Program
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, '#portfolio')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Stats
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#apply"
                  onClick={(e) => handleLinkClick(e, '#apply')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[1.3125rem] font-bold uppercase tracking-wider mb-4 !text-gray-400">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:team@street.app"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  team@street.app
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://x.com/StreetFDN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              *In case studies, no promise or guarantee
            </p>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Street. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

