'use client';

import Image from 'next/image';
import Link from 'next/link';

const StreetLogo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link
      href="/"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <Image
        src="/street-logo-symbol.svg"
        alt="Street Logo"
        width={40}
        height={40}
        className="text-black"
        priority
      />
      <span className="text-xl font-bold uppercase tracking-tight text-black">
        STREET
      </span>
    </Link>
  );
};

export default StreetLogo;



