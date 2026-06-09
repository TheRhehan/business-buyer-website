import ContactForm from '@/components/ContactForm';

const criteriaItems = [
  'Service-based business',
  'Stable history of customers',
  'Repeat or recurring revenue preferred',
  'Owner looking to transition or retire',
  'Strong local reputation',
  'Simple operations with room to improve',
];

const processSteps = [
  { num: '01', title: 'Introductory conversation' },
  { num: '02', title: 'Learn about the business' },
  { num: '03', title: 'Discuss fit and transition goals' },
  { num: '04', title: 'Review basic financials confidentially' },
  { num: '05', title: 'Structure a fair deal' },
  { num: '06', title: 'Plan a smooth handoff' },
];

const trustItems = [
  'Individual buyer, not private equity',
  'Respectful transition planning',
  'Long-term operator mindset',
];

export default function Home() {
  return (
    <>
      {/* HERO — dark navy */}
      <section
        className="bg-navy py-28 lg:py-44"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[0.8125rem] font-semibold tracking-[0.1em] uppercase text-white/40 mb-6">
              Individual Buyer &nbsp;·&nbsp; Service Businesses
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] mb-7"
            >
              Looking to Buy and Operate One Great Local Business
            </h1>
            <p className="text-lg lg:text-xl text-white/65 mb-10 max-w-2xl leading-relaxed">
              I&apos;m an individual buyer focused on acquiring a stable service-based business
              and continuing what the owner has built with care, respect, and long-term commitment.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-navy font-semibold rounded-lg hover:bg-stone-100 transition-all border-2 border-white text-[0.9375rem] shadow-md"
              >
                Start a Conversation
              </a>
            </div>
            <p className="text-sm text-white/35 font-medium">
              No pressure. No broker runaround. Just a confidential conversation.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — warm stone */}
      <section
        className="bg-stone-100 border-b border-stone-200 py-5"
        aria-label="Trust indicators"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2.5 py-4 md:py-3 md:px-8 text-center"
              >
                <span className="text-blue-700 font-bold text-sm shrink-0" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — light stone */}
      <section
        id="about"
        className="bg-stone-50 py-24 lg:py-28"
        aria-labelledby="about-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="about-heading"
              className="font-serif text-3xl lg:text-[2.25rem] font-semibold text-navy leading-tight mb-6"
            >
              Why I&apos;m Looking to Buy
            </h2>
            <p className="text-[1.0625rem] text-slate-600 leading-relaxed">
              I&apos;m looking to acquire one strong service-based business and operate it for
              the long term. I&apos;m not looking to flip a company, strip it down, or erase what
              made it successful. My goal is to build on the owner&apos;s work, protect the
              customer relationships, support the team, and create a smooth transition that makes
              sense for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* CRITERIA — white */}
      <section
        id="criteria"
        className="bg-white border-y border-stone-200 py-24 lg:py-28"
        aria-labelledby="criteria-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              id="criteria-heading"
              className="font-serif text-3xl lg:text-[2.25rem] font-semibold text-navy leading-tight"
            >
              What I&apos;m Looking For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {criteriaItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl p-5"
              >
                <span className="text-blue-700 font-bold shrink-0 mt-0.5" aria-hidden="true">
                  ✓
                </span>
                <span className="text-[0.9375rem] font-medium text-navy leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            Industries of interest include commercial cleaning, facilities services, home services,
            maintenance, B2B services, specialty trades, and other practical service businesses.
          </p>
        </div>
      </section>

      {/* OWNER LEGACY — dark navy */}
      <section
        className="bg-navy py-24 lg:py-28"
        aria-labelledby="legacy-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="legacy-heading"
              className="font-serif text-3xl lg:text-[2.25rem] font-semibold text-white leading-tight mb-6"
            >
              Your Business Deserves a Thoughtful Transition
            </h2>
            <p className="text-[1.0625rem] text-white/65 leading-relaxed">
              For many owners, the business is more than numbers on a spreadsheet. It represents
              years of work, relationships, reputation, and sacrifice. I understand that a sale is
              not just a transaction. It is a transition. My goal is to approach that process with
              respect, patience, and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS — stone */}
      <section
        id="process"
        className="bg-stone-50 py-24 lg:py-28"
        aria-labelledby="process-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              id="process-heading"
              className="font-serif text-3xl lg:text-[2.25rem] font-semibold text-navy leading-tight"
            >
              A Simple, Confidential Process
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {processSteps.map((step) => (
              <li
                key={step.num}
                className="bg-white border border-stone-200 rounded-2xl p-7 shadow-sm list-none"
              >
                <div className="font-serif text-[2rem] font-bold text-stone-200 leading-none mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif text-[1.0625rem] font-semibold text-navy leading-snug">
                  {step.title}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT — white */}
      <section
        id="contact"
        className="bg-white border-t border-stone-200 py-24 lg:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <h2
                id="contact-heading"
                className="font-serif text-3xl lg:text-[2.25rem] font-semibold text-navy leading-tight mb-4"
              >
                Open to a Private Conversation?
              </h2>
              <p className="text-[1.0625rem] text-slate-600 leading-relaxed mb-8">
                If you own a stable service business and are thinking about retirement, succession,
                or a gradual transition, I&apos;d be open to a confidential conversation.
              </p>
              <div className="flex flex-col gap-1.5">
                <span className="text-[0.8125rem] font-semibold tracking-[0.06em] uppercase text-slate-400">
                  Or email directly:
                </span>
                <a
                  href="mailto:ridge@garibaldiindustriesllc.com"
                  className="text-base font-semibold text-blue-700 hover:underline"
                >
                  ridge@garibaldiindustriesllc.com
                </a>
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
