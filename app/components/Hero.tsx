export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-6">

      <div className="max-w-4xl text-center">

        <h1
          className="text-5xl md:text-7xl text-[#C6A75E] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Where Jazz Meets The Pour
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-10">
          Premium cocktail experiences and live jazz performances
          crafted for unforgettable weddings, private celebrations,
          and corporate events.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="/contact"
            className="bg-[#C6A75E] text-black px-8 py-3 rounded-full"
          >
            Book Your Experience
          </a>

          <a
            href="/gallery"
            className="border border-[#C6A75E] text-[#C6A75E] px-8 py-3 rounded-full"
          >
            View Gallery
          </a>

        </div>

      </div>

    </section>
  );
}