const services = [
  {
    title: "Private Events",
    description:
      "Elegant cocktail experiences for birthdays, celebrations, and intimate gatherings."
  },
  {
    title: "Weddings",
    description:
      "Create a memorable atmosphere with premium drinks and live jazz entertainment."
  },
  {
    title: "Corporate Events",
    description:
      "Sophisticated hospitality experiences for launches, conferences, and networking events."
  },
  {
    title: "Jazz Performances",
    description:
      "Live musicians bringing warmth, energy, and elegance to your occasion."
  }
];


export default function Services() {

  return (
    <section className="py-20 bg-[#0D0D0D] px-6">

      <div className="max-w-6xl mx-auto">

        <h2
          className="text-4xl text-center text-[#C6A75E] mb-12"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Our Experiences
        </h2>


        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="border border-white/10 p-8 rounded-xl hover:border-[#C6A75E] transition"
            >

              <h3 className="text-2xl text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/70">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}