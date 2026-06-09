import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import MobileNav from '@/components/MobileNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Ridge Garibaldi | Acquiring One Great Service Business',
  description:
    'Ridge Garibaldi is an individual buyer looking to acquire and personally operate one stable, service-based business. Serious, respectful, and long-term focused.',
  openGraph: {
    title: 'Ridge Garibaldi',
    description:
      'Individual buyer looking to acquire and operate one strong service-based business. Focused on legacy, employees, and a smooth transition.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/* HEADER */}
        <header
          className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200"
          role="banner"
        >
          <div className="max-w-content mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-8">
            <a
              href="/"
              className="font-serif text-[1.0625rem] font-bold text-navy shrink-0"
              aria-label="Ridge Garibaldi — home"
            >
              Ridge Garibaldi
            </a>
            <MobileNav />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-navy border-t border-white/5 py-10" role="contentinfo">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-serif text-base font-bold text-white">Ridge Garibaldi</p>
                <p className="text-[0.8125rem] text-white/50 mt-0.5">
                  Individual buyer focused on long-term ownership.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="/privacy"
                  className="text-[0.8125rem] text-white/40 hover:text-white/70 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="/terms"
                  className="text-[0.8125rem] text-white/40 hover:text-white/70 transition-colors"
                >
                  Terms
                </a>
                <p className="text-[0.8125rem] text-white/30">
                  &copy; {year} Ridge Garibaldi. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
