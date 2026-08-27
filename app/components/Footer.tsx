const services = [
  'Blue steel fabricated Scrap',
  'Pure CRC drum sheet bundles',
  'Rotatory machine clean material',
  'NTP (New Tin Plate Bundle)',
  'Iron and Steel Slag Metal',
  'New G.I Bundles',
  'LMS Bundles',
];

const quickLinks = ['Home', 'About', 'Products', 'Gallery', 'Testimonials', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#060e07] text-gray-400">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[#16a34a] via-[#4ade80] to-[#f59e0b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 bg-gradient-to-br from-[#f59e0b] to-[#16a34a] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
              M
            </div>
            <span className="text-white font-black text-sm leading-tight">
              Mholyfeet &amp; Sons<br />
              <span className="text-[#4ade80] text-xs font-normal">Metal Recycling</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Leading scrap metal trading and recycling company in Sharjah, UAE. Committed to
            sustainable practices and customer satisfaction since 2010.
          </p>
          <div className="flex gap-3">
            {['f', 'in', 'yt', 'x'].map((s) => (
              <div
                key={s}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a] transition-all duration-300 cursor-pointer font-bold"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#16a34a]" /> Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm hover:text-[#4ade80] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#16a34a] rounded-full group-hover:bg-[#4ade80] transition-colors" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#16a34a]" /> Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s} className="text-sm flex items-start gap-2">
                <span className="text-[#4ade80] shrink-0 mt-0.5">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#16a34a]" /> Get in Touch
          </h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2"><span className="text-[#4ade80]">📞</span> +971 50 625 2875</p>
            <p className="flex items-center gap-2"><span className="text-[#4ade80]">📞</span> +971 54 452 0303</p>
            <p className="flex items-center gap-2"><span className="text-[#4ade80]">📧</span> info@mholyfeet.com</p>
            <p className="flex items-center gap-2"><span className="text-[#4ade80]">📍</span> Industrial area Sajja, Sharjah UAE</p>
            <p className="flex items-center gap-2"><span className="text-[#4ade80]">🕐</span> Mon-Fri: 8AM–6PM</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 py-5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} <span className="text-[#4ade80]">Mholyfeet &amp; Sons</span> — All rights reserved.
        &nbsp;|&nbsp; Metal Recycling &amp; Scrap Trading, Sharjah UAE
      </div>
    </footer>
  );
}
