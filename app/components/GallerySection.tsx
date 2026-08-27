import AnimateOnScroll from './AnimateOnScroll';

const images = [
  { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Scrap Yard Operations' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Processing Facility' },
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Steel Scrap Collection' },
  { src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Metal Sorting' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Copper Recycling' },
  { src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Industrial Machinery' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Our Facility
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1f14] mt-4">Our Gallery</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#f59e0b] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4">Take a look at our operations, facility, and recycling processes.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div key={img.src} className={`reveal delay-${(i % 3) * 100 + 100} relative overflow-hidden rounded-2xl group shadow-md`}>
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
                <div>
                  <span className="text-[#4ade80] text-xs font-bold uppercase tracking-widest">Gallery</span>
                  <p className="text-white font-bold mt-1">{img.title}</p>
                </div>
              </div>
              {/* Green corner tag */}
              <div className="absolute top-3 left-3 bg-[#16a34a]/90 text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
