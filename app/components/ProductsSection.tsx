import AnimateOnScroll from './AnimateOnScroll';

const products = [
  { icon: '🔩', name: 'Iron Scrap',      desc: 'All types of iron & steel scrap with competitive pricing based on quality and grade.',              gradient: 'from-slate-100 to-slate-50', accent: '#64748b' },
  { icon: '🏗️', name: 'Steel Scrap',     desc: 'Industrial & structural steel scrap — HMS 1&2, shredded steel at top market rates.',           gradient: 'from-blue-50  to-sky-50',   accent: '#0ea5e9' },
  { icon: '🟠', name: 'Copper Scrap',    desc: 'High-quality copper wire, tubing, and other materials at the best competitive rates.',          gradient: 'from-orange-50 to-amber-50',accent: '#f97316' },
  { icon: '⬜', name: 'Aluminum Scrap', desc: 'Clean aluminum scrap including sheets, cans, extrusions, and profiles.',                        gradient: 'from-gray-50  to-zinc-50',  accent: '#6b7280' },
  { icon: '🟡', name: 'Brass Scrap',     desc: 'Various grades of brass scrap materials — rods, fittings, valves, and more.',                  gradient: 'from-yellow-50 to-lime-50', accent: '#ca8a04' },
  { icon: '✨',  name: 'Stainless Steel',desc: 'All grades of stainless steel scrap — 304, 316, and special alloys available.',                  gradient: 'from-indigo-50 to-purple-50',accent:'#6366f1' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> What We Deal In
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1f14] mt-4">Our Products</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#f59e0b] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              A diverse range of meticulously processed metal scrap, ready to fuel the manufacturing needs of diverse industries.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Product cards */}
        <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`reveal delay-${(i % 3) * 100 + 100} bg-white rounded-2xl shadow-sm border-2 border-transparent overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-[#16a34a] transition-all duration-300 group`}
            >
              <div className={`bg-gradient-to-br ${p.gradient} px-6 pt-8 pb-5 flex items-center gap-4`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                <h3 className="text-xl font-black text-[#0b1f14]">{p.name}</h3>
              </div>
              <div className="px-6 pb-6 pt-3">
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 mt-4 text-[#16a34a] font-bold text-sm hover:gap-2 transition-all">
                  Get Price <span>→</span>
                </a>
              </div>
              {/* Bottom accent line */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#16a34a] to-[#f59e0b] transition-all duration-500" />
            </div>
          ))}
        </AnimateOnScroll>

        {/* CTA banner */}
        <AnimateOnScroll>
          <div className="reveal mt-14 bg-gradient-to-r from-[#0b1f14] via-[#14532d] to-[#0b1f14] rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black mb-2">Ready to sell or source scrap metal?</h3>
              <p className="text-green-300">Contact our team for best rates and same-day quotes.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white font-bold px-10 py-4 rounded-xl hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Request a Quote →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
