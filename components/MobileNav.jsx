'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/#about',    label: 'About'    },
  { href: '/#criteria', label: 'Criteria' },
  { href: '/#process',  label: 'Process'  },
  { href: '/#contact',  label: 'Contact'  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-7" aria-label="Site navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/#contact"
          className="text-sm font-semibold bg-navy text-white px-4 py-2 rounded-lg hover:bg-navy-mid transition-colors ml-1"
        >
          Contact Me
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        <span className="block w-[22px] h-[2px] bg-navy rounded-sm" />
        <span className="block w-[22px] h-[2px] bg-navy rounded-sm" />
        <span className="block w-[22px] h-[2px] bg-navy rounded-sm" />
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav
          id="mobile-nav"
          className="absolute top-[68px] left-0 right-0 bg-white border-b border-slate-200 shadow-md z-50 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="max-w-content mx-auto px-6 py-2 flex flex-col" role="list">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-slate-100 last:border-0">
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3.5 text-base font-medium text-slate-600 hover:text-navy transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a
                href="/#contact"
                onClick={close}
                className="block w-full text-center py-2.5 bg-navy text-white font-semibold rounded-lg text-sm hover:bg-navy-mid transition-colors"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
