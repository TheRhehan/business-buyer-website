export const metadata = {
  title: 'Terms of Use | Ridge Garibaldi',
  description: 'Terms of use for the Ridge Garibaldi acquisition inquiry website.',
};

export default function TermsPage() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight mb-3">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: 2025</p>

        <div className="space-y-10 text-[1rem] text-slate-600 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              Informational Only
            </h2>
            <p>
              This website is for informational purposes only. Nothing on this website constitutes
              a binding offer, commitment, or guarantee to purchase any business. Any indication of
              interest expressed through this website is non-binding and subject to further
              discussion, evaluation, and written agreement.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              No Binding Agreement
            </h2>
            <p>
              Submitting a contact form or communicating with Ridge Garibaldi does not create a
              contract, letter of intent, or any binding legal relationship. Any potential
              transaction would require direct discussion between the parties, independent due
              diligence, and the execution of formal written agreements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              No Professional Advice
            </h2>
            <p>
              Nothing on this website constitutes legal, financial, tax, or business advice.
              Parties considering a business sale are encouraged to consult their own qualified
              advisors before entering into any transaction.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Accuracy</h2>
            <p>
              Ridge Garibaldi makes reasonable efforts to ensure the information on this website is
              accurate but makes no warranties about its completeness or accuracy. The website and
              its content may be updated or changed at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              Questions about these terms may be directed to{' '}
              <a
                href="mailto:ridge@garibaldiindustriesllc.com"
                className="text-blue-700 font-medium hover:underline"
              >
                ridge@garibaldiindustriesllc.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
