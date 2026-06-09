export const metadata = {
  title: 'Privacy Policy | Ridge Garibaldi',
  description: 'Privacy policy for the Ridge Garibaldi acquisition inquiry website.',
};

export default function PrivacyPage() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy leading-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: 2025</p>

        <div className="space-y-10 text-[1rem] text-slate-600 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              Information Collected
            </h2>
            <p>
              This website collects information you voluntarily provide through the contact form,
              including your name, email address, phone number, and any details you share about
              your business. No information is collected automatically beyond standard server logs.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              How It Is Used
            </h2>
            <p>
              Information you submit is used solely to respond to your inquiry and evaluate a
              potential business acquisition conversation. Your information is not sold, rented,
              or shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Confidentiality</h2>
            <p>
              Any business information you share through this website will be treated with strict
              confidentiality. Ridge Garibaldi will not disclose details of your business or
              inquiry to outside parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              Third-Party Services
            </h2>
            <p>
              This website is hosted on Vercel. Standard hosting and analytics data may be
              processed in accordance with their respective privacy policies. No advertising
              trackers or third-party analytics are intentionally deployed on this site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              Questions about this privacy policy may be directed to{' '}
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
