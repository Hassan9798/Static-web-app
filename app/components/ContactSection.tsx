'use client';
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone Number',
    lines: ['+971 50 625 2875', '+971 54 452 0303'],
    sub: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
  },
  {
    icon: '🏭',
    label: 'Yard Address',
    lines: ['Industrial area Sajja, Sharjah UAE'],
    sub: 'RUKN AL TAWAR WASTE TREATMENT LLC',
  },
  {
    icon: '🏢',
    label: 'Office Address',
    lines: ['Office No: E-16F-02', 'Hamriyah Free Zone, Sharjah, UAE'],
    sub: '',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    lines: ['Mon-Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'],
    sub: 'Sunday: Closed',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Top green wave */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#16a34a] via-[#4ade80] to-[#f59e0b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Reach Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1f14] mt-4">Contact Us</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#f59e0b] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4">
              Get in touch for scrap metal pricing, pickup scheduling, or any other inquiries.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="reveal animate-fade-left bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-xl font-black text-[#0b1f14] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">✉️</span>
              Send Us a Message
            </h3>

            {status === 'success' ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-black text-green-800 text-xl mb-2">Message Sent!</h4>
                <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-[#16a34a] font-bold text-sm hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#16a34a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your scrap metal needs..."
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#16a34a] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    ⚠️ {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white font-black py-4 rounded-xl hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
                >
                  {status === 'loading' ? '⏳ Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="reveal animate-fade-right flex flex-col gap-5">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-[#f0fdf4] border-2 border-green-100 rounded-2xl p-5 flex gap-4 hover:border-[#16a34a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl shrink-0 mt-1">{info.icon}</span>
                <div>
                  <h4 className="text-[#16a34a] font-bold mb-1">{info.label}</h4>
                  {info.lines.map((line) => (
                    <p key={line} className="text-[#0b1f14] text-sm font-medium">{line}</p>
                  ))}
                  {info.sub && <p className="text-gray-500 text-xs mt-1">{info.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
