import AnimateOnScroll from './AnimateOnScroll';

const features = [
  { icon: '🏆', title: 'Competitive Pricing', desc: 'We offer the most competitive rates in the market, backed by a vast network of buyers and suppliers.' },
  { icon: '🚚', title: 'Quick Pickup', desc: 'Our dedicated logistics team ensures fast, reliable pickup and delivery schedules.' },
  { icon: '🌿', title: 'Eco-Friendly', desc: 'Every ton of scrap we process contributes to a greener, more sustainable environment.' },
  { icon: '🔒', title: 'Quality Control', desc: 'Rigorous quality checks at every stage ensure only the best material is delivered.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1f14] mt-4">About Us</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#f59e0b] mx-auto mt-4 rounded-full" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="reveal animate-fade-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                alt="Our Facility"
                className="w-full object-cover h-96 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14]/60 to-transparent" />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-4 bg-gradient-to-br from-[#16a34a] to-[#14532d] text-white rounded-2xl p-5 shadow-2xl shadow-green-900/40">
              <div className="text-4xl font-black">15+</div>
              <div className="text-green-200 text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal animate-fade-right">
            <h3 className="text-2xl md:text-3xl font-black text-[#0b1f14] mb-5">
              What Sets <span className="text-[#16a34a]">Mholyfeet &amp; Sons</span> Apart
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Mholyfeet &amp; Sons</strong> specializes in high-quality scrap buying services, ensuring
              competitive pricing and eco-friendly recycling solutions. With a commitment to excellence, we
              provide cost-effective, credible, and timely services to help our clients get the best value.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our dedication, expertise, and customer-focused approach have earned us a strong reputation
              across the UAE — serving construction companies, manufacturing plants, and industrial warehouses.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 border-l-4 border-[#16a34a] rounded-r-xl pl-4 pr-3 py-4">
                <h4 className="font-bold text-[#0b1f14] mb-1">🎯 Our Mission</h4>
                <p className="text-gray-600 text-sm">Revolutionize metal recycling through innovative technology and sustainable practices.</p>
              </div>
              <div className="bg-amber-50 border-l-4 border-[#f59e0b] rounded-r-xl pl-4 pr-3 py-4">
                <h4 className="font-bold text-[#0b1f14] mb-1">👁️ Our Vision</h4>
                <p className="text-gray-600 text-sm">Become the leading provider of metal recycling solutions in the UAE.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0b1f14] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#16a34a] transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Contact Us Today <span>→</span>
            </a>
          </div>
        </AnimateOnScroll>

        {/* Features grid */}
        <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal delay-${(i + 1) * 100} bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#16a34a] hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h4 className="font-bold text-[#0b1f14] mb-2 group-hover:text-[#16a34a] transition-colors">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
