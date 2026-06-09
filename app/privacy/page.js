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
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Overview</h2>
            <p>
              This website is operated by Ridge Garibaldi, an individual buyer evaluating potential
              business acquisitions. This privacy policy explains how information submitted through
              the contact form on this website is collected and used.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              Information Collected
            </h2>
            <p>
              When you submit the contact form on this website, the following information may be
              collected:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Your business name (if provided)</li>
              <li>The contents of your message</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              How Information Is Used
            </h2>
            <p>
              Information submitted through this website is used solely to respond to your inquiry
              and to evaluate whether there may be a potential business acquisition conversation
              worth pursuing. Your information will not be sold, shared with third parties, or used
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Confidentiality</h2>
            <p>
              All inquiries are treated as confidential. Any information you share about yourself
              or your business will be handled with discretion and respect.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">Contact</h2>
            <p>
              If you have any questions about this privacy policy, you may contact Ridge Garibaldi
              directly at{' '}
              <a
                href="mailto:therhehan@gmail.com"
                className="text-blue-700 font-medium hover:underline"
              >
                therhehan@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
