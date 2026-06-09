'use client';

import { useState } from 'react';

const inputBase =
  'w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-[0.9375rem] text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 transition-all';

const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#16a34a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', message: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-4">
        <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckIcon />
        </div>
        <h3 className="font-serif text-xl font-semibold text-navy mb-2">
          Message received.
        </h3>
        <p className="text-[0.9375rem] text-slate-600 leading-relaxed">
          Thanks &mdash; your message has been received. I&apos;ll follow up directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {error && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Name <span className="text-blue-700" aria-hidden="true">*</span>
        </label>
        <input
          type="text" id="name" name="name"
          value={form.name} onChange={handleChange}
          placeholder="Your name" autoComplete="name"
          className={inputBase} required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email <span className="text-blue-700" aria-hidden="true">*</span>
        </label>
        <input
          type="email" id="email" name="email"
          value={form.email} onChange={handleChange}
          placeholder="your@email.com" autoComplete="email"
          className={inputBase} required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-semibold text-navy">
          Phone
        </label>
        <input
          type="tel" id="phone" name="phone"
          value={form.phone} onChange={handleChange}
          placeholder="(optional)" autoComplete="tel"
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="business" className="text-sm font-semibold text-navy">
          Business Name
        </label>
        <input
          type="text" id="business" name="business"
          value={form.business} onChange={handleChange}
          placeholder="Business name (optional)"
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message <span className="text-blue-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Tell me a bit about the business or situation…"
          className={`${inputBase} resize-y`} required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid hover:shadow-lg transition-all text-[0.9375rem]"
      >
        Send Message
      </button>

      <p className="text-xs text-slate-400 text-center -mt-1">
        All inquiries are kept strictly confidential.
      </p>
    </form>
  );
}
