export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(11,31,20,0.92) 0%, rgba(20,83,45,0.80) 100%), url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="animate-slide-down inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Metal Recycling Specialists Since 2010
        </span>

        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          Mholyfeet &amp; Sons
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#f59e0b]">
            Recycling Metals,
          </span>
          <br />
          <span className="text-3xl md:text-4xl font-bold text-gray-300">Building A Sustainable Future</span>
        </h1>

        <p className="animate-fade-up delay-200 text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Professional scrap buying, fair pricing, eco-friendly recycling, and smooth transactions across the UAE.
        </p>

        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white font-bold px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Get a Free Quote
            <span className="ml-2 group-hover:ml-4 transition-all">→</span>
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1 text-lg backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-up delay-500 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '15+', label: 'Years Experience', icon: '🏆' },
            { value: '500+', label: 'Satisfied Clients', icon: '🤝' },
            { value: '50K+', label: 'Tons Recycled', icon: '♻️' },
            { value: '60+', label: 'Countries Connected', icon: '🌍' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#f59e0b]">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
