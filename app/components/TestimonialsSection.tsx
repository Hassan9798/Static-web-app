import AnimateOnScroll from './AnimateOnScroll';

const testimonials = [
  { name: 'Michael Rodriguez', role: 'Construction Manager',    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',   quote: "We've been working with Mholyfeet & Sons for 3 years. Their service is reliable, prices are fair, and they always pick up on time. Highly recommended!", stars: 5 },
  { name: 'Sarah Johnson',     role: 'Manufacturing Plant Owner',avatar: 'https://randomuser.me/api/portraits/women/44.jpg', quote: 'Their industrial scrap recycling service has helped us manage waste efficiently. The team is professional, and their documentation process is transparent.', stars: 5 },
  { name: 'Robert Chen',       role: 'Auto Repair Shop Owner',  avatar: 'https://randomuser.me/api/portraits/men/67.jpg',   quote: 'As a small business, I appreciate their flexible pickup schedule and fair pricing for scrap metal. A reliable partner for over 5 years now.', stars: 5 },
  { name: 'Lisa Thompson',     role: 'Warehouse Manager',       avatar: 'https://randomuser.me/api/portraits/women/68.jpg', quote: 'Mholyfeet & Sons helped us clear out years of accumulated metal waste. Their team was efficient and their safety protocols impressed us.', stars: 5 },
  { name: 'David Wilson',      role: 'Demolition Contractor',   avatar: 'https://randomuser.me/api/portraits/men/75.jpg',   quote: 'I work with them on all my demolition projects. They handle large volumes of scrap and always provide timely service at the most competitive pricing.', stars: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0b1f14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700/40 text-green-400 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Happy Clients
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Client Testimonials</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#f59e0b] mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4">Hear what our clients say about our services and professionalism.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i % 3) * 100 + 100} bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#16a34a]/50 hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="text-[#4ade80] text-5xl font-serif leading-none mb-2">&ldquo;</div>
              <Stars count={t.stars} />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#16a34a] group-hover:border-[#4ade80] transition-colors"
                />
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-green-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
